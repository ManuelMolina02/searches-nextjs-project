import { countrieProps } from '../../types'

import styles from './styles.module.scss'
import { ProfileComponent } from '../ProfileComponent'
import { PopulationComponent } from '../PopulationChart'
import { AgeGroupChart } from '../AgeGroupChart'
import { Map } from '../Map'
import { Table } from '../Table'

interface contentProps {
  countries: countrieProps[],
  countrieId: string
}


export function Content({ countries, countrieId }: contentProps) {
  // 025594, 025595, 025596, 025597, 025598

  const [countrie] = countries.filter(countrie => countrie.id === countrieId)

  return (
    <div className={styles.container} >

      <div className={styles.row}>
        <ProfileComponent countrie={countrie} />
        <Map mapCoordinates={countrie.map_coordinate} />

      </div>
      <div className={styles.row}>
        <PopulationComponent countrie={countrie} />
        <AgeGroupChart countrie={countrie} />
      </div>
      <div className={styles.row}>
        <Table countries={countries} />
      </div>


    </div>

  )
}
