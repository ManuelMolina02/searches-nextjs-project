import { economyProps } from '../../../services/types'
import { TableDetailsEconomy } from './TableDetailsEconomy/TableDetailsEconomy'
import styles from './detailsEconomy.module.scss'

import dynamic from 'next/dynamic'

const ChartBarEconomy = dynamic(() => import("./ChartBarEconomy/ChartBarEconomy"), { ssr: false })

interface chartTreeProps {
  dataEconomy: economyProps[]
}

export function DetailsEconomy({ dataEconomy }: chartTreeProps) {
  return (
    <>
      {
        dataEconomy.map(data => (
          <div key={data.id_activity}>
            <div className={styles.economyContainer}>
              <h2>5 Principais {data.name_activity} </h2>

              <div className={styles.economyContent}>
                <TableDetailsEconomy details={data.details} />
                <ChartBarEconomy details={data.details} />

              </div>
            </div>
          </div>
        ))
      }
    </>

  )
}