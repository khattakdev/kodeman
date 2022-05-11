import React from 'react';
<<<<<<< HEAD
=======
import { TrashIcon, PlusIcon, PlusCircleIcon } from '@heroicons/react/solid';
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715

const Headers = (props) => {
  const { headers, setHeaders } = props;

  function addNewHeader() {
    const newQueryParams = [...headers, { parameter: '', value: '' }];

    setHeaders(newQueryParams);
<<<<<<< HEAD
=======
  }

  function deleteHeader(index) {
    const newQueryParams = [...headers].filter(
      (_, paramIndex) => paramIndex !== index
    );
    setHeaders(newQueryParams);
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-black dark:text-gray-500s px-4 flex content-start">
          Header List
        </h1>
        <div className="flex justify-self-end">
<<<<<<< HEAD
          <img
            src="delete-icon.svg"
            alt="delete"
            className="m-2 mx-4 h-6 w-6 cursor-pointer"
            onClick={() => setHeaders([])}
          />
          <img
            onClick={() => addNewHeader()}
            src="add.svg"
            alt="delete"
            className="m-2 mx-4 h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex border bg-gray-800 border-gray-600 m-4 p-4 ">
        <div className="content-center flex w-full  items-center flex-col  self-center ">
          {headers.length === 0 ? (
            <p className="flex text-gray-500 text-center">
=======
          <TrashIcon
            className="mx-4 h-6 w-6 cursor-pointer"
            role="button"
            onClick={() => setHeaders([])}
          />
          <PlusCircleIcon
            className=" mx-6 h-6 w-6 cursor-pointer"
            role="button"
            onClick={() => addNewHeader()}
          />
        </div>
      </div>
      <div className="flex border bg-gray-200 text-black border-gray-500 dark:bg-gray-800 dark:border-gray-600 m-4 p-4 ">
        <div className="content-center flex w-full  items-center flex-col  self-center ">
          {headers.length === 0 ? (
            <p className="flex text-black dark:text-gray-500 text-center">
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
              {"This request don't have any parameters"}
            </p>
          ) : (
            headers.map((param, index) => (
              <div key={index} className="flex flex-row w-full">
                <input
                  className="m-2 p-2 w-2/4 bg-gray-100 text-black border-2 border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 "
                  type="text"
                  placeholder="Parameter"
                  value={param.parameter}
                  onChange={(e) => {
                    const currentParameter = e.target.value;
                    const currentQueryParams = [...headers];
                    currentQueryParams[index].parameter = currentParameter;
                    setHeaders(currentQueryParams);
                  }}
                />
                <input
                  className="m-2 p-2 w-2/4 bg-gray-100 text-black border-2 border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                  type="text"
                  placeholder="Value"
                  value={param.value}
                  onChange={(e) => {
                    const currentValue = e.target.value;
                    const currentQueryParams = [...headers];
                    currentQueryParams[index].value = currentValue;
                    setHeaders(currentQueryParams);
                  }}
                />
                <div className="p-2">
                  <TrashIcon
                    className="mx-4 my-1 h-8 w-8 cursor-pointer dark:text-white"
                    role="button"
                    onClick={() => deleteHeader(index)}
                  />
                </div>
              </div>
            ))
          )}
          {headers.length === 0 ? (
            <button
              onClick={() => addNewHeader()}
<<<<<<< HEAD
              className="rounded-sm flex my-4 flex-row border p-2 hover:bg-gray-600 bg-gray-700 text-white"
=======
              className="rounded-sm flex my-4 flex-row border p-2 hover:bg-gray-500 bg-gray-400 text-black dark:hover:bg-gray-600 dark:bg-gray-700 dark:text-white"
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
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
export default Headers;
