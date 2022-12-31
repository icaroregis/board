import Head from 'next/head';
import styles from './styles.module.scss';
import Input from '../../components/Input';

export default function Board() {
  return (
    <>
      <Head>
        <title>Minhas Tarefas - Board</title>
      </Head>

      <main className={styles.container}>
        <Input type="text" placeholder="Qual sua Tarefa?" />
      </main>
    </>
  );
}
