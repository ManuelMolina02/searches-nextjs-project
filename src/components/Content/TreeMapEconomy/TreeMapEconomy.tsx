import { economyProps } from '../../../services/types'
import { themes } from '../../../styles/theme'
import { Table } from './Table'
import styles from './treeMapEconomy.module.scss'

interface TreeMapEconomyProps {
  dataEconomy: economyProps[],
  colorsTheme: {
    bgPrimary: string,
    bgSecondary: string,
    color: string,
  },
}

export function TreeMapEconomy({ dataEconomy, colorsTheme }: TreeMapEconomyProps) {
  return (

    <div className={styles.detailsTableContainer} >
      {
        dataEconomy.map(data => (
          <div key={data.id_activity} style={{ backgroundColor: colorsTheme.bgPrimary, color: colorsTheme.color }}>
            <p>Principais {data.name_activity}</p>

            <Table details={data.details} />

          </div>
        ))
      }
    </div>

  )
}