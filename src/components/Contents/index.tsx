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
  geoJSON: [],
}

export function Contents({ countrieSelected, geoJSON }: contentProps) {

  return (
    <div className={styles.container} >

      <div className={styles.column}>
        <div className={styles.row}>
          <AboutCountrie countrie={countrieSelected} />

          <BoxMap id={countrieSelected.iso_a3} geoJSON={geoJSON} />

        </div>

        <div className={styles.row}>
          <ChartPopulation id={countrieSelected.id} genderPopulation={countrieSelected.searches.population} />
          <ChartAgeGroup id={countrieSelected.id} genderPopulation={countrieSelected.searches.population} />
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
