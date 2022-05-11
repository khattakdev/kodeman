// @TODO: Remove eslint-disable later
/* eslint-disable no-console */
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
=======
import { useState } from 'react';
import axios from 'axios';
// import { useRouter } from 'next/router';
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
import ApiHeader from '../components/ApiHeader';
import Layout from '../components/Layout';
import Parameters from '../components/ApiHeader/inner-components/Parameter';
import Body from '../components/ApiHeader/inner-components/Body';
import Authorization from '../components/ApiHeader/inner-components/Authorization';
import Header from '../components/ApiHeader/inner-components/Header';
import Response from '../components/ApiHeader/inner-components/Response';

const ApiTesting = () => {
<<<<<<< HEAD
  const router = useRouter();
=======
  // const router = useRouter();
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
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
  const [res, setRes] = useState(undefined);

<<<<<<< HEAD
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.replace('/login');
  }, []);
=======
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) router.replace('/login');
  // }, []);
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
  async function sendApiInput() {
    // console.log(apiUrl); ✅
    // console.log(apiMethod); ✅
    // console.log(body);
    // console.log(queryParam); ✅
    // console.log(headers); ✅
    // console.log(auth);
    let authorization = {};

    if (auth.type === 'bearer' || auth.type === 'oauth') {
      authorization = {
        Authorization: auth.token,
      };
    } else if (auth.type === 'basic') {
      authorization = {
        username: auth.username,
        password: auth.password,
      };
    }

    const reqHeaders = {};
    const reqParams = {};
    headers.forEach((header) => {
      reqHeaders[header.parameter] = header.value;
    });
    queryParam.forEach((param) => {
      reqParams[param.parameter] = param.value;
    });

    const params = {};

    console.log(!!reqParams);
    if (reqParams) {
      params.params = reqParams;
    }
    const beforeRes = new Date();
    const response = await axios[apiMethod](apiUrl, {
      ...params,
      ...body,
      headers: {
        ...reqHeaders,
        ...authorization,
      },
    });
    const resTime = new Date() - beforeRes;
    response.time = resTime;
    setRes(response);
    // @TODO: Send API Calls
  }

  return (
<<<<<<< HEAD
    <Layout classes="main bg-gray-900">
=======
    <Layout classes="main bg-gray-300 dark:bg-gray-900 dark:text-white">
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
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
<<<<<<< HEAD
          className="border-2 border-gray-500 bg-gray-800 text-white m-2 px-4 rounded-sm my-2 py-2 w-3/4"
=======
          className="border-2 border-gray-400  bg-gray-200 text-black dark:border-gray-500  dark:bg-gray-800 dark:text-white m-2 px-4 rounded-sm my-2 py-2 w-3/4"
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
          type="text"
          placeholder="http://localhost:3000"
          value={apiUrl}
          onChange={(e) => {
            const apiInput = e.target.value;
            setApiUrl(apiInput);
          }}
        />
        <button
          className={`${
            apiUrl === ''
<<<<<<< HEAD
              ? 'bg-gray-700 cursor-not-allowed'
=======
              ? 'bg-gray-400  dark:bg-gray-700 cursor-not-allowed'
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
              : 'bg-blue-700 hover:bg-blue-600'
          } text-white my-2 p-2 px-4 rounded-sm  border-2 border-blue-400`}
          onClick={() => {
            if (apiUrl) sendApiInput();
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
      {res && <Response res={res} />}
    </Layout>
  );
};
export default ApiTesting;
