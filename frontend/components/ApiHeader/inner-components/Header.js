import React from 'react';

const Headers = (props) => {
  const { headers, setHeaders } = props;

  function addNewHeader() {
    const newQueryParams = [...headers, { parameter: '', value: '' }];

    setHeaders(newQueryParams);
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-gray-500  px-4 flex content-start">Header List</h1>
        <div className="flex justify-self-end">
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
              {"This request don't have any parameters"}
            </p>
          ) : (
            headers.map((param, index) => (
              <div key={index} className="flex flex-row w-full">
                <input
                  className="m-2 p-2 w-2/4 bg-gray-800 text-gray-300 border border-gray-600 "
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
                  className="m-2 p-2 w-2/4 bg-gray-800 text-gray-300 border border-gray-600 "
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
                  <img
                    src="delete-icon.svg"
                    alt="delete"
                    className="border border-gray-600 m-2 h-8 w-8 cursor-pointer"
                  />
                </div>
              </div>
            ))
          )}
          {headers.length === 0 ? (
            <button
              onClick={() => addNewHeader()}
              className="rounded-sm flex my-4 flex-row border p-2 hover:bg-gray-600 bg-gray-700 text-white"
            >
              <img src="add.svg" className="cursor-pointer " />
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
