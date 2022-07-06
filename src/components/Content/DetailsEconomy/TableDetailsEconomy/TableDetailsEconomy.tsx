import { useState } from 'react'
import { useTheme } from '../../../../contexts/useTheme'
import { detailsEconomyProps } from '../../../../services/types'
import styles from './tableDetailsEconomy.module.scss'

interface TableDetailsEconomyProps {
  details: detailsEconomyProps[]
}

export function TableDetailsEconomy({ details }: TableDetailsEconomyProps) {
  const { theme } = useTheme()
  const [dataId, setDataId] = useState(0)

  return (
    <table className={styles.tableContainer}>

      <thead>
        <tr style={{ backgroundColor: theme.bg400 }}>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
      </thead>

      <tbody>

        {
          details.map(data => (
            <tr key={data.id} style={{ color: theme.color, backgroundColor: dataId !== data.id ? theme.tableLines : theme.bgHover }} onMouseEnter={() => setDataId(data.id)} onMouseLeave={() => setDataId(0)}>
              <td>{data.name} <a href={data.reference} target="_blank" /></td>
              <td>$ {data.value} Bilhões</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}