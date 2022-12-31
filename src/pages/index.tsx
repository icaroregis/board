import styles from '../styles/styles.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organização de tarefas</title>
      </Head>

      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Imagem de um computador" />

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia Escreva, planeje e organize-se.</h1>

          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>

        <div className={styles.donaters}>
          <h3>Apoiadores:</h3>

          <div className={styles.containerPhotoSupporters}>
            <img src="https://avatars.githubusercontent.com/u/62527468?v=4" alt="Foto dos apoiadores da ferramenta" />
            <img src="https://avatars.githubusercontent.com/u/62527468?v=4" alt="Foto dos apoiadores da ferramenta" />
            <img src="https://avatars.githubusercontent.com/u/62527468?v=4" alt="Foto dos apoiadores da ferramenta" />
            <img src="https://avatars.githubusercontent.com/u/62527468?v=4" alt="Foto dos apoiadores da ferramenta" />
          </div>
        </div>
      </main>
    </>
  );
}
