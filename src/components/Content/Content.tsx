
import { countryProps, geoJsonProps } from '../../services/types'
import { CardProfileCountrie } from './CardProfileCountrie/CardProfileCountrie';
import { TreeMapEconomy } from './TreeMapEconomy/TreeMapEconomy';
import { DetailsEconomy } from './DetailsEconomy/DetailsEconomy';
import styles from './content.module.scss'

import dynamic from 'next/dynamic';
import { useTheme } from '../../contexts/theme';

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

  const { theme } = useTheme()

  return (
    <div className={styles.container} >

      <div className={styles.column}>

        <div className={styles.row}>
          <CardProfileCountrie countrie={countrieSelected} colorsTheme={theme} />
          <BoxMap id={countrieSelected.iso_a3} mapBoxData={mapBoxData} bg={theme.bgPrimary} />
        </div>

        <div className={styles.row}>
          <ChartPieGenders id={countrieSelected.id} genderPopulation={countrieSelected.searches.population} colorsTheme={theme} />
          <ChartBarAgeGroups id={countrieSelected.id} genderPopulation={countrieSelected.searches.population} colorsTheme={theme} />
        </div>

        <div className={styles.row}>
          <TreeMapEconomy dataEconomy={countrieSelected.searches.economy} colorsTheme={theme} />
        </div>
      </div>

      <div className={styles.column} style={{ marginRight: '20px' }}>
        <DetailsEconomy dataEconomy={countrieSelected.searches.economy} colorsTheme={theme} />
      </div>
    </div>

  )
}
