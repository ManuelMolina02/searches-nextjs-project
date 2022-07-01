import styles from './sidebarButtons.module.scss'

interface ButtonProps {
  id: number,
  name: string,
  flag: string,
  countrieActive: (id: number) => void,
  colorsTheme: {
    bg100: string,
    bg200: string,
    bg300: string,
    color: string,
    buttonColor: string,
  }
}

export function Button({ id, name, flag, countrieActive, colorsTheme }: ButtonProps) {

  return (
    <button
      className={styles.buttonContainer}
      type="button"
      onClick={() => countrieActive(id)}
      style={{ backgroundColor: colorsTheme.buttonColor }}

    >
      <img src={flag} alt="" />
      {name}
    </button>
  );
}

