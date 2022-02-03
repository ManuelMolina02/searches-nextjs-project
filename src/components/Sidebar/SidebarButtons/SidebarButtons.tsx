import styles from './sidebarButtons.module.scss'

interface ButtonProps {
  id: number,
  name: string,
  flag: string,
  countrieActive: (id: number) => void
}

export function Button({ name, flag, countrieActive, id }: ButtonProps) {

  return (
    <button
      className={styles.buttonContainer}
      type="button"
      onClick={() => countrieActive(id)}

    >
      <img src={flag} alt="" />
      {name}
    </button>
  );
}

