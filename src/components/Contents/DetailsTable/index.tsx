import { economyCountrieProps } from '../../../types'
import styles from './styles.module.scss'
import { Table } from './Table'

interface tableProps {
  dataEconomy: economyCountrieProps[],
}

export function ContentTable({ dataEconomy }: tableProps) {
  return (

    <div className={styles.testDiv}>
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