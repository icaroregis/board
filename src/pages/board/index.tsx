import Head from 'next/head';
import styles from './styles.module.scss';
import Input from '../../components/Input';
import Task from '../../components/Task';
import SupportButton from '../../components/SupportButton';

export default function Board() {
  return (
    <>
      <Head>
        <title>Minhas Tarefas - Board</title>
      </Head>

      <main className={styles.container}>
        <form>
          <Input type="text" placeholder="Qual sua Tarefa?" />
        </form>

        <section>
          <Task />
        </section>
      </main>

      <div className={styles.donations}>
        <h1>Obrigado por apoiar esse projeto.</h1>

        <div>
          <img src="/images/clock.svg" alt="Ícone de um relógio" />
          <time>Última doação cerca de 2 horas</time>
        </div>
      </div>

      <SupportButton />
    </>
  );
}
