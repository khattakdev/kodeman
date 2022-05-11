import Layout from '../components/Layout';
<<<<<<< HEAD
import { useState } from 'react';
import LineChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';

const Dashboard = () => {
  const state = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4',
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F',
        ],
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  // Charts using rechart
  const PieChartdata = [
    { name: 'APIs created', results: 400 },
    { name: 'APIs tested', results: 200 },
  ];

  const BarChartData = [
    { date: '16/02/2021', apicreated: 250 },
    { date: '14/05/2021', apicreated: 700 },
    { date: '06/06/2021', apicreated: 100 },
    { date: '03/01/2022', apicreated: 50 },
    { date: '23/02/2022', apicreated: 75 },
  ];

  const [name, setName] = useState('asadrao98');
  const [gitName, setgitName] = useState('Asad Rao');
  const [email, setEmail] = useState('xyz@example.com');
  const [date, setDate] = useState('01/01/2022');
  const [apiCreated, setApiCreated] = useState('100');
  const [apiTested, setApiTested] = useState('250');

  return (
    <Layout>
      <div className="bg-gray-900 h-full w-11/12">
        <div className="w-full pl-28 pt-16 mb-20 grid grid-cols-2">
          <div className="pl-10 pt-2">
            <div className="grid grid-cols-1 pl-4">
              <label>User Name</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border w-80 h-12 space-x-6">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-white text-white bg-transparent focus:outline-none  focus:z-10">
                {name}
              </h1>
            </div>
            <div className="grid grid-cols-1 pl-4">
              <label>GitHub profile holder's Name</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border w-80 h-12 space-x-6">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-white text-white bg-transparent focus:outline-none  focus:z-10">
                {gitName}
              </h1>
            </div>
            <div className="grid grid-cols-1 pl-4">
              <label>Email</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border w-80 h-12 space-x-6">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-white text-white bg-transparent focus:outline-none  focus:z-10">
                {email}
              </h1>
            </div>
          </div>
          <div className="pl-10 pt-2">
            <div className="grid grid-cols-1 pl-4">
              <label>Date of account creation</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border w-80 h-12 space-x-6">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-white text-white bg-transparent focus:outline-none  focus:z-10">
                {date}
              </h1>
            </div>
            <div className="grid grid-cols-1 pl-4">
              <label>APIs created</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border w-80 h-12 space-x-6">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-white text-white bg-transparent focus:outline-none  focus:z-10">
                {apiCreated}
              </h1>
            </div>
            <div className="grid grid-cols-1 pl-4">
              <label>APIs tested</label>
            </div>
            <div className="flex grid-cols-3 p-2 m-4 border w-80 h-12 space-x-6">
              <h1 className="appearance-none rounded-none relative block w-full px-2   placeholder-white text-white bg-transparent focus:outline-none  focus:z-10">
                {apiTested}
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-gray-700">
          {/* Bar chart */}
          <div className="w-full  pt-10">
            <LineChart />
          </div>
          {/* Pie Chart */}
          <div className="w-full pt-10">
            <PieChart />
          </div>
        </div>
      </div>
    </Layout>
  );
};
=======

function Dashboard() {
  return (
    <Layout>
      <div
        className={
          'bg-gray-300 text-black dark:bg-gray-900 dark:text-white  h-72 p-8'
        }
      >
        You are now in Dashboard
      </div>
    </Layout>
  );
}
>>>>>>> 7036daf4bb59b3f6026ca7f48dae4b5f93305715
export default Dashboard;
