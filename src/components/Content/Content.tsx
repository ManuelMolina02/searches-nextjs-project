
import { countryProps, geoJsonProps } from '../../services/types'
import { CardProfileCountrie } from './CardProfileCountrie/CardProfileCountrie';
import { TreeMapEconomy } from './TreeMapEconomy/TreeMapEconomy';
import { DetailsEconomy } from './DetailsEconomy/DetailsEconomy';
import styles from './content.module.scss'

import dynamic from 'next/dynamic';

const BoxMap = dynamic(() => import("./BoxMap/BoxMap"), { ssr: false })
const ChartBarAgeGroups = dynamic(() => import("./ChartBarAgeGroups/ChartBarAgeGroups"), { ssr: false })
const ChartPieGenders = dynamic(() => import("./ChartPieGenders/ChartPieGenders"), { ssr: false })

interface contentProps {
  countrieSelected: countryProps,
  mapBoxData: {
    mapUrl: string,
    dataGeoJson: geoJsonProps[]
  }
}

export function Contents({ countrieSelected, mapBoxData }: contentProps) {

  return (
    <div className={styles.container} >

      <div className={styles.column}>

        <div className={styles.row}>
          <CardProfileCountrie countrie={countrieSelected} />
          <BoxMap id={countrieSelected.iso_a3} mapBoxData={mapBoxData} />
        </div>

        <div className={styles.row}>
          <ChartPieGenders id={countrieSelected.id} genderPopulation={countrieSelected.searches.population} />
          <ChartBarAgeGroups id={countrieSelected.id} genderPopulation={countrieSelected.searches.population} />
        </div>

        <div className={styles.row}>
          <TreeMapEconomy dataEconomy={countrieSelected.searches.economy} />
        </div>
      </div>

      <div className={styles.column}>
        <DetailsEconomy dataEconomy={countrieSelected.searches.economy} />
      </div>
    </div>

  )
}
