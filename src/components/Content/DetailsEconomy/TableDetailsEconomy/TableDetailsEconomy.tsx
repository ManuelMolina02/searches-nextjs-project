import { useTheme } from '../../../../contexts/theme'
import { detailsEconomyProps } from '../../../../services/types'
import styles from './tableDetailsEconomy.module.scss'

interface TableDetailsEconomyProps {
  details: detailsEconomyProps[]
}

export function TableDetailsEconomy({ details }: TableDetailsEconomyProps) {
  const { theme } = useTheme()


  return (
    <table className={styles.tableContainer}>

      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
      </thead>

      <tbody>

        {
          details.map(data => (
            <tr key={data.id} style={{ color: theme.color }}  >
              <td>{data.name} <a href={data.reference} target="_blank" /></td>
              <td>$ {data.value} Bilhões</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}