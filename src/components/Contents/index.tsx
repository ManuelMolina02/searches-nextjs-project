import dynamic from 'next/dynamic';

import { countrieProps } from '../../types'
import { AboutCountrie } from './AboutCountrie';
import { ChartEconomy } from './ChartsEconomy';
import { ContentTable } from './DetailsTable';
import styles from './styles.module.scss'

const ChartAgeGroup = dynamic(() => import("./ChartAgeGroups"), { ssr: false })
const ChartPopulation = dynamic(() => import("./ChartPopulation"), { ssr: false })
const BoxMap = dynamic(() => import("./BoxMap"), { ssr: false })

interface contentProps {
  countrieSelected: countrieProps,
}

export function Contents({ countrieSelected }: contentProps) {
  let defaultLocation = [41.3239751, -4.016104]

  return (
    <div className={styles.container} >

      <div className={styles.column}>
        <div className={styles.row}>
          <AboutCountrie countrie={countrieSelected} />
          <BoxMap defaultPosition={defaultLocation} location={[countrieSelected.map_coordinate.latitude, countrieSelected.map_coordinate.longitude]} />

        </div>

        <div className={styles.row}>
          <ChartPopulation genderPopulation={countrieSelected.searches.population} />
          <ChartAgeGroup genderPopulation={countrieSelected.searches.population} />
        </div>

        <div className={styles.row}>
          <ContentTable dataEconomy={countrieSelected.searches.economy} />

        </div>
      </div>

      <div className={styles.column}>
        <ChartEconomy dataEconomy={countrieSelected.searches.economy} />
      </div>
    </div>

  )
}
