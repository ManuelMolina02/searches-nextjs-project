import styles from './styles.module.scss'
import { Doughnut } from "react-chartjs-2";


export function PopulationComponent({ countrie }) {
  interface numbersProps {
    total: number,
    populationData: {
      amount: number
    }
  }

  const populationData = countrie.searches.population.map(data =>
    data.amount
  )

  const total = populationData.reduce((acc, amount) => acc += amount)

  const numbersPopulation = {
    total,
    populationData
  }

  const dataChart = {
    datasets: [
      {

        data: [populationData[1], populationData[0]],
        backgroundColor: [
          'rgba(255, 99, 132, .8)',
          'rgba(54, 162, 235, .8)',

        ],
        borderColor: '#2e303c7e',
        borderWidth: 3,
        hoverOffset: 4,
      },
    ],
  };


  function porcentPopulation(gender, numbersPopulation: numbersProps) {
    if (gender === 'Masculino') {
      return ((populationData[0] / total) * 100).toFixed(2)
    } else {
      return ((populationData[1] / total) * 100).toFixed(2)
    }
  }

  return (

    <div className={styles.populationContainer}>
      <h2>População por Gênero</h2>

      <div>
        <div className={styles.ChartPopulationContainer}>

          <div className={styles.chart}>
            <Doughnut data={dataChart} />
          </div>

        </div>

        <div className={styles.genderItems}>
          {
            countrie.searches.population.map(data => (
              <div key={data.gender} className={styles.genderItem}>
                <div> <a style={{ backgroundColor: data.color }}></a> {data.gender}</div>

                <p>{(data.amount / 1000000).toFixed(2)} Milhões</p>

                <span>{porcentPopulation(data.gender, numbersPopulation)} %</span>

              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}