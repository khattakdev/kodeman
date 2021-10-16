const ApiHeader = (props) => {
  const { setApiHeader } = props;
  const handleTab = (tab) => {
    setApiHeader(tab);
  };
  return (
    <div className="header">
      <ul className="text-gray-400 list-none flex m-2 ">
        <li
          className="p-2 hover:text-white hover:underline cursor-pointer"
          onClick={() => handleTab('parameter')}
        >
          Parameters
        </li>
        <li
          className="p-2 hover:text-white hover:underline cursor-pointer"
          onClick={() => handleTab('body')}
        >
          Body
        </li>
        <li
          className="p-2 hover:text-white hover:underline cursor-pointer"
          onClick={() => handleTab('header')}
        >
          Headers
        </li>
        <li
          className="p-2 hover:text-white hover:underline cursor-pointer"
          onClick={() => handleTab('authorization')}
        >
          Authorization
        </li>
        <li
          className="p-2 hover:text-white hover:underline cursor-pointer"
          onClick={() => handleTab('pre-request')}
        >
          Pre-request Script
        </li>
        <li
          className="p-2 hover:text-white hover:underline cursor-pointer"
          onClick={() => handleTab('tests')}
        >
          Tests
        </li>
      </ul>
    </div>
  );
};
export default ApiHeader;
