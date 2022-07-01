
import { useState } from 'react'
import { useTheme } from '../../../../contexts/theme'
import { detailsEconomyProps } from '../../../../services/types'
import styles from './styles.module.scss'

interface tableProps {
  details: detailsEconomyProps[]
}

export function Table({ details }: tableProps) {

  const { theme } = useTheme()
  const [dataId, setDataId] = useState(0)

  return (
    <table className={styles.tableContainer} >

      <thead>
        <tr style={{ backgroundColor: theme.bg400 }}>
          <th>ID</th>
          <th>Nome</th>
          <th>Valor</th>
          <th>Referencia</th>
        </tr>
      </thead>

      <tbody>
        {
          details.map(data => (
            <tr key={data.id} style={{ color: theme.color, backgroundColor: dataId !== data.id ? theme.tableLines : theme.bgHover }} onMouseEnter={() => setDataId(data.id)} onMouseLeave={() => setDataId(0)}>
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