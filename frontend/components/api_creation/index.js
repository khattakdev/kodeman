const APICreation = (props) => {
  const { dbValue, responseMessage, apiMethod, apiUrl, setOption } = props;

  /*

    dbValue={dbValue}
            responseMessage={responseMessage}
            apiMethod={apiMethod}
            apiUrl={apiUrl}

    */
  return (
    <>
      <h2>Creating API</h2>
      <p>{apiUrl}</p>
      <p>{apiMethod}</p>
      <p>{responseMessage}</p>
      {console.log(dbValue)}
      <p
        onClick={() => {
          setOption(2);
        }}
      >
        Create New API Endpoint
      </p>
      <p
        onClick={() => {
          setOption(6);
        }}
      >
        Finish Project
      </p>
    </>
  );
};

export default APICreation;
