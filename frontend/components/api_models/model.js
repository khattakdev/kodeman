import React from 'react';
import { TrashIcon, PlusIcon, PlusCircleIcon } from '@heroicons/react/solid';

const APIModel = (props) => {
  const { id, apiModel, setAPIModel, modelNames, setModelNames } = props;

  const key = id;

  function deleteModel() {
    const currentAPIModel = [...apiModel].filter((_, index) => index !== key);

    setAPIModel(currentAPIModel);
  }

  function addNewModelObject() {
    const currentAPIModel = [...apiModel];
    currentAPIModel[key] = [
      ...currentAPIModel[key],
      {
        name: '',
        type: 'string',
        required: false,
        defaultValue: '',
      },
    ];

    setAPIModel(currentAPIModel);
  }

  function deleteModelObject(index) {
    const currentAPIModel = [...apiModel];
    currentAPIModel[key] = [...apiModel][key].filter(
      (_, paramIndex) => paramIndex !== index
    );

    setAPIModel(currentAPIModel);
  }
  return (
    <div className="bg-gray-200 dark:bg-gray-700">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-black dark:text-gray-300 px-4 ">
          Model name:{' '}
          <input
            className="m-2 p-2 w-2/4 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-300 border border-gray-500 dark:border-gray-600"
            type="Name"
            placeholder="Property name"
            value={modelNames[key]}
            onChange={(e) => {
              const currentValue = e.target.value;
              const updatedModelName = [...modelNames];
              updatedModelName[key] = currentValue;
              setModelNames(updatedModelName);
            }}
          />
        </h1>
        <div className="flex justify-self-end">
        <TrashIcon
            className="mt-2 mx-4 h-8 w-8 cursor-pointer"
            role="button"
            onClick={deleteModel}
          />
          <PlusCircleIcon
            className="mt-2 mx-4 h-8 w-8 cursor-pointer"
            role="button"
            onClick={() => addNewModelObject()}
          />
        </div>
      </div>
      <div className="flex border bg-gray-200 dark:bg-gray-800 border-gray-600 m-4 p-4 max-h-56 overflow-y-auto">
        <div className="content-center flex w-full  items-center flex-col  self-center ">
          {apiModel[key].length === 0 ? (
            <p className="flex text-black dark:text-gray-500 text-center">
              {"The API doesn't have any values"}
            </p>
          ) : (
            apiModel[key].map((param, index) => (
              <div key={index} className="flex flex-row w-full items-center">
                <input
                  className="m-2 p-2 w-2/4 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-300 border border-gray-600 "
                  type="Name"
                  placeholder="Property name"
                  value={apiModel[key][index].name}
                  onChange={(e) => {
                    const currentValue = e.target.value;
                    const currentAPIModels = [...apiModel];
                    currentAPIModels[key][index].name = currentValue;
                    setAPIModel(currentAPIModels);
                  }}
                />

                <input
                  className="m-2 p-2 w-2/4 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-300 border border-gray-600 "
                  type="Name"
                  placeholder="Default Value name"
                  value={apiModel[key][index].defaultValue}
                  onChange={(e) => {
                    const currentValue = e.target.value;
                    const currentAPIModels = [...apiModel];
                    currentAPIModels[key][index].defaultValue = currentValue;
                    setAPIModel(currentAPIModels);
                  }}
                />

                <select
                  onChange={(e) => {
                    const currentParameter = e.target.value;
                    const currentQueryParams = [...apiModel];
                    currentQueryParams[key][index].required = currentParameter;
                    setAPIModel(currentQueryParams);
                  }}
                  placeholder="Required"
                  className="border-blue-400 border bg-blue-700 text-white m-2 ml-2 my-2 px-4 py-2 rounded-sm hover:bg-blue-600"
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
                <select
                  onChange={(e) => {
                    const currentParameter = e.target.value;
                    const currentQueryParams = [...apiModel];
                    currentQueryParams[key][index].placement = currentParameter;
                    setAPIModel(currentQueryParams);
                  }}
                  placeholder="Required"
                  className="border-blue-400 border bg-blue-700 text-white m-2 ml-2 my-2 px-4 py-2 rounded-sm hover:bg-blue-600"
                >
                  <option value="string" defaultValue={true}>
                    String
                  </option>
                  <option value="int">Integer</option>
                  <option value="boolean">Boolean</option>
                  <option value="date">Date</option>
                </select>
                <div className="p-2">
                <TrashIcon
                className="mt-2 mx-4 h-8 w-8 cursor-pointer"
                role="button"
                onClick={() => deleteModelObject(index)}
              />
                 
                </div>
              </div>
            ))
          )}
          {apiModel[key].length === 0 ? (
            <button
            onClick={() => addNewModelObject()}
            className="rounded-sm flex my-4 flex-row border p-2 hover:bg-gray-500 bg-gray-400 text-black dark:hover:bg-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <PlusIcon className="h-4 w-4 my-auto cursor-pointer" />
            Add New
          </button>
            
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
export default APIModel;
