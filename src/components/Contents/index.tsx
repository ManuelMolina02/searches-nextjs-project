import dynamic from 'next/dynamic';

import { countrieProps } from '../../types'
import { AboutCountrie } from './AboutCountrie';
import { ContentTable } from './DetailsTable';
import styles from './styles.module.scss'

const ChartAgeGroup = dynamic(() => import("./ChartAgeGroups"), { ssr: false })
const BoxMap = dynamic(() => import("./BoxMap"), { ssr: false })
const ChartPopulation = dynamic(() => import("./ChartPopulation"), { ssr: false })
const ChartTree = dynamic(() => import("./ChartTree"), { ssr: false })

interface contentProps {
  countrieSelected: countrieProps,
}

export function Contents({ countrieSelected }: contentProps) {
  const defaultLocation = [41.3239751, -4.016104]
  const center = [
    countrieSelected.map_coordinate.latitude,
    countrieSelected.map_coordinate.longitude
  ]

  return (
    <div className={styles.container} >

      <div className={styles.column}>
        <div className={styles.row}>
          <AboutCountrie countrie={countrieSelected} />
          <BoxMap location={center} />

        </div>

        <div className={styles.row}>
          <ChartPopulation countrie={countrieSelected} />
          <ChartAgeGroup countrie={countrieSelected} />
        </div>

        <div className={styles.row}>
          <ContentTable dataEconomy={countrieSelected.searches.economy} />

        </div>
      </div>

      <div className={styles.column}>
        <ChartTree countrie={countrieSelected} />
        <ChartTree countrie={countrieSelected} />
      </div>


    </div>

  )
}
