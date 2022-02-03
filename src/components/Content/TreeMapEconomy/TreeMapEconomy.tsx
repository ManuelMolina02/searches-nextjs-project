import { economyProps } from '../../../services/types'
import { Table } from './Table'
import styles from './treeMapEconomy.module.scss'

interface TreeMapEconomyProps {
  dataEconomy: economyProps[],
}

export function TreeMapEconomy({ dataEconomy }: TreeMapEconomyProps) {
  return (

    <div className={styles.detailsTableContainer}>
      {
        dataEconomy.map(data => (
          <div key={data.id_activity}>
            <p>Principais {data.name_activity}</p>

            <Table details={data.details} />

          </div>
        ))
      }
    </div>

  )
}