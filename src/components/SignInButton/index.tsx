import { useState } from 'react';
import styles from './styles.module.scss';

export default function SignInButton({ src, alt, title }) {
  const [session, setSession] = useState(true);

  return (
    <>
      {session ? (
        <div>
          <button className={styles.signInButtonLogin} type="button" onClick={() => {}}>
            <img src="https://avatars.githubusercontent.com/u/62527468?v=4" alt="Foto do usuário" />
            Olá Ícaro, seja bem vindo!
            <img src="images/button-closed.svg" alt="ícone de deslogar" />
          </button>
        </div>
      ) : (
        <div>
          <button className={styles.signInButton} type="button" onClick={() => {}}>
            <img src={src} alt={alt} /> {title}
          </button>
        </div>
      )}
    </>
  );
}
