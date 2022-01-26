import { ChartBar } from '../ChartBar/ChartBar'
import styles from './styles.module.scss'


export function PopulationComponent({ countrie }) {
  interface numbersProps {
    total: number,
    populationData: {
      amount: number
    }
  }

  const populationData = countrie.searches.population.map(data =>
    Number(data.amount.replace(/[^0-9]/g, ''))
  )

  const total = populationData.reduce((acc, amount) => acc += amount)

  const numbersPopulation = {
    total,
    populationData
  }

  function porcentPopulation(gender, numbersPopulation: numbersProps) {
    try {

      if (gender === 'Masculino') {
        return ((populationData[0] / total) * 100).toFixed(2)
      } else {
        return ((populationData[1] / total) * 100).toFixed(2)
      }

    } catch {
      throw new Error('Erro de parametro na função');
    }
  }

  return (

    <div className={styles.populationContainer}>
      <h2>População por Gênero</h2>

      <div>
        <div className={styles.ChartPopulationContainer}>
          <ChartBar population={populationData} />

        </div>

        <div className={styles.genderItems}>
          {
            countrie.searches.population.map(data => (
              <div key={data.gender} className={styles.genderItem}>
                <div> <a style={{ backgroundColor: data.color }}></a> {data.gender}</div>
                <p>{data.amount}</p>
                <span>{porcentPopulation(data.gender, numbersPopulation)} %</span>

              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}