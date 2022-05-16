import React from 'react';
import { TrashIcon, PlusIcon, PlusCircleIcon } from '@heroicons/react/solid';

const DatabaseValues = (props) => {
  const { dbValue, setDbValues, apiNumber } = props;

  function addNewValue() {
    const index = apiNumber;
    const newQueryParams = [...dbValue]; // [[], [], []]
    // console.log(newQueryParams);
    newQueryParams[index].push({
      name: '',
      required: false,
      placement: 'body',
    });

    setDbValues(newQueryParams);
  }

  function deleteValue(index) {
    const newDbValue = [...dbValue];
    const currentDbValues = [...newDbValue][apiNumber].filter(
      (_, paramIndex) => paramIndex !== index
    );
    newDbValue[apiNumber] = currentDbValues;
    setDbValues(newDbValue);
  }

  function deleteAllValues() {
    const newDbValue = [...dbValue];
    newDbValue[apiNumber] = [];

    setDbValues(newDbValue);
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-gray-500 px-4 flex content-start">
          Database Values
        </h1>
        <div className="flex justify-self-end">
          <TrashIcon
            className="mt-2 mx-4 h-8 w-8 cursor-pointer"
            role="button"
            onClick={() => deleteAllValues}
          />
          <PlusCircleIcon
            className="mt-2 mx-4 h-8 w-8 cursor-pointer"
            role="button"
            onClick={() => addNewValue()}
          />
        </div>
      </div>
      <div className="flex border bg-gray-200 dark:bg-gray-800 border-gray-600 m-4 p-4 max-h-56 overflow-y-auto">
        <div className="content-center flex w-full  items-center flex-col  self-center ">
          {dbValue[apiNumber].length === 0 ? (
            <p className="flex text-black dark:text-gray-500 text-center">
              {"The API doesn't have any values"}
            </p>
          ) : (
            dbValue[apiNumber].map((param, index) => (
              <div key={index} className="flex flex-row w-full items-center">
                <input
                  className="m-2 p-2 w-2/4 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-300 border border-gray-600 "
                  type="Name"
                  placeholder="Value's name"
                  value={dbValue[apiNumber][index].name}
                  onChange={(e) => {
                    const currentValue = e.target.value;
                    const currentQueryParams = [...dbValue];
                    currentQueryParams[apiNumber][index].name = currentValue;
                    setDbValues(currentQueryParams);
                  }}
                />
                {/* <select
                  onChange={(e) => {
                    const currentParameter = e.target.value;
                    const currentQueryParams = [...dbValue];
                    currentQueryParams[index].type = currentParameter;
                    setDbValues(currentQueryParams);
                  }}
                  placeholder="Required"
                  className="border-blue-400 border bg-blue-700 text-white m-2 ml-2 my-2 px-4 py-2 rounded-sm hover:bg-blue-600"
                >
                  <option value="get">GET</option>
                  <option value="post">POST</option>
                  <option value="put">PUT</option>
                  <option value="patch">PATCH</option>
                  <option value="delete">DELETE</option>
                </select> */}
                {/* <input
                  className="m-2 p-2 w-2/4 bg-gray-800 text-gray-300 border border-gray-600 "
                  type="text"
                  placeholder="Default Value"
                  value={dbValue[index].defaultValue}
                  onChange={(e) => {
                    const currentValue = e.target.value;
                    const currentQueryParams = [...dbValue];
                    currentQueryParams[index].defaultValue = currentValue;
                    setDbValues(currentQueryParams);
                  }}
                /> */}
                <select
                  onChange={(e) => {
                    const currentParameter = e.target.value;
                    const currentQueryParams = [...dbValue];
                    currentQueryParams[apiNumber][index].required =
                      currentParameter;
                    setDbValues(currentQueryParams);
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
                    const currentQueryParams = [...dbValue];
                    currentQueryParams[apiNumber][index].placement =
                      currentParameter;
                    setDbValues(currentQueryParams);
                  }}
                  placeholder="Required"
                  className="border-blue-400 border bg-blue-700 text-white m-2 ml-2 my-2 px-4 py-2 rounded-sm hover:bg-blue-600"
                >
                  <option value="body">Body</option>
                  <option value="header">Header</option>
                  <option value="parameter">Parameter</option>
                  <option value="auth">Authorization</option>
                </select>
                <div className="p-2">
                  <TrashIcon
                    className="mx-4 h-8 w-8 cursor-pointer"
                    role="button"
                    onClick={() => deleteValue(index)}
                  />
                </div>
              </div>
            ))
          )}
          {dbValue[apiNumber].length === 0 ? (
            <button
              onClick={() => addNewValue()}
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
export default DatabaseValues;
