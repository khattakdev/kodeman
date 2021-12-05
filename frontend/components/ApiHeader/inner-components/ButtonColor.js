import React from "react";

const ButtonColor = () => {
    return(
        <>
        <h1 className="text-white font-bold p-4 flex content-start">
            Accent Color
        </h1>
            <button className=" bg-red-500 p-4 mx-4 border-0 rounded-full" title="red"></button>
            <button className=" bg-green-500 p-4 mx-4 border-0 rounded-full" title="green"></button>
            <button className=" bg-yellow-300 p-4 mx-4 border-0 rounded-full" title="yellow"></button>
            <button className=" bg-blue-500 p-4 mx-4 border-0 rounded-full" title="blue"></button>
            <button className=" bg-pink-400 p-4 mx-4 border-0 rounded-full" title="pink"></button>
            <button className=" bg-purple-700 p-4 mx-4 border-0 rounded-full" title="purple"></button>
        </>
    );
};

export default ButtonColor;