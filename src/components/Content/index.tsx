import { countrieProps } from '../../types'

import styles from './styles.module.scss'
import { ProfileComponent } from '../ProfileComponent'
import { PopulationComponent } from '../PopulationComponent'
import { WidgetsComponent } from '../WidgetsComponent'



interface contentProps {
  countries: countrieProps[],
  countrieId: string
}


export function Content({ countries, countrieId }: contentProps) {
  // 025594, 025595, 025596, 025597, 025598

  const [countrie] = countries.filter(countrie => countrie.id === countrieId)

  return (
    <div className={styles.container} >

      <div className={styles.content}>
        <ProfileComponent countrie={countrie} />
        <WidgetsComponent />
        <PopulationComponent countrie={countrie} />
        <WidgetsComponent />

      </div>


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
    </div>

  )
}
