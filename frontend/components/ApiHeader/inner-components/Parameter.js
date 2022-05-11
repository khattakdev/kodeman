import React from 'react';
<<<<<<< HEAD
=======
import { TrashIcon, PlusIcon, PlusCircleIcon } from '@heroicons/react/solid';
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715

const Parameters = (props) => {
  const { queryParam, setQueryParam } = props;

  function addNewParam() {
    const newQueryParams = [...queryParam, { parameter: '', value: '' }];

    setQueryParam(newQueryParams);
  }

  function deleteParam(index) {
    const newQueryParams = [...queryParam].filter(
      (_, paramIndex) => paramIndex !== index
    );
    setQueryParam(newQueryParams);
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-black dark:text-gray-500 px-4 flex content-start">
          Query parameter
        </h1>
        <div className="flex justify-self-end">
          <TrashIcon
            className="mx-4 h-6 w-6 cursor-pointer"
            role="button"
            onClick={() => setQueryParam([])}
          />
<<<<<<< HEAD

          <img
=======
          <PlusCircleIcon
            className="mx-6 h-6 w-6 cursor-pointer"
            role="button"
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
            onClick={() => addNewParam()}
          />
        </div>
      </div>
<<<<<<< HEAD
      <div className="flex border bg-gray-800 border-gray-600 m-4 p-4 max-h-56 overflow-y-auto">
=======
      <div className="flex border bg-gray-200 text-black border-gray-500 dark:bg-gray-800 dark:border-gray-600  m-4 p-4 max-h-56 overflow-y-auto">
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
        <div className="content-center flex w-full  items-center flex-col  self-center ">
          {queryParam.length === 0 ? (
            <p className="flex text-black dark:text-gray-500 text-center">
              {"This request don't have any parameters"}
            </p>
          ) : (
            queryParam.map((param, index) => (
              <div key={index} className="flex flex-row w-full">
                <input
                  className="m-2 p-2 w-2/4 border-2 border-gray-500 bg-gray-100 text-black  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 "
                  type="text"
                  placeholder="Parameter"
                  value={param.parameter}
                  onChange={(e) => {
                    const currentParameter = e.target.value;
                    const currentQueryParams = [...queryParam];
                    currentQueryParams[index].parameter = currentParameter;
                    setQueryParam(currentQueryParams);
                  }}
                />
<<<<<<< HEAD
 `
 `               <input
                  className="m-2 p-2 w-2/4 bg-gray-800 text-gray-300 border border-gray-600 "
=======
                <input
                  className="m-2 p-2 w-2/4 border-2 border-gray-500 bg-gray-100 text-black  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 "
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
                  type="text"
                  placeholder="Value"
                  value={param.value}
                  onChange={(e) => {
                    const currentValue = e.target.value;
                    const currentQueryParams = [...queryParam];
                    currentQueryParams[index].value = currentValue;
                    setQueryParam(currentQueryParams);
                  }}
                />

                <div className="p-2">
<<<<<<< HEAD
                  <img
                    src="delete-icon.svg"
                    alt="delete"
                    className="border border-gray-600 m-2 h-8 w-8 cursor-pointer"
=======
                  <TrashIcon
                    className="mx-4 my-1 h-8 w-8 dark:text-white cursor-pointer"
                    role="button"
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
                    onClick={() => deleteParam(index)}
                  />
                </div>
              </div>
            ))
          )}
          {queryParam.length === 0 ? (
            <button
              onClick={() => addNewParam()}
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
export default Parameters;
