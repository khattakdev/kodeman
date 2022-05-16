/* eslint-disable no-plusplus */
const { zip } = require('zip-a-folder');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);
const appendFile = promisify(fs.appendFile);

function capitalize(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0) newStr += str[0].toUpperCase();
    else newStr += str[i];
  }

  return newStr;
}

const sourceDir = path.join(__dirname, '..', 'template');
function copyFiles(destinationDir) {
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }
  fsExtra.copy(sourceDir, destinationDir, (error) => {
    if (error) {
      throw error;
    } else {
      console.log('success!');
    }
  });
}

async function createREADME(
  apiUrl,
  apiMethod,
  dbValue,
  modelNames,
  models,
  destinationDir
) {
  const markdownFile = path.join(destinationDir, 'readme.md');

  let modelForMarkDown = '';
  let apisForMarkDown = '';

  apiUrl.forEach((currentApiUrl, index) => {
    const currentApiMethod = apiMethod[index];
    const currentDbValue = dbValue[index];

    if (currentApiMethod && currentApiUrl) {
      apisForMarkDown += `
      - ${currentApiUrl} - ${currentApiMethod}
      > ${JSON.stringify(currentDbValue)}
      `;
    }
  });

  models.forEach((currentModel, index) => {
    const currentModelName = modelNames[index];
    if (currentModel && currentModelName) {
      modelForMarkDown += `
      - ${currentModelName}
      > ${JSON.stringify(currentModel)}
      `;
    }
  });

  await writeFile(
    markdownFile,
    `
# <center>Your Project Name</center>

## Models
${modelForMarkDown}

## APIs
${apisForMarkDown}
`
  );
}

function createModels(modelNames, models, destinationDir) {
  models.map(async (model, index) => {
    const modelName = modelNames[index];
    const schemaTop = `
        const mongoose = require("mongoose");

        const { Schema } = mongoose;
        
        const ${modelName}Schema = new Schema({
                `;

    const schemaFooter = `
        },
            {
                timestamps: {
                    createdAt: "created_at",
                    updatedAt: "updated_at"
                }
            }    
            
            );
            
            module.exports = mongoose.model("${modelName}", ${modelName}Schema);`;

    // Create a new file
    // Insert schemaTop
    await writeFile(
      path.join(destinationDir, 'model', `${modelName}.js`),
      schemaTop
    );
    model.map((currentModel) => {
      const schemaObject = `
      ${currentModel.name}:{
            type: "${currentModel.type}",
            required: "${currentModel.required}",
            defaultValue: "${currentModel.defaultValue}",
        },
        
        `;
      return fs.appendFileSync(
        path.join(destinationDir, 'model', `${modelName}.js`),
        schemaObject
      );
    });

    // Insert Footer
    await appendFile(
      path.join(destinationDir, 'model', `${modelName}.js`),
      schemaFooter
    );
  });
}

function checkForPassword(apiUrl) {
  if (apiUrl === '/login') {
    return `
    if (item[0].password !== password) {
        return res.status(401).json({
          error: ['Invalid password'],
        });
      }

      const token = jwt.sign(
        {
          id: item.id,
          email
        },
        "secretKey",
        {
          expiresIn: "30d"
        }
      );
          `;
  }
  return '';
}

function createController(
  currentApiMethod,
  modelForAPI,
  currentDbValue,
  index,
  apiUrl
) {
  if (currentApiMethod === 'get') {
    let variables = '';

    const token = apiUrl[index] === '/login' ? 'token' : '';
    for (let i = 0; i < currentDbValue.length; i++) {
      variables += `const ${currentDbValue[i].name} = req.${currentDbValue[i].placement}.${currentDbValue[i].name};
        `;
    }
    return `
    async (req, res) => {
      try {
          ${variables}
        let item = await ${capitalize(modelForAPI[index])}.find({ ${
      currentDbValue[0].name
    }
    });

    if (item.length === 0) {
        return res.status(401).json({
          error: ["Record not found"]
        });
      }

      ${checkForPassword(apiUrl[index])}
        res.status(200).json({
          item,
          ${token}
        });
      } 

      `;
    // eslint-disable-next-line no-else-return
  } else if (currentApiMethod === 'post') {
    let variables = '';
    let recordData = '';

    //     const hashed =
    //       apiUrl[index] === '/login'
    //         ? `

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
    // `
    //         : '';

    for (let i = 0; i < currentDbValue.length; i++) {
      variables += `const ${currentDbValue[i].name} = req.${currentDbValue[i].placement}.${currentDbValue[i].name};
        `;
      recordData += `${`${currentDbValue[i].name},`}`;
    }

    return `
    async (req, res) => {
        try {


    ${variables}

    const items = new ${capitalize(modelForAPI[index])}({
${recordData}
      });

      const savedItem = await items.save();
      return res.status(200).json({
          msg: "Item Saved!",
          item: savedItem
      })
    }
      `;
  } else if (currentApiMethod === 'delete') {
    let variables = '';

    for (let i = 0; i < currentDbValue.length; i++) {
      variables += `const ${currentDbValue[i].name} = req.${currentDbValue[i].placement}.${currentDbValue[i].name};
        `;
    }
    return `
      async (req, res) => {
        try {
            ${variables}
          let item = await ${capitalize(modelForAPI[index])}.find({ ${
      currentDbValue[0].name
    }
      });

      if (item.length === 0) {
        return res.status(401).json({
          error: ["Record not found"]
        });
      }

      await item[0].remove();

      return res.status(200).json({
        msg: "Item Removed!",
        item
    })
}
      `;
  } else if (currentApiMethod === 'put') {
    let variables = '';
    let recordData = '';

    for (let i = 0; i < currentDbValue.length; i++) {
      variables += `const ${currentDbValue[i].name} = req.${currentDbValue[i].placement}.${currentDbValue[i].name};
        `;
      recordData += `${`${currentDbValue[i].name},`}`;
    }
    return `
      async (req, res) => {
        try {
            ${variables}

            const updatedItems = new ${capitalize(modelForAPI[index])}({
                ${recordData}
                      });

          let item = await ${capitalize(
            modelForAPI[index]
          )}.findOneAndUpdate({ ${currentDbValue[0].name}, 
      },  { $set: { ${recordData} } });

      if (item.length === 0) {
        return res.status(401).json({
          error: ["Record not found"]
        });
      }


      const savedItem = await item.save();
      return res.status(200).json({
          msg: "Item Saved!",
          item: savedItem
      })
    }
      `;
  }
  return '() => {}';
}

// PassportJS generator
async function createPassportJS(authWith, destinationDir) {
  // Add headers
  let headersForAuth = '';

  let bodyForAuth = '';

  authWith.forEach((auth) => {
    if (auth === 'github') {
      headersForAuth += `const GithubStrategy = require("passport-github2").Strategy;
`;
      bodyForAuth += `
passport.use(
        new GitHubStrategy(
          {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback",
          },
          function (accessToken, refreshToken, profile, done) {
            done(null, profile);
          }
        )
      );
`;
    } else if (auth === 'google') {
      headersForAuth += `const GoogleStrategy = require("passport-google-oauth20").Strategy;
`;
      bodyForAuth += `
passport.use(
        new GoogleStrategy(
          {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
          },
          function (accessToken, refreshToken, profile, done) {
            done(null, profile);
          }
        )
      );
`;
    } else if (auth === 'facebook') {
      headersForAuth += `const FacebookStrategy = require("passport-facebook").Strategy;
`;
      bodyForAuth += `
passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    ));
`;
    }
  });

  await writeFile(
    path.join(destinationDir, 'middleware', `passport.js`),
    `
const passport = require("passport");
${headersForAuth}
${bodyForAuth}

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
    `
  );
  // check for social media (GitHub, Facebook)
}

async function createRouters(
  apiUrl,
  apiMethod,
  modelForAPI,
  dbValue,
  destinationDir
) {
  let importedModels = '';

  const uniqueModelForAPI = [...new Set(modelForAPI)];
  for (let i = 0; i < uniqueModelForAPI.length; i++) {
    importedModels += `const ${capitalize(
      uniqueModelForAPI[i]
    )} = require("../model/${uniqueModelForAPI[i]}");
`;
  }

  await writeFile(
    path.join(destinationDir, 'routes', `index.js`),
    `
const express = require('express');
const jwt = require("jsonwebtoken");
const { body } = require('express-validator');
const bcrypt = require("bcryptjs");
${importedModels}
const router = express.Router();
const isAuth = require('../Middleware/auth');
`
  );

  apiUrl.map((url, index) => {
    const currentApiMethod = apiMethod[index];
    const currentDbValue = dbValue[index];
    console.log(currentApiMethod, currentDbValue);
    if (currentApiMethod && currentDbValue) {
      return fs.appendFileSync(
        path.join(destinationDir, 'routes', `index.js`),
        `
        router.${currentApiMethod}("${url || '/'}" , ${createController(
          currentApiMethod,
          modelForAPI,
          currentDbValue,
          index,
          apiUrl
        )}
          catch(err) {
            return console.log(err)
          }
        })
        `
      );
    }
    return '';
  });

  await appendFile(
    path.join(destinationDir, 'routes', `index.js`),
    `
  module.exports = router;
  `
  );
}

const downloadProject = {
  handler: async (request, reply) => {
    const randomName = uuidv4();
    const destinationDir = path.join(__dirname, '..', 'temp', 'temporary');
    const destinationZipped = path.join(
      __dirname,
      '..',
      'temp',
      `${randomName}.zip`
    );
    const {
      //   projectName,
      authWith,
      modelForAPI,
      modelNames,
      models,
      dbValue,
      //   responseMessage,
      apiMethod,
      apiUrl,
    } = request.body;

    // const destinationDir = path.join(__dirname, '..', 'temp', 'temporary');

    // Copy Template
    await copyFiles(destinationDir);
    // Create models
    await createModels(modelNames, models, destinationDir);

    if (authWith.length > 0) {
      await createPassportJS(authWith, destinationDir);
    }

    await createRouters(
      apiUrl,
      apiMethod,
      modelForAPI,
      dbValue,
      destinationDir
    );

    await createREADME(
      apiUrl,
      apiMethod,
      dbValue,
      modelNames,
      models,
      destinationDir
    );

    await zip(destinationDir, destinationZipped);

    reply.send(`http://localhost:3000/${destinationZipped}`);
  },
};

module.exports = {
  downloadProject,
};
