import ReactApexChart from 'react-apexcharts'
import styles from './styles.module.scss'

export default function ChartPopulation({ countrie }) {

  const series = [32, 60]

  return (

    <div className={styles.populationContainer}>
      <h2>População por Gênero </h2>

      <div>
        <div className={styles.ChartPopulationContainer}>

          <ReactApexChart
            options={{
              chart: {

                type: 'donut'
              },
              dataLabels: {
                enabled: true
              },

              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    show: true
                  }
                }
              }],
              legend: {
                position: 'bottom',
                offsetY: 0,
                height: -20,
              }
            }}
            series={series}
            type="donut"
            width={340}
          />
        </div>

      </div>
    </div>

  )
}