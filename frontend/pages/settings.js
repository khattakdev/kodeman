import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { signIn, signOut, useSession } from 'next-auth/react';
import Layout from '../components/Layout';

const Settings = () => {
  const { data: session } = useSession();
  // const { accessToken } = data;
  // const { data: session, status } = useSession();
  // console.log(session);
  // const loading = status === "loading";
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateTheme = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-7 h-7 ml-4"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    }

    return (
      <MoonIcon
        className="w-7 h-7 ml-4"
        role="button"
        onClick={() => setTheme('dark')}
      />
    );
  };

  return (
    <Layout>
      <div className="flex bg-gray-300 text-black dark:bg-gray-900 dark:text-white max-h-screen w-full h-screen  justify-center">
        <div>
          <div>
            <h1 className="text-black dark:text-white font-bold p-4 flex content-start">
              Accent Color
            </h1>
            <button
              className=" bg-red-500 p-4 mx-4 border-0 rounded-full"
              title="red"
            ></button>
            <button
              className=" bg-green-500 p-4 mx-4 border-0 rounded-full"
              title="green"
            ></button>
            <button
              className=" bg-yellow-300 p-4 mx-4 border-0 rounded-full"
              title="yellow"
            ></button>
            <button
              className=" bg-blue-500 p-4 mx-4 border-0 rounded-full"
              title="blue"
            ></button>
            <button
              className=" bg-pink-400 p-4 mx-4 border-0 rounded-full"
              title="pink"
            ></button>
            <button
              className=" bg-purple-700 p-4 mx-4 border-0 rounded-full"
              title="purple"
            ></button>
          </div>
          <div className="flex flex-col">
            <h1 className="flex text-black dark:text-white font-bold p-4 w-1/2 content-start">
              Change Theme
            </h1>
            {updateTheme()}
            <h1 className="flex text-black dark:text-white p-4">
              Current Theme - {theme === 'dark' ? 'Dark' : 'Light'}
            </h1>
          </div>
          <div>Access Token: {session}</div>
          {!session && (
            <button
              onClick={signIn}
              className=" flex border-2 bg-blue-500 px-4 py-2 my-6 mx-4 text-black dark:text-white rounded-md transition duration-500 ease-in-out  hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110"
            >
              Connect To GitHub
            </button>
          )}
          {session && (
            <>
              <p>Welcome {session.user.email}</p>
              <button
                onClick={signOut}
                className=" flex border-2 bg-blue-500 px-4 py-2 my-6 mx-4 text-black dark:text-white rounded-md transition duration-500 ease-in-out  hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110"
              >
                SignOut
              </button>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
