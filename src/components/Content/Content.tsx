
import { countryProps, economyProps2, geoJsonProps } from '../../services/types'
import { CardProfileCountrie } from './CardProfileCountrie/CardProfileCountrie';
import { DetailsEconomy } from './DetailsEconomy/DetailsEconomy';
import { useTheme } from '../../contexts/useTheme';
import styles from './content.module.scss'

import { ImSpinner2 } from 'react-icons/im'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Head from 'next/head';

const BoxMap = dynamic(() => import("./BoxMap/BoxMap"), { ssr: false })
const ChartBarAgeGroups = dynamic(() => import("./ChartBarAgeGroups/ChartBarAgeGroups"), { ssr: false })
const ChartPieGenders = dynamic(() => import("./ChartPieGenders/ChartPieGenders"), { ssr: false })
const TreeMapEconomy = dynamic(() => import("./TreeMapEconomy/TreeMapEconomy"), { ssr: false })

interface contentProps {
  countrieSelected: countryProps,
  economy: economyProps2,

  mapBoxData: {
    mapUrl: string,
    dataGeoJson: geoJsonProps[]
  }
}

export function Contents({ countrieSelected, economy, mapBoxData }: contentProps) {

  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)


  const dataEconomy = [
    {
      id: '1',
      name: 'imports',
      detail: economy.imports.mainConsumers
    },
    {
      name: 'exports',
      detail: economy.exports.mainConsumers
    }
  ]

  setTimeout(() => {
    setIsOpen(true)
  }, 750)


  return (
    <>
      <Head>
        <title>dash | south-america-prism</title>
      </Head>

      {
        !isOpen
          ? (
            <div className={styles.spinner} >

              <ImSpinner2 color={theme.color} />

            </div>
          ) :
          (
            <div className={styles.container} >


              <div className={styles.column}>

                <div className={styles.row}>
                  <CardProfileCountrie countrie={countrieSelected} colorsTheme={theme} />
                  <BoxMap id={countrieSelected.iso_a3} mapBoxData={mapBoxData} bg={theme.bg100} />
                </div>

                <div className={styles.row}>
                  <ChartPieGenders id={countrieSelected.id} genderPopulation={countrieSelected.searches.population} colorsTheme={theme} />
                  <ChartBarAgeGroups id={countrieSelected.id} genderPopulation={countrieSelected.searches.population} colorsTheme={theme} />
                </div>

                <div className={styles.row}>
                  <TreeMapEconomy dataEconomy={dataEconomy} colorsTheme={theme} />
                </div>
              </div>

              <div className={styles.column} style={{ marginRight: '20px' }}>
                <DetailsEconomy dataEconomy={countrieSelected.searches.economy} colorsTheme={theme} />
              </div>
            </div>
          )}
    </>

  )
}
