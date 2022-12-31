import styles from './styles.module.scss';

export default function Task() {
  return (
    <div className={styles.containerTask}>
      <p>Estudar react js com o sujeito programador</p>

      <div className={styles.actions}>
        <div className={styles.calendar}>
          <div>
            <img src="/images/calendar.svg" alt="Ícone de um calendário" /> 17 de julho de 2021
          </div>

          <button className={styles.edit}>
            <img src="/images/pencil.svg" alt="Ícone de uma lixeira" /> Editar
          </button>
        </div>

        <button className={styles.trash}>
          <img src="/images/trash.svg" alt="Ícone de uma lixeira" /> Excluir
        </button>
      </div>
    </div>
  );
}
