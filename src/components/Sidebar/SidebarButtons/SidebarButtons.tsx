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
    btnColor: string,
    neutralColor: string,
    btnActiveColor: string,
  }
  countrieActive: (id: number) => void,
  selectedCountrie: number,
}

export function Button({ countrie, countrieActive, colorsTheme, selectedCountrie }: ButtonProps) {
  const newStyle = countrie.id !== selectedCountrie
    ? { backgroundColor: colorsTheme.btnColor }
    : { backgroundColor: colorsTheme.btnActiveColor }

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

