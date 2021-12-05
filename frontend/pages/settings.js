import Layout from '../components/Layout';

const Settings = () => (
  <Layout>
    <div className="flex bg-gray-900 max-h-screen w-full h-screen justify-center">
      <div>
        {/* <div>
          <h1 className="text-white font-bold p-4 flex content-start">
            User Name
          </h1>
          <input className="w-2/4 mx-4 bg-gray-200 border-0 rounded-md focus:outline-none focus:ring " />
        </div> */}
        <div>
          <h1 className="text-white font-bold p-4 flex content-start">
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
          <h1 className="flex text-white font-bold p-4 w-1/2 content-start">
            Change Theme
          </h1>
          <div className="flex flex-row">
            <div className="m-4 text-white font-normal">Light Mode</div>
            <label
              htmlFor="toogleA"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input id="toogleA" type="checkbox" className="sr-only" />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
              </div>
              <div className="m-4 text-white font-normal">Dark Mode</div>
            </label>
          </div>
        </div>
        <button className=" flex border-2 bg-blue-500 px-4 py-2 my-6 mx-4 text-white rounded-md transition duration-500 ease-in-out  hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110">
          Connect To GitHub
        </button>
      </div>
    </div>
  </Layout>
);

export default Settings;
