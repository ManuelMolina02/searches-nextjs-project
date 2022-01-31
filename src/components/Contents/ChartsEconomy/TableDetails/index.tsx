import styles from './styles.module.scss'


export function Table({ details }) {

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
            <tr key={data.id} >
              <td>{data.name} <a href={data.reference} target="_blank" /></td>
              <td>$ {data.value} Bilhões</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}