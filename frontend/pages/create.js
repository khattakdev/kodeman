import { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Layout/Button';
import DatabaseValues from '../components/DatabaseValues';

function createAPI() {
  const [option, setOption] = useState(1);
  const [apiMethod, setApiMethod] = useState('get');
  const [dbValue, setDbValues] = useState([]);
  const [apiUrl, setApiUrl] = useState('');
  return (
    <Layout>
      <div className={'bg-gray-900 p-8'}>
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
            <Button
              onClick={() => {
                const newOption = option + 1;
                setOption(newOption);
              }}
            >
              Next
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
            <button
              className={`${
                apiUrl === ''
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-blue-700 hover:bg-blue-600'
              } text-white my-2 p-2 px-4 rounded-sm  border-2 border-blue-400`}
              onClick={() => {
                const newOption = option + 1;
                setOption(newOption);
              }}
            >
              Next
            </button>
          </div>
        )}
        {option === 1 && (
          <DatabaseValues dbValue={dbValue} setDbValues={setDbValues} />
        )}
      </div>
    </Layout>
  );
}
export default createAPI;
