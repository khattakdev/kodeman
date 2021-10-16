const Body = () => {
    return (
        <div>
            <div className="flex flex-row">
                <h1 className="text-gray-500 m-2 p-2">Content Type</h1>
                <select id="" className="bg-gray-700 text-white border border-gray-600 rounded-sm px-2 m-2">
                    <option value="none">none</option>
                    <option value="application/json" selected>application/json</option>
                    <option value="application/id+json">application/id+json</option>
                    <option value="application/hal+json">application/hal+json</option>
                    <option value="application/vnd.api+json">application/vnd.api+json</option>
                    <option value="application/xml">application/xml</option>
                </select>
            </div>
            <div className="flex flex-row justify-between border-gray-600 border m-4">
                <div className="flex content-start">
                    <h1 className="text-gray-500 m-2 px-2">Raw Request Body</h1>
                </div>
                <div className="flex content-end ">
                    <img src="wrap_text.svg" alt="delete" className="m-2 mr-2 h-6 w-6 cursor-pointer" />
                    <img src="delete-icon.svg" alt="delete" className="m-2 mr-2 h-6 w-6 cursor-pointer" />
                    <img src="format.svg" alt="delete" className="m-2 mr-2 h-6 w-6 cursor-pointer" />
                    <img src="note_add.svg" alt="delete" className="m-2 mr-2 h-6 w-6 cursor-pointer" />
                </div>
            </div>
            <div className="h-52 p-2 m-4 bg-gray-800 border border-gray-600">
                <p className="text-gray-500">Raw Request Body</p>
            </div>
        </div>
    );
}
export default Body;