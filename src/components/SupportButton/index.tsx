import styles from './styles.module.scss';
import NextLink from '../Link';

export default function SupportButton() {
  return (
    <div className={styles.donateContainer}>
      <NextLink href="/donate" title="Apoiar" />
    </div>
  );
}
