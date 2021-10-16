import React, { useState } from 'react';

const Parameters = () => {
  const [queryParam, setQueryParam] = useState([]);

  function addNewParam() {
    const newQueryParams = [...queryParam, { parameter: '', value: '' }];

    setQueryParam(newQueryParams);
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-gray-500 m-2 px-4 flex content-start">
          Query parameter
        </h1>
        <div className="flex justify-self-end">
          <img
            src="delete-icon.svg"
            alt="delete"
            className="m-2 mr-2 h-6 w-6 cursor-pointer"
          />
          <img
            src="edit note.svg"
            alt="delete"
            className="m-2 mr-2 h-6 w-6 cursor-pointer"
          />
          <img
            onClick={() => addNewParam()}
            src="add.svg"
            alt="delete"
            className="m-2 mr-2 h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex border bg-gray-800 border-gray-600 m-4 p-4 h-52 ">
        <div className="content-center flex w-full  items-center flex-col  self-center ">
          {queryParam.length === 0 ? (
            <p className="flex text-gray-500 text-center">
              {"This request don't have any parameters"}
            </p>
          ) : (
            queryParam.map((param, index) => (
              <div key={index}>
                <input
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
                <input
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
              </div>
            ))
          )}
          {queryParam.length === 0 ? (
            <button
              onClick={() => addNewParam()}
              className="rounded-sm flex my-4 flex-row border p-2 hover:bg-gray-600 bg-gray-700 text-white"
            >
              <svg
                className=" cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
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

// let queryParam = [
//     {
//       id: '0',
//       parameter: 's',
//       value: ''
//     },
//     {
//       id: '1',
//       parameter: '',
//       value: ''
//     }
//   ]

//   const [queryParam, setQueryParam] = useState([])

//   queryParam.length === 0 ?
//   (
//         <>
//           <div>No Parameters added</div>
//             <button>Add parameter</button>
//       </>
//   )
//   :
//   queryParam.forEach((param)=> {
//     <input onChange={() => handleInput(param)} placeholder="enter parameter" value={param.parameter} />
//     <input onChange={() => handleInput(param)} placeholder="enter value" value={param.value} />
//   })

//   handleInput (param) => {
//     if (queryParam.length === param.id) {
//       this.queryParam.push({
//         id: queryParam.length,
//         parameter: '',
//         value: ''
//       })
//     }
//   }
