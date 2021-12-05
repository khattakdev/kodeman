import React from "react";

const DarkMode = () => {
    return(
        <div className="flex flex-col">
            <h1 className="flex text-white font-bold p-4 w-1/2 content-start">
                Change Theme 
            </h1>
            <div className="flex flex-row">
                <div className="m-4 text-white font-normal">
                    Light Mode
                </div>
                <label htmlFor="toogleA" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input id="toogleA" type="checkbox" className="sr-only" />
                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                    </div>
                    <div className="m-4 text-white font-normal">
                        Dark Mode
                    </div>
                </label>
            </div>
        </div>
    );
};

export default DarkMode;