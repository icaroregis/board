import styles from '../styles/styles.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organização de tarefas</title>
      </Head>

      <div>
        <h1 className={styles.title}>Primeiro projeto NextJs</h1>
      </div>
    </>
  );
}
