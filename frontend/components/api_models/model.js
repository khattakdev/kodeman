import React from 'react';

const APIModel = (props) => {
  const { id, apiModel, setAPIModel } = props;

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
    console.log(currentAPIModel);
    currentAPIModel[key] = [...apiModel][key].filter(
      (_, paramIndex) => paramIndex !== index
    );

    console.log(currentAPIModel);
    setAPIModel(currentAPIModel);
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-gray-500 px-4 flex content-start">
          Database Model
        </h1>
        <div className="flex justify-self-end">
          <img
            src="delete-icon.svg"
            alt="delete"
            className="m-2 mx-4 h-6 w-6 cursor-pointer"
            onClick={deleteModel}
          />

          <img
            onClick={() => addNewModelObject()}
            src="add.svg"
            alt="delete"
            className="m-2 mx-4 h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex border bg-gray-800 border-gray-600 m-4 p-4 max-h-56 overflow-y-auto">
        <div className="content-center flex w-full  items-center flex-col  self-center ">
          {apiModel[key].length === 0 ? (
            <p className="flex text-gray-500 text-center">
              {"The API doesn't have any values"}
            </p>
          ) : (
            apiModel[key].map((param, index) => (
              <div key={index} className="flex flex-row w-full">
                <input
                  className="m-2 p-2 w-2/4 bg-gray-800 text-gray-300 border border-gray-600 "
                  type="Name"
                  placeholder="Property name"
                  value={apiModel[key][index].name}
                  onChange={(e) => {
                    const currentValue = e.target.value;
                    const currentAPIModels = [...apiModel[key]];
                    currentAPIModels[index].name = currentValue;
                    setAPIModel(currentAPIModels);
                  }}
                />

                <input
                  className="m-2 p-2 w-2/4 bg-gray-800 text-gray-300 border border-gray-600 "
                  type="Name"
                  placeholder="Default Value name"
                  value={apiModel[key][index].defaultValue}
                  onChange={(e) => {
                    const currentValue = e.target.value;
                    const currentAPIModels = [...apiModel];
                    currentAPIModels[index].defaultValue = currentValue;
                    setAPIModel(currentAPIModels);
                  }}
                />

                <select
                  onChange={(e) => {
                    const currentParameter = e.target.value;
                    const currentQueryParams = [...apiModel[key]];
                    currentQueryParams[index].required = currentParameter;
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
                    const currentQueryParams = [...apiModel[key]];
                    currentQueryParams[index].placement = currentParameter;
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
                  <img
                    src="delete-icon.svg"
                    alt="delete"
                    className="border border-gray-600 m-2 h-8 w-8 cursor-pointer"
                    onClick={() => deleteModelObject(index)}
                  />
                </div>
              </div>
            ))
          )}
          {apiModel[key].length === 0 ? (
            <button
              onClick={() => addNewModelObject()}
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
export default APIModel;
