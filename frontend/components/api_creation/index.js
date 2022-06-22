// import Router from 'next/router';
import { useState } from 'react';
import Button from '../Layout/Button';
import axiosInstance from '../../axios';

const APICreation = (props) => {
  const [downloadPath, setDownloadPath] = useState('');
  const {
    modelForAPI,
    addedAuthWith,
    setAddedAuthWith,
    authWith,
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
      authWith,
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
      setDownloadPath(res.data);
      // Router.push(res.data);
    }
  }

  return (
    <>
      <Button
        classes="my-8"
        onClick={() => {
          console.log(addedAuthWith);
          if (addedAuthWith) {
            setAddedAuthWith(false);
          } else {
            const updatedApiNumber = apiNumber + 1;
            setApiNumber(updatedApiNumber);
            const updatedApiUrl = [...apiUrl];
            updatedApiUrl.push('');
            setApiUrl(updatedApiUrl);

            const updatedDbValues = [...dbValue];
            updatedDbValues.push([]);
            setDbValues(updatedDbValues);
          }
          setOption(2);
          // @TODO: Add empty index to apiUrl, responseMessage, apiMethod, responseMessage
        }}
      >
        Create a new API Endpoint
      </Button>

      <Button classes="my-8 ml-12" onClick={downloadProject}>
        Finishh Project
      </Button>
      <h2>{downloadPath}</h2>
    </>
  );
};

export default APICreation;
