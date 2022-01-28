import styles from './styles.module.scss'
import { Bar } from "react-chartjs-2";

export function ChartAgeGroup({ countrie }) {

  const dataChart = {
    labels: [
      "0-14",
      "15-29",
      "30-49",
      "50-69",
      "70 +",

    ],
    datasets: [
      {
        label: "Qtd população",
        data: [22364725, 25286267, 31887206, 19914932, 5648386],

        backgroundColor: [
          'rgba(255, 99, 132 )',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',

        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',

        ],

      },
    ],
  };

  return (

    <div className={styles.exportationContainer}>
      <h2>Pirâmede Etária</h2>

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