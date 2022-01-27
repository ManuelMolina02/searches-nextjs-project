import { countrieProps } from '../../types'
import styles from './styles.module.scss'



interface tableProps {
  countries: countrieProps[],
}


export function Table({ countries }: tableProps) {
  return (

    <table className={styles.tableContainer}>

      <thead>
        <tr>
          <th>Bandeira</th>
          <th>Nome do País | Sigla</th>
          <th>Continente</th>
          <th>Capital</th>

        </tr>

      </thead>

      <tbody>

        {
          countries.map(countrie => (
            <tr key={countrie.id} >

              <td>
                <img src={countrie.url_flag} />
              </td>
              <td>{countrie.name} | {countrie.initials}</td>
              <td>{countrie.continent}</td>
              <td>{countrie.capital}</td>

            </tr>
          ))

        }

      </tbody>
    </table>
  )
}