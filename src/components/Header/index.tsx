import styles from './styles.module.scss';
import NextLink from '../Link';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerContentChild}>
          <NextLink href="/" title="" img="/images/logo.svg" alt="Logo da aplicação" />

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

        <div>
          <button>
            <img src="/images/githubicon.png" alt="" /> Entrar com Github
          </button>
        </div>
      </div>
    </header>
  );
}
