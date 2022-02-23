const Body = (props) => {
  const { body, setBody } = props;
  return (
    <div>
      <div className="flex flex-row">
        <h1 className="text-black dark:text-gray-500 m-2 p-2">Content Type</h1>
        <select
          id=""
          className="bg-gray-400 text-black dark:bg-gray-700 dark:text-white border-black dark:border-gray-600 rounded-sm px-2 m-2"
        >
          <option defaultValue value="none">none</option>
          <option value="application/json">application/json</option>
          <option value="application/id+json">application/id+json</option>
          <option value="application/hal+json">application/hal+json</option>
          <option value="application/vnd.api+json">application/vnd.api+json</option>
          <option value="application/xml">application/xml</option>
        </select>
      </div>

      {/* <div className="h-52 p-2 m-4 bg-gray-800 border border-gray-600"> */}
        <textarea
          className="resize border-2 border-gray-400 bg-gray-200 text-black dark:border-gray-500 dark:bg-gray-800 dark:text-white rounded-sm px-4 py-2 w-5/6 ml-4 h-36"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={`{
            


}`}
        ></textarea>
      {/* </div> */}
    </div>
  );
};
export default Body;
