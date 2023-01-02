import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

export default function SignInButton({ src, alt, title }) {
  const { data: session } = useSession();

  console.log(session);

  return (
    <>
      {session ? (
        <div>
          <button className={styles.signInButtonLogin} type="button" onClick={() => signOut()}>
            <img src="https://avatars.githubusercontent.com/u/62527468?v=4" alt="Foto do usuário" />
            Olá Ícaro, seja bem vindo!
            <img src="images/button-closed.svg" alt="ícone de deslogar" />
          </button>
        </div>
      ) : (
        <div>
          <a
            href={`/api/auth/signin`}
            className={styles.signInButton}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            <img src={src} alt={alt} /> {title}
          </a>
        </div>
      )}
    </>
  );
}
