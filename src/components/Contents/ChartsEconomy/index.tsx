import dynamic from 'next/dynamic'
import { economyCountrieProps } from '../../../types'
import { Table } from './TableDetails'
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
            <div className={styles.economyContainer}>
              <h2>5 Principais {data.name_activity} </h2>

              <div className={styles.economyContent}>
                <Table details={data.details} />
                <ChartTree detailsActivity={data.details} />

              </div>

            </div>
          </div>
        ))
      }
    </>

  )
}