import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from '../axios';

const login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [iserror, setIsError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log('Hello World!');
    const token = localStorage.getItem('token');
    if (token) router.replace('/testing');
  }, []);

  async function loginHandler(e) {
    e.preventDefault();

    if (!username || !password) {
      setIsError(true);
      return;
    }

    const data = {
      email: username,
      password,
    };
    const res = await axiosInstance.post('/user/login', data);
    console.log(res);
    if (res.status === 200) {
      const tokenToJSON = JSON.stringify(res.data.token);
      localStorage.setItem('token', tokenToJSON);
      router.push('/dashboard');
      return;
    }

    console.log('Something went wrong');
  }

  return (
    <div className="flex  text-center text-white">
      <div className="h-screen w-5/12  bg-purple-700">
        <div className="m-10 ml-48 h-5/6 mr-0 bg-purple-600 shadow-2xl flex flex-col justify-around ">
          <img src="logo.png" className="p-24" alt="Kodeman logo" />
          <Link href="/signup">
            <a className="text-white">{"Don't have an Account? "}</a>
          </Link>
        </div>
      </div>
      <div className="h-screen bg-gray-800 w-full max-w-screen-sm">
        <div className="mt-10 mb-10 h-5/6  bg-gray-900 shadow-2xl flex flex-col justify-around ">
          <form
            className=" rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={loginHandler}
          >
            <div className="mb-12 ">
              <h1 className=" text-5xl">Login your Account</h1>
            </div>
            <div className="mb-6">
              <label className="block  text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <span>
              {iserror ? 'Please Check your Username and Passwrod' : ''}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
