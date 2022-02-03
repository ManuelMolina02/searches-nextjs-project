
import { detailsEconomyProps } from '../../../../services/types'
import styles from './styles.module.scss'

interface tableProps {
  details: detailsEconomyProps[]
}

export function Table({ details }: tableProps) {
  return (
    <table className={styles.tableContainer}>

      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Valor</th>
          <th>Referencia</th>
        </tr>
      </thead>

      <tbody>
        {
          details.map(data => (
            <tr key={data.id} >
              <td>{data.id}<a href={data.reference} target="_blank"></a></td>
              <td>{data.name}</td>
              <td>{data.value} </td>
              <td>Acessar Conteúdo</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}