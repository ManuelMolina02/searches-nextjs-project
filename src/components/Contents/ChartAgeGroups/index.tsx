import ReactApexChart from 'react-apexcharts'
import styles from './styles.module.scss'

export default function ChartAgeGroup({ countrie }) {

  const series = [{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27]
  }]

  return (

    <div className={styles.exportationContainer}>
      <h2>População por Faixa Etária</h2>

      <div>
        <div className={styles.ChartPopulationContainer}>

          <ReactApexChart
            options={{
              chart: {
                stacked: true,
                zoom: {
                  enabled: false
                }
              },

              plotOptions: {
                bar: {
                  horizontal: false,
                  borderRadius: 3
                },
              },

              legend: {
                position: 'bottom',
                offsetY: 0,
                offsetX: 0,
              },
              fill: {
                opacity: 1
              }
            }}
            series={series}
            type="bar"
            height={240}
            width={460}
          />

        </div>

      </div>
    </div>

  )
}