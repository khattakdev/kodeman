// @TODO: Remove eslint-disable later
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ApiHeader from '../components/ApiHeader';
import Layout from '../components/Layout';
import Parameters from '../components/ApiHeader/inner-components/Parameter';
import Body from '../components/ApiHeader/inner-components/Body';
import Authorization from '../components/ApiHeader/inner-components/Authorization';
import Header from '../components/ApiHeader/inner-components/Header';

const ApiTesting = () => {
  const router = useRouter();
  const [currentOption, setCurrentOption] = useState('parameter');
  const [apiMethod, setApiMethod] = useState('get');
  const [apiUrl, setApiUrl] = useState('');
  const [queryParam, setQueryParam] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [auth, setAuth] = useState({
    token: '',
    username: '',
    password: '',
    type: '',
  });
  const [body, setBody] = useState('');

  useEffect(() => {
    console.log('Hello World!');
    const token = localStorage.getItem('token');
    if (!token) router.replace('/login');
  }, []);
  async function sendApiInput() {
    console.log(apiUrl);
    console.log(apiMethod);
    console.log(body);
    console.log(queryParam);
    console.log(headers);
    console.log(auth);

    const res = await axios[apiMethod](apiUrl);
    console.log(res);
    // @TODO: Send API Calls
  }

  return (
    <Layout classes="main bg-gray-900">
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
          className="border-2 border-gray-500 bg-gray-800 text-white m-2 px-4 rounded-sm my-2 py-2 w-3/4"
          type="text"
          placeholder="http://localhost:3000"
          onChange={(e) => {
            const apiInput = e.target.value;
            setApiUrl(apiInput);
          }}
        />
        <button
          className="bg-blue-700 text-white  my-2 p-2 px-4 rounded-sm hover:bg-blue-600 border-2 border-blue-400"
          onClick={() => {
            sendApiInput();
          }}
        >
          Send
        </button>
      </div>
      <ApiHeader setCurrentOption={setCurrentOption} />
      {currentOption === 'parameter' && (
        <Parameters queryParam={queryParam} setQueryParam={setQueryParam} />
      )}
      {currentOption === 'body' && <Body body={body} setBody={setBody} />}
      {currentOption === 'authorization' && (
        <Authorization auth={auth} setAuth={setAuth} />
      )}
      {currentOption === 'header' && (
        <Header headers={headers} setHeaders={setHeaders} />
      )}
      <div>
        <h1 className="text-gray-500 px-4 flex content-start">Response</h1>
        <div className={'border m-4 p-4 bg-gray-800 border-gray-600'}>
          <h3 className="text-gray-500 px-4 flex content-start">Status: 200</h3>
        </div>
      </div>
    </Layout>
  );
};
export default ApiTesting;
