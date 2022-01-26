import { countrieProps } from '../../types'
import styles from './styles.module.scss'


interface profileProps {
  countrie: countrieProps
}

export function ProfileComponent({ countrie }: profileProps) {
  return (

    <div className={styles.profileContainer}>

      <img src={countrie.url_flag} alt="" />

      <h3>
        {countrie.name} | {countrie.initials}
      </h3>

      <div className={styles.profileContent}>
        <div>
          <p>Capital:</p>
          <h5>{countrie.capital}</h5>
        </div>

        <div>
          <p>Continente:</p>
          <h5>{countrie.continent}</h5>
        </div>
      </div>

    </div>

  )
}