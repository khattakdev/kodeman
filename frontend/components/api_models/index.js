import React from 'react';
import APIModel from './model';

const APIModels = (props) => {
  const { apiModel, setAPIModel } = props;
  let counter = 0;

  const addNewModel = () => {
    const currentAPIModel = apiModel;
    currentAPIModel.push([
      {
        id: counter,
      },
    ]);
    counter += 1;
    setAPIModel(currentAPIModel);
  };
  return (
    <div>
      <h1 className="my-4" onClick={addNewModel}>
        Create a new Model
      </h1>
      {apiModel.map((model) => (
        <APIModel key={model} apiModel={model} setAPIModel={setAPIModel} />
      ))}
    </div>
  );
};
export default APIModels;
