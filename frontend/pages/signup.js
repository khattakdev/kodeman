import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from '../axios';

const signup = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [iserror, setIsError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) router.replace('/testing');
  }, []);

  async function signupHandler(e) {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      setIsError(true);
      return;
    }

    const data = {
      email: username,
      password,
      confirmPassword,
    };

    const res = await axiosInstance.post('/user/register', data);
    if (res.status === 200) {
      const tokenToJSON = JSON.stringify(res.data.token);
      localStorage.setItem('token', tokenToJSON);
      router.push('/dashboard');
    }
  }

  return (
    <div className=" flex text-white bg-gray-800 text-center">
      <div className="h-screen w-5/12  bg-purple-700">
        <div className="m-10 ml-48 h-5/6 mr-0 bg-purple-600 shadow-2xl flex flex-col justify-around ">
          <img src="logo.png" className="p-24" alt="Kodeman Logo" />
          <Link href="/login">
            <a className="text-white">Already Have an Account? </a>
          </Link>
        </div>
      </div>
      <div className="h-screen bg-gray-800 w-full max-w-screen-sm">
        <div className="mt-10 mb-10 bg-gray-900 h-5/6 w-full shadow-2xl flex flex-col justify-around ">
          <form
            className="bg-gray-900 rounded px-8 py-2"
            onSubmit={signupHandler}
          >
            <div className="mb-12 ">
              <h1 className=" text-5xl">Create an Account</h1>
            </div>
            <div className="mb-6">
              <label className="block  text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                type="text"
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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******************"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmpassword"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="******************"
              />
            </div>
            <div className="mb-4">
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
            <span>{iserror ? 'Please Fill the form correctly' : ''}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;
