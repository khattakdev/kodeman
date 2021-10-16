const Authorization = () => {
    return (
        <div>
            <div className="flex flex-row">

            </div>
            <div className="flex flex-row justify-between border-gray-600 border m-4">
                <div className="flex content-start">
                    <h1 className="text-gray-500 m-2 p-2">Authorized Type</h1>
                    <select id="" className="bg-gray-700 text-white border border-gray-600 rounded-sm px-2 m-2">
                        <option value="none" selected>none</option>
                        <option value="basic" >Basic</option>
                        <option value="bearer">Bearer Token</option>
                        <option value="oauth">Oauth 2.0</option>
                    </select>
                </div>
                <div className="flex content-end ">
                <img src="delete-icon.svg" alt="delete" className="m-4 h-6 w-6 cursor-pointer" />
                </div>
            </div>
            <div className="h-52 p-2 m-4 bg-gray-800 border border-gray-600">
                <p className="text-gray-500">Raw Request Body</p>
            </div>
        </div>
    );
}
export default Authorization;