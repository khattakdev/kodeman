import Layout from '../components/Layout';

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
export default Dashboard;
