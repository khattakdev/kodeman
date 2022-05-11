const optionsList = (props) => {
  const { setCurrentOption } = props;
  const handleTab = (tab) => {
    setCurrentOption(tab);
  };
  return (
    <div className="header">
      <ul className="text-black dark:text-gray-400 list-none flex m-2 ">
        <li
          className="p-2 hover:text-gray-500 dark:hover:text-white hover:underline cursor-pointer"
          onClick={() => handleTab('parameter')}
        >
          Parameters
        </li>
        <li
          className="p-2 hover:text-gray-500 dark:hover:text-white hover:underline cursor-pointer"
          onClick={() => handleTab('body')}
        >
          Body
        </li>
        <li
          className="p-2 hover:text-gray-500 dark:hover:text-white hover:underline cursor-pointer"
          onClick={() => handleTab('header')}
        >
          Headers
        </li>
        <li
          className="p-2 hover:text-gray-500 dark:hover:text-white hover:underline cursor-pointer"
          onClick={() => handleTab('authorization')}
        >
          Authorization
        </li>
      </ul>
    </div>
  );
};
export default optionsList;
