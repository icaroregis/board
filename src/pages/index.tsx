import styles from '../styles/styles.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organização de tarefas</title>
      </Head>

      <main>
        <img src="/images/board-user.svg" alt="Imagem de um computador" />
      </main>
    </>
  );
}
