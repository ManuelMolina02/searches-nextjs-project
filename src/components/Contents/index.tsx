import { countrieProps } from '../../types'

import styles from './styles.module.scss'
import { ProfileComponent } from './ProfileComponent'
import { PopulationComponent } from './PopulationChart'
import { AgeGroupChart } from './AgeGroupChart'
import { Map } from './Map'
import { ContentTable } from './DetailsTable'

interface contentProps {
  countrieSelected: countrieProps,
}

export function Contents({ countrieSelected }: contentProps) {

  return (
    <div className={styles.container} >

      <div className={styles.row}>
        <ProfileComponent countrie={countrieSelected} />
        <Map mapCoordinates={countrieSelected.map_coordinate} />

      </div>

      <div className={styles.row}>
        <PopulationComponent countrie={countrieSelected} />
        <AgeGroupChart countrie={countrieSelected} />
      </div>

      <div className={styles.row}>
        <ContentTable dataEconomy={countrieSelected.searches.economy} />
      </div>

    </div>

  )
}
