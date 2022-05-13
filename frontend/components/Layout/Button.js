function Layout({ children, classes, onClick }) {
  return (
    <button
      className={`${classes} bg-blue-700 hover:bg-blue-600 text-white my-2 p-2 px-4 rounded-sm  border-2 border-blue-400`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Layout;
