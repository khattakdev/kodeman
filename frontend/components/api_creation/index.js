import Button from '../Layout/Button';
import axiosInstance from '../../axios';

const APICreation = (props) => {
  const {
    modelForAPI,
    projectName,
    modelNames,
    models,
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

  async function downloadProject() {
    const data = {
      modelForAPI,
      projectName,
      modelNames,
      models,
      dbValue,
      responseMessage,
      apiMethod,
      apiUrl,
    };

    const res = await axiosInstance.post('/download', data);

    if (res.status === 200) {
      console.log(res.data);
    }
  }

  return (
    <>
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

      <p onClick={downloadProject}>Finish Project</p>
    </>
  );
};

export default APICreation;
