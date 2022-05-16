import { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Layout/Button';
import DatabaseValues from '../components/DatabaseValues';
import APICreation from '../components/api_creation';
import APIModels from '../components/api_models/model';

function createAPI() {
  const [option, setOption] = useState(1);
  const [apiNumber, setApiNumber] = useState(0);
  const [modelNames, setModelNames] = useState(['']);
  const [models, setAPIModels] = useState([[]]);
  const [modelForAPI, setModelForAPI] = useState(['']);
  const [_API, _setAPI] = useState([]);
  const [apiMethod, setApiMethod] = useState(['get']);
  const [dbValue, setDbValues] = useState([[]]);
  const [apiUrl, setApiUrl] = useState(['']);
  const [apiUrlList, setApiUrlList] = useState([]);
  const [projectName, setProjectName] = useState('Kodeman');
  const [responseMessage, setResponseMessage] = useState(['']);

  const addNewModel = () => {
    const updatedModelNames = [...modelNames];
    const updatedAPIModel = [...models];
    updatedModelNames.push('');
    updatedAPIModel.push([]);

    setModelNames(updatedModelNames);
    setAPIModels(updatedAPIModel);
  };
  return (
    // @TODO: Create Models
    <Layout>
      <div
        className={
          'bg-gray-300 text-black dark:bg-gray-900 dark:text-white p-8'
        }
      >
        <div className="flex justify-between">
          <div>
            {option >= 1 && (
              <Button
                onClick={() => {
                  const newOption = option - 1;
                  if (newOption !== 0) setOption(newOption);
                }}
              >
                Previous
              </Button>
            )}
          </div>
          <div>
            {option <= 4 && (
              <Button
                onClick={() => {
                  const newOption = option + 1;
                  setOption(newOption);

                  if (option === 2) {
                    const updatedApiUrlList = apiUrlList;
                    updatedApiUrlList.push(apiUrl);
                    setApiUrlList(updatedApiUrlList);
                    // setApiUrl('');
                  }
                }}
              >
                Next
              </Button>
            )}
          </div>
        </div>
        <p>Total APIs Created: {apiNumber}</p>
        CUSTOM OR PRESET {option}
        {/* 
          PRESET 
            OR  
          CUSTOM
            HTTP METHOD ✅
            ENDPOINT ✅
            DB VALUES (NAME, TYPE, DEFAULT, REQUIRED)
            GET IT FROM -> HEADER, BODY

        */}
        {option === 1 && (
          <>
            <div>
              <div className="flex items-center my-8">
                <h2 className="text-lg">Project name: </h2>
                <input
                  name="Api-URL"
                  className="border-2 border-gray-500 bg-gray-200 text-black dark:bg-gray-800 dark:text-white m-2 px-4 rounded-sm my-2 py-2 w-60"
                  type="text"
                  placeholder="Kodeman"
                  value={projectName}
                  onChange={(e) => {
                    const updatedProjectName = e.target.value;
                    setProjectName(updatedProjectName);
                  }}
                />
              </div>
            </div>
            <div>
              <Button classes="my-8" onClick={addNewModel}>
                Create a new model
              </Button>
              {models.map((model, index) => (
                <APIModels
                  key={index}
                  id={index}
                  apiModel={models}
                  modelNames={modelNames}
                  setModelNames={setModelNames}
                  setAPIModel={setAPIModels}
                />
              ))}
              {/* <APIModels id={2} apiModel={models} setAPIModel={setAPIModels} />
              <APIModels id={3} apiModel={models} setAPIModel={setAPIModels} /> */}
            </div>
          </>
        )}
        {option === 2 && (
          <div>
            <div className="flex flex-row flex-wrap">
              <select
                defaultValue={apiMethod[apiNumber]}
                onChange={(e) => {
                  const input = e.target.value;
                  const updatedApiMethod = [...apiMethod];
                  updatedApiMethod[apiNumber] = input;
                  setApiMethod(updatedApiMethod);
                }}
                id=""
                className="border-blue-400 border bg-blue-700 text-white m-2 ml-2 my-2 px-4 py-2 rounded-sm hover:bg-blue-600"
              >
                <option value="get">GET</option>
                <option value="post">POST</option>
                <option value="put">PUT</option>
                <option value="patch">PATCH</option>
                <option value="delete">DELETE</option>
                <option value="head">HEAD</option>
              </select>
              <input
                name="Api-URL"
                className="border-2 border-gray-500 bg-gray-200 text-black dark:bg-gray-800 dark:text-white m-2 px-4 rounded-sm my-2 py-2 w-3/4"
                type="text"
                placeholder="/user/login"
                value={apiUrl[apiNumber]}
                onChange={(e) => {
                  const input = e.target.value;
                  const updatedApiUrl = [...apiUrl];
                  updatedApiUrl[apiNumber] = input;
                  setApiUrl(updatedApiUrl);
                }}
              />
              <input
                name="Api-URL"
                className="border-2 border-gray-500 bg-gray-200 text-black dark:bg-gray-800 dark:text-white m-2 px-4 rounded-sm my-2 py-2 w-3/4"
                type="text"
                placeholder="users"
                value={modelForAPI[apiNumber]}
                onChange={(e) => {
                  const input = e.target.value;
                  const updatedModelForAPI = [...modelForAPI];
                  updatedModelForAPI[apiNumber] = input;
                  setModelForAPI(updatedModelForAPI);
                }}
              />
            </div>
            <Button classes="my-8 mx-4" onClick={addNewModel}>
              Login API
            </Button>
            <Button classes="my-8 mx-4" onClick={addNewModel}>
              Sign in with GitHub
            </Button>
            <Button classes="my-8 mx-4" onClick={addNewModel}>
              Login in with Google
            </Button>
          </div>
        )}
        {option === 3 && (
          <DatabaseValues
            apiNumber={apiNumber}
            dbValue={dbValue}
            setDbValues={setDbValues}
          />
        )}
        {option === 4 && (
          <input
            name="Api-Response"
            className="border-2 border-gray-500 bg-gray-200 text-black dark:bg-gray-800 dark:text-white m-2 px-4 rounded-sm my-2 py-2 w-3/4"
            type="text"
            placeholder="Response Message"
            value={responseMessage[apiNumber]}
            onChange={(e) => {
              const input = e.target.value;
              const updatedResponseMessage = [...responseMessage];
              updatedResponseMessage[apiNumber] = input;
              setResponseMessage(updatedResponseMessage);
            }}
          />
        )}
        {/* {option === 4 && apiMethod === 'get' && console.log(dbValue)} */}
        {option === 4 && apiMethod === 'post' && (
          <h2>POST METHOD / Save the data </h2>
        )}
        {option === 4 && apiMethod === 'put' && (
          <h2>PUT METHOD / Update the data</h2>
        )}
        {option === 4 && apiMethod === 'delete' && (
          <h2>DELETE METHOD / Remove the Data</h2>
        )}
        {option === 5 && (
          <APICreation
            modelForAPI={modelForAPI}
            projectName={projectName}
            models={models}
            modelNames={modelNames}
            dbValue={dbValue}
            setDbValues={setDbValues}
            responseMessage={responseMessage}
            apiMethod={apiMethod}
            apiUrl={apiUrl}
            setApiUrl={setApiUrl}
            apiNumber={apiNumber}
            setApiNumber={setApiNumber}
            setOption={setOption}
            _API={_API}
            _setAPI={_setAPI}
          />
        )}
      </div>
      {/* <Button
        onClick={async () => {
          const body = {
            projectName,
            dbValues: DatabaseValues,
            apiMethod,
          };
          const response = await axios.post('/download', body);
          console.log(response);
          fetch(
            'file:///Users/khattakdev/code/kodeman/backend/temp/kodename.zip'
          );
          // console.log(response);
          // const blob = new Blob([response.data], {
          //   type: 'application/zip',
          // });

          // console.log(blob);
          // FileSaver.saveAs(blob, 'test.zip');
        }}
      >
        Download project
      </Button> */}
    </Layout>
  );
}
export default createAPI;
