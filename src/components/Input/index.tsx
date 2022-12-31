import styles from './styles.module.scss';

export default function Input({ ...rest }) {
  return (
    <div className={styles.containerInput}>
      <input {...rest} />

      <button>
        <img src="/images/addIcon.svg" alt="Botão de adicionar" />
      </button>
    </div>
  );
}
