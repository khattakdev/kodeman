import { useState } from 'react';
import Layout from '../components/Layout';
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';

const Dashboard = () => {
  // Charts using rechart
  const PieChartdata = [
    { name: 'APIs created', results: 400 },
    { name: 'APIs tested', results: 200 },
  ];

  const BarChartData = [
    { date: '14/5/2022', apicreated: 60 },
    { date: '15/5/2022', apicreated: 70 },
    { date: '16/5/2022', apicreated: 10 },
    { date: '17/5/2022', apicreated: 50 },
    { date: '18/5/2022', apicreated: 75 },
    { date: '19/5/2022', apicreated: 56 },
    { date: '20/5/2022', apicreated: 35 },
  ];

  const [name] = useState('Shahab626');
  const [gitName] = useState('Shahab Malik');
  const [email] = useState('muhammadshahab626@gmail.com');
  const [date] = useState('01/01/2022');
  const [apiCreated] = useState('10');
  const [apiTested] = useState('25');

  return (
    <Layout>
      <div className="bg-gray-300 text-black dark:bg-gray-900 dark:text-white h-full w-11/12">
        <div className="w-full pl-28 pt-16 mb-20 grid grid-cols-2">
          <div className="pl-10 pt-2">
            <div className="grid grid-cols-1 pl-4">
              <label>User Name</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border-2 border-gray-700 dark:border-gray-200  w-80 h-12 ">
              <h1 className="appearance-none rounded-none relative block w-full px-2 placeholder-black text-black dark:placeholder-white dark:text-white bg-transparent focus:outline-none  focus:z-10">
                {name}
              </h1>
            </div>
            <div className="grid grid-cols-1 pl-4">
              <label>GitHub profile holder&apos;s Name</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border-2 border-gray-700 dark:border-gray-200 w-80 h-12 ">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-black text-black dark:placeholder-white dark:text-white bg-transparent focus:outline-none  focus:z-10">
                {gitName}
              </h1>
            </div>
            <div className="grid grid-cols-1 pl-4">
              <label>Email</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border-2 border-gray-700 dark:border-gray-200 w-80 h-12 ">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-black text-black dark:placeholder-white dark:text-white bg-transparent focus:outline-none  focus:z-10">
                {email}
              </h1>
            </div>
          </div>
          <div className="pl-10 pt-2">
            <div className="grid grid-cols-1 pl-4">
              <label>Date of account creation</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border-2 border-gray-700 dark:border-gray-200 w-80 h-12 ">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-black text-black dark:placeholder-white dark:text-white bg-transparent focus:outline-none  focus:z-10">
                {date}
              </h1>
            </div>
            <div className="grid grid-cols-1 pl-4">
              <label>APIs created</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border-2 border-gray-700 dark:border-gray-200 w-80 h-12 ">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-black text-black dark:placeholder-white dark:text-white bg-transparent focus:outline-none  focus:z-10">
                {apiCreated}
              </h1>
            </div>
            <div className="grid grid-cols-1 pl-4">
              <label>APIs tested</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border-2 border-gray-700 dark:border-gray-200 w-80 h-12 ">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-black text-black dark:placeholder-white dark:text-white bg-transparent focus:outline-none  focus:z-10">
                {apiTested}
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-gray-300 dark:bg-gray-900">
          {/* Bar chart */}
          <div className="w-full  pt-10 pl-10">
            <BarChart data={BarChartData} />
          </div>
          {/* Pie Chart */}
          <div className="w-full pt-10">
            <PieChart data={PieChartdata} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
