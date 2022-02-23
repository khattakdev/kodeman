const Authorization = (props) => {
  const { auth, setAuth } = props;

  function authType(e) {
    const newAuthType = e.target.value;
    const newAuth = {
      ...auth,
      type: newAuthType,
    };
    setAuth(newAuth);
  }

  function authValue(e) {
    const newAuth = { ...auth };
    const newAuthValue = e.target.value;
    const type = e.target.placeholder;
    if (type === 'Token') {
      newAuth.token = newAuthValue;
    } else if (type === 'Username') {
      newAuth.username = newAuthValue;
    } else if (type === 'Password') {
      newAuth.password = newAuthValue;
    }
    setAuth(newAuth);
  }
  return (
    <div>
      <div className="flex flex-row"></div>
      <div className="flex flex-row justify-between border-black  dark:border-gray-600 border m-4">
        <div className="flex content-start">
          <h1 className="text-black dark:text-gray-500 m-2 p-2">Authorized Type</h1>
          <select
            className="bg-gray-400 text-black dark:bg-gray-700 dark:text-white border-black dark:border-gray-600 rounded-sm px-2 m-2"
            onChange={authType}
          >
            <option defaultValue value="none">
              none
            </option>
            <option value="basic">Basic</option>
            <option value="bearer">Bearer Token</option>
            <option value="oauth">Oauth 2.0</option>
          </select>
        </div>
      </div>
      <div className="h-52 p-2 m-4 bg-gray-200 border border-gray-500 dark:bg-gray-800 dark:border-gray-600">
        {auth.type === 'basic' && (
          <>
            <input
              className="m-2 p-2 w-2/4 border-2 border-gray-500 bg-gray-100 text-black  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 "
              type="text"
              placeholder="Username"
              value={auth.username}
              onChange={authValue}
            />
            <input
              className="m-2 p-2 w-2/4 border-2 border-gray-500 bg-gray-100 text-black  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 "
              type="password"
              placeholder="Password"
              value={auth.password}
              onChange={authValue}
            />
          </>
        )}
        {(auth.type === 'bearer' || auth.type === 'oauth') && (
          <input
            className="m-2 p-2 w-2/4 border-2 border-gray-500 bg-gray-100 text-black  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 "
            type="text"
            placeholder="Token"
            value={auth.token}
            onChange={authValue}
          />
        )}
      </div>
    </div>
  );
};
export default Authorization;
