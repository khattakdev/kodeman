import React from "react";

const UserName = () => {
    return(
        <><h1 className="text-white font-bold p-4 flex content-start">
            User Name
        </h1>
        <input className="w-2/4 mx-4 bg-gray-200 border-0 rounded-md focus:outline-none focus:ring " />
        </>
    );
};

export default UserName;