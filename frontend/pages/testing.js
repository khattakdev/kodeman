import { useState } from 'react';
import ApiHeader from '../components/ApiHeader';
import Parameters from '../components/ApiHeader/inner-components/Parameter';
import Body from '../components/ApiHeader/inner-components/Body';
import Authorization from '../components/ApiHeader/inner-components/Authorization';
import Header from '../components/ApiHeader/inner-components/Header';

const ApiTesting = () => {
  const [apiHeader, setApiHeader] = useState('parameter');
  const [apiMethod, setApiMethod] = useState('get');
  const [apiUrl, setApiUrl] = useState('');
  function sendApiInput() {
    console.log(apiUrl);
    console.log(apiMethod);
  }

  return (
    <div className="main bg-gray-900">
      <div className="flex flex-row flex-wrap">
        <select
          defaultValue={'apiMethod'}
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
          className="border-2 border-gray-500 bg-gray-800 text-white m-2 rounded-sm my-2 px-4 py-2 w-3/4"
          type="text"
          placeholder="http://localhost:3000"
          onChange={(e) => {
            const apiInput = e.target.value;
            setApiUrl(apiInput);
          }}
        />
        <button
          className="bg-blue-700 text-white m-2 my-2 p-2 px-8 rounded-sm hover:bg-blue-600 border-2 border-blue-400"
          onClick={() => {
            sendApiInput();
          }}
        >
          Send
        </button>
      </div>
      <ApiHeader setApiHeader={setApiHeader} />
      {apiHeader === 'parameter' && <Parameters />}
      {apiHeader === 'body' && <Body />}
      {apiHeader === 'authorization' && <Authorization />}
      {apiHeader === 'header' && <Header />}
    </div>
  );
};
export default ApiTesting;
