import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string,
  flag: string,
  countrieActive: (id: string) => void

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

