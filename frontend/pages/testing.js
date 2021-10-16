import { useState } from 'react';
import ApiHeader from '../components/ApiHeader';
import Parameters from '../components/ApiHeader/inner-components/Parameter';
import Body from '../components/ApiHeader/inner-components/Body';
import Authorization from '../components/ApiHeader/inner-components/Authorization';

const ApiTesting = () => {
  const [apiHeader, setApiHeader] = useState('parameter');
  return (
    <div className="main">
      <div className="flex flex-row flex-wrap">
        <select
          id=""
          className="border-blue-400 border bg-blue-700 text-white m-2 ml-2 my-2 px-4 py-2 rounded-sm hover:bg-blue-600"
        >
          <option value="get" selected>
            GET
          </option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="patch">PATCH</option>
          <option value="delete">DELETE</option>
          <option value="head">HEAD</option>
        </select>
        <input
          name="Api-URL"
          className="border-2 border-gray-500 bg-gray-800 text-white m-2 rounded-sm my-2 px-4 py-2 w-3/4"
          type="text"
          placeholder="http://localhost:3000"
        />
        <button className="bg-blue-700 text-white m-2 my-2 p-2 px-8 rounded-sm hover:bg-blue-600 border-2 border-blue-400">
          Send
        </button>
      </div>
      <ApiHeader setApiHeader={setApiHeader} />
      {apiHeader === 'parameter' && <Parameters />}
      {apiHeader === 'body' && <Body />}
      {apiHeader === 'authorization' && <Authorization />}
    </div>
  );
};
export default ApiTesting;
