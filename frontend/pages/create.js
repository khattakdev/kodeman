<<<<<<< HEAD
import Layout from '../components/Layout';

function createAPI() {
  return (
    <Layout>
      <div className={'bg-gray-900 h-72 p-8'}>
        You are now in API Creation Page
      </div>
=======
import { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Layout/Button';
import DatabaseValues from '../components/DatabaseValues';
import axios from '../axios';

function createAPI() {
  const [option, setOption] = useState(1);
  const [apiMethod, setApiMethod] = useState('get');
  const [dbValue, setDbValues] = useState([]);
  const [apiUrl, setApiUrl] = useState('');
  const [projectName, setProjectName] = useState('kodename');
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
            <Button
              onClick={() => {
                const newOption = option - 1;
                setOption(newOption);
              }}
            >
              Previous
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                const newOption = option + 1;
                setOption(newOption);
              }}
            >
              Next
            </Button>
          </div>
        </div>
        CUTOM OR PRESET {option}
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
          <div>
            <input
              name="Api-URL"
              className="border-2 border-gray-500 bg-gray-800 text-white m-2 px-4 rounded-sm my-2 py-2 w-3/4"
              type="text"
              placeholder="Kodeman"
              value={projectName}
              onChange={(e) => {
                const updatedProjectName = e.target.value;
                setProjectName(updatedProjectName);
              }}
            />
            <Button
              onClick={() => {
                const project = JSON.stringify({
                  projectName,
                });
                localStorage.setItem('kodeman_project', project);
              }}
            >
              Create new project
            </Button>
          </div>
        )}
        {option === 2 && (
          <div className="flex flex-row flex-wrap">
            <select
              defaultValue={apiMethod}
              onChange={(e) => setApiMethod(e.target.value)}
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
              className="border-2 border-gray-500 bg-gray-800 text-white m-2 px-4 rounded-sm my-2 py-2 w-3/4"
              type="text"
              placeholder="/user/login"
              value={apiUrl}
              onChange={(e) => {
                const apiInput = e.target.value;
                setApiUrl(apiInput);
              }}
            />
          </div>
        )}
        {option === 3 && (
          <DatabaseValues dbValue={dbValue} setDbValues={setDbValues} />
        )}
        {option === 4 && apiMethod === 'get' && (
          <h2>GET METHOD / Read the data</h2>
        )}
        {option === 4 && apiMethod === 'post' && (
          <h2>POST METHOD / Save the data </h2>
        )}
        {option === 4 && apiMethod === 'put' && (
          <h2>PUT METHOD / Update the data</h2>
        )}
        {option === 4 && apiMethod === 'delete' && (
          <h2>DELETE METHOD / Remove the Data</h2>
        )}
      </div>
      <Button
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
      </Button>
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
    </Layout>
  );
}
export default createAPI;
