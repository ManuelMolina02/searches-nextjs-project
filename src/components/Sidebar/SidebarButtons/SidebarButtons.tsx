import styles from './sidebarButtons.module.scss'

interface ButtonProps {
  countrie: {
    id: number,
    name: string,
    flag: string,
  },
  colorsTheme: {
    bg100: string,
    color: string,
    buttonColor: string,
    neutralColor: string,
  }
  countrieActive: (id: number) => void,
  selectedCountrie: number,
}

export function Button({ countrie, countrieActive, colorsTheme, selectedCountrie }: ButtonProps) {
  const newStyle = countrie.id !== selectedCountrie
    ? { backgroundColor: colorsTheme.buttonColor }
    : { backgroundColor: colorsTheme.neutralColor, color: colorsTheme.bg100 }

  return (
    <button
      className={styles.buttonContainer}
      type="button"
      style={newStyle}
      onClick={() => countrieActive(countrie.id)}

    >
      <img src={countrie.flag} alt="" />
      {countrie.name}
    </button>
  );
}

