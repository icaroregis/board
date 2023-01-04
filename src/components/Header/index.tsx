import styles from './styles.module.scss';  
import NextLink from '../Link';
import SignInButton from '../SignInButton'; 

export default function Header() { 
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerContentChild}>
          <NextLink href="/" img="/images/logo.svg" alt="Logo da aplicação" />

          <nav>  
            <ul>
              <li>
                <NextLink href="/" title="Home" />
              </li>

              <li>
                <NextLink href="/board" title="Meu Board" />
              </li>
            </ul>
          </nav>
        </div>

        <SignInButton src="/images/githubicon.png" alt="Icone do github" title="Entrar com Github" />
      </div>
    </header> 
  );
}
