import styles from './styles.module.scss'
import { Bar, Doughnut } from "react-chartjs-2";


export function WidgetsComponent({ countrie }) {
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


    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };


  return (

    <div className={styles.exportationContainer}>
      <h2>Produtos de Exportação</h2>

      <div>
        <div className={styles.ChartPopulationContainer}>

          <div className={styles.chart}>
            <Bar data={dataChart} />
          </div>

        </div>


      </div>
    </div>

  )
}