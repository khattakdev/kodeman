import Link from 'next/link';
import router from 'next/router';
import {
  HomeIcon,
  PencilAltIcon,
  CodeIcon,
  DocumentTextIcon,
  AdjustmentsIcon,
} from '@heroicons/react/solid';

function Layout({ children, classes }) {
  return (
    <div
      className={
        'flex flex-col relative bg-gray-200 text-black dark:bg-gray-800 dark:text-white'
      }
    >
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
          className={
            'w-42 h-screen -mt-14 p-4 pt-32 flex flex-col uppercase font-bold'
          }
        >
          <li className="mb-4 cursor-pointer  hover:underline">
            <Link href="/dashboard">
              <p className="flex items-center">
                <HomeIcon
                  className="h-8 w-8 mr-2 my-auto cursor-pointer"
                  role="link"
                />
                Dashboard
              </p>
            </Link>
          </li>
          <li className="mb-4 cursor-pointer hover:underline">
            <Link href="/testing">
              <p className="flex items-center">
                <PencilAltIcon
                  className="h-8 w-8 mr-2 my-auto cursor-pointer"
                  role="link"
                />
                API Testing
              </p>
            </Link>
          </li>
          <li className="mb-4 cursor-pointer hover:underline">
            <Link href="/create">
              <p className="flex items-center">
                <CodeIcon
                  className="h-8 w-8 mr-2 my-auto cursor-pointer"
                  role="link"
                />
                API Creation
              </p>
            </Link>
          </li>
          <li className="mb-4 cursor-pointer hover:underline">
            <Link href="/docs">
              <p className="flex items-center">
                <DocumentTextIcon
                  className="h-8 w-8 mr-2 my-auto cursor-pointe"
                  role="link"
                />
                Documentation
              </p>
            </Link>
          </li>
          <li className="mb-4 cursor-pointer hover:underline">
            <Link href="/settings">
              <p className="flex items-center">
                <AdjustmentsIcon
                  className="h-8 w-8 mr-2 my-auto cursor-pointe"
                  role="link"
                />
                Settings
              </p>
            </Link>
          </li>
        </ul>
        <div className={['w-full', classes].join(' ')}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
