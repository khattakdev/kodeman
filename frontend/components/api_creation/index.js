import Button from '../Layout/Button';

const APICreation = (props) => {
  const {
    dbValue,
    setDbValues,
    responseMessage,
    apiMethod,
    apiUrl,
    setApiUrl,
    setOption,
    apiNumber,
    setApiNumber,
  } = props;

  return (
    <>
      <h2>Creating API</h2>
      <p>{apiUrl}</p>
      <p>{apiMethod}</p>
      <p>{responseMessage}</p>
      {console.log(dbValue)}

      <Button
        classes="my-8"
        onClick={() => {
          const updatedApiNumber = apiNumber + 1;
          setApiNumber(updatedApiNumber);
          const updatedApiUrl = [...apiUrl];
          updatedApiUrl.push('');
          setApiUrl(updatedApiUrl);
          setOption(2);

          const updatedDbValues = [...dbValue];
          updatedDbValues.push([]);
          setDbValues(updatedDbValues);
          // @TODO: Add empty index to apiUrl, responseMessage, apiMethod, responseMessage
        }}
      >
        Create a new API Endpoint
      </Button>

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
