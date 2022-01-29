import dynamic from 'next/dynamic'
import { economyCountrieProps } from '../../../types'
import styles from './styles.module.scss'

const ChartTree = dynamic(() => import("./ChartTree"), { ssr: false })

interface chartTreeProps {
  dataEconomy: economyCountrieProps[],
}


export function ChartEconomy({ dataEconomy }: chartTreeProps) {

  return (
    <>
      {
        dataEconomy.map(data => (
          <div key={data.id_activity}>
            <div className={styles.populationContainer}>
              <h2>{data.name_activity} </h2>

              <ChartTree detailsActivity={data.details} />

            </div>
          </div>
        ))
      }
    </>

  )
}