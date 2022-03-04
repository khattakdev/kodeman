import React from 'react';

const DatabaseValues = (props) => {
  const { dbValue, setDbValues } = props;

  function addNewValue() {
    const newQueryParams = [
      ...dbValue,
      { name: '', type: '', defaultValue: '', required: false },
    ];

    setDbValues(newQueryParams);
  }

  function deleteValue(index) {
    const newDbValue = [...dbValue].filter(
      (_, paramIndex) => paramIndex !== index
    );
    setDbValues(newDbValue);
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-gray-500 px-4 flex content-start">
          Database Values
        </h1>
        <div className="flex justify-self-end">
          <img
            src="delete-icon.svg"
            alt="delete"
            className="m-2 mx-4 h-6 w-6 cursor-pointer"
            onClick={() => setDbValues([])}
          />

          <img
            onClick={() => addNewValue()}
            src="add.svg"
            alt="delete"
            className="m-2 mx-4 h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex border bg-gray-800 border-gray-600 m-4 p-4 max-h-56 overflow-y-auto">
        <div className="content-center flex w-full  items-center flex-col  self-center ">
          {dbValue.length === 0 ? (
            <p className="flex text-gray-500 text-center">
              {"This request don't have any parameters"}
            </p>
          ) : (
            dbValue.map((param, index) => (
              <div key={index} className="flex flex-row w-full">
                <input
                  className="m-2 p-2 w-2/4 bg-gray-800 text-gray-300 border border-gray-600 "
                  type="Name"
                  placeholder="Value's name"
                  value={dbValue[index].name}
                  onChange={(e) => {
                    const currentValue = e.target.value;
                    const currentQueryParams = [...dbValue];
                    currentQueryParams[index].name = currentValue;
                    setDbValues(currentQueryParams);
                  }}
                />
                <select
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
                </select>
                <input
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
                />
                <select
                  onChange={(e) => {
                    const currentParameter = e.target.value;
                    const currentQueryParams = [...dbValue];
                    currentQueryParams[index].required = currentParameter;
                    setDbValues(currentQueryParams);
                  }}
                  placeholder="Required"
                  className="border-blue-400 border bg-blue-700 text-white m-2 ml-2 my-2 px-4 py-2 rounded-sm hover:bg-blue-600"
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
                <div className="p-2">
                  <img
                    src="delete-icon.svg"
                    alt="delete"
                    className="border border-gray-600 m-2 h-8 w-8 cursor-pointer"
                    onClick={() => deleteValue(index)}
                  />
                </div>
              </div>
            ))
          )}
          {dbValue.length === 0 ? (
            <button
              onClick={() => addNewValue()}
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
export default DatabaseValues;
