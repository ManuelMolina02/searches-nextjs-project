import { countrieProps } from '../../types'

import styles from './styles.module.scss'
import { ProfileComponent } from './ProfileComponent'
import { ChartPopulation } from './ChartPopulation'
import { ChartAgeGroup } from './ChartAgeGroup'
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
        <ChartPopulation countrie={countrieSelected} />
        <ChartAgeGroup countrie={countrieSelected} />
      </div>

      <div className={styles.row}>
        <ContentTable dataEconomy={countrieSelected.searches.economy} />
      </div>

    </div>

  )
}
