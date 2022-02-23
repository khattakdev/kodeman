import Link from 'next/link';
import router from 'next/router';

function Layout({ children, classes }) {
  return (
    <div className={'flex flex-col relative bg-gray-200 text-black dark:bg-gray-800 dark:text-white' }>
      <nav
        className={
          'w-full px-8 bg-gray-200 text-black dark:bg-gray-800 dark:text-white flex justify-between items-center'
        }
      >
        <img src="logo.png" className="h-24" alt="Kodeman logo" />
        <ul className=" flex">
          <li
            className={'cursor-pointer'}
            onClick={() => {
              localStorage.removeItem('token');
              router.push('/login');
            }}
          >
            Sign out
          </li>
        </ul>
      </nav>
      <div className={'flex'}>
        <ul
          className={'w-42 h-screen -mt-14 p-4 pt-32 flex flex-col uppercase font-bold'}
        >
          <li className="mb-4 cursor-pointer hover:underline">
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li className="mb-4 cursor-pointer hover:underline">
            <Link href="/testing">
              <a>API Testing</a>
            </Link>
          </li>
          <li className="mb-4 cursor-pointer hover:underline">
            <Link href="/create">
              <a>Create API</a>
            </Link>
          </li>
          <li className="mb-4 cursor-pointer hover:underline">
            <Link href="/docs">
              <a>Documentation</a>
            </Link>
          </li>
          <li className="mb-4 cursor-pointer hover:underline">
            <Link href="/settings">
              <a>Settings</a>
            </Link>
          </li>
        </ul>
        <div className={['w-full', classes].join(' ')}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
