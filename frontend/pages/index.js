import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kodeman</title>
        <meta
          name="description"
          content="Kodeman is a webapp in which you can create your APIs and also test the working of the APIs"
        />
        <link rel="icon" href="/favicon-kodeman.png" />
      </Head>
    </div>
  );
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}
