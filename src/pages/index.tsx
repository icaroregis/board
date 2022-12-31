import styles from '../styles/styles.module.scss';
import Head from 'next/head';

export default function Home() {
  const arrayImages = [
    { id: 1, src: 'https://avatars.githubusercontent.com/u/62527468?v=4', alt: 'Foto do apoidor' },
    { id: 2, src: 'https://avatars.githubusercontent.com/u/62527468?v=4', alt: 'Foto do apoidor' },
    { id: 3, src: 'https://avatars.githubusercontent.com/u/62527468?v=4', alt: 'Foto do apoidor' },
  ];

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
            {arrayImages.length > 0 &&
              arrayImages.map((image) => {
                return (
                  <div key={image.id}>
                    <img src={image.src} alt={image.alt} />
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}
