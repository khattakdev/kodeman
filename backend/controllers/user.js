const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const loginUser = {
  schema: {
    body: {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
      },
      additionalProperties: false,
    },
  },
  handler: async (request, reply) => {
    const { email, password } = request.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        await reply.code(409).send({
          message: "User doesn't exist",
        });
      }

      const matchedPassword = await bcrypt.compare(password, user.password);

      if (!matchedPassword) {
        await reply.status(401).send({ message: 'Invalid Password' });
      }

      const responseUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        'privateKey',
        {
          expiresIn: '7 days',
        }
      );

      await reply.send({ message: responseUser, token });
    } catch (e) {
      await reply.code(500).send({ messaged: 'Unexpected error!' });
    }
  },
};
const registerUser = {
  schema: {
    body: {
      type: 'object',
      required: ['email', 'password', 'confirmPassword'],
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
        confirmPassword: { type: 'string' },
      },
      additionalProperties: false,
    },
  },
  handler: async (request, reply) => {
    const { email, password, confirmPassword } = request.body;

    try {
      const userExist = await User.findOne({ email });

      if (userExist) {
        await reply.code(409).send({
          message: 'User already exist',
        });
      }

      if (password !== confirmPassword) {
        await reply.code(403).send({ message: 'Password doesn"t match' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = new User({
        email,
        password: hashedPassword,
      });

      await user.save();

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        'privateKey',
        {
          expiresIn: '7 days',
        }
      );

      await reply.send({ message: 'Account created', token });
    } catch (e) {
      await reply.code(500).send({ messaged: 'Unexpected error!' });
    }
  },
};

module.exports = {
  loginUser,
  registerUser,
};
