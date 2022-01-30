import ReactApexChart from 'react-apexcharts'
import styles from './styles.module.scss'

interface genderPopulationProps {
  genderPopulation: [{
    gender: string,
    color: string,
    etary_groups: [{
      age_range: string,
      amount: number
    }]
  }]
}

export default function ChartPopulation({ genderPopulation }: genderPopulationProps) {

  function formatSeries(series) {
    return series.map(data => Number((data / 1000000).toFixed(3)))
  }

  let series = genderPopulation.map(serie => {
    return serie.etary_groups.map(data => data.amount)
      .reduce((acc, amount) => acc += amount)
  })

  let labels = genderPopulation.map(genders => genders.gender)

  return (
    <div className={styles.populationContainer}>
      <h2>População por Gênero</h2>

      <div className={styles.ChartPopulationContainer}>
        <ReactApexChart
          options={{
            chart: {
              type: 'donut'
            },
            legend: {
              position: 'bottom',
              offsetY: 0,
              height: -20,
              labels: {
                colors: 'white'
              }
            },
            labels,
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      color: 'white',
                    },
                    value: {
                      color: 'white'
                    },
                    total: {
                      show: true,
                      fontSize: '22px',
                      color: 'white'
                    }
                  }
                }
              }
            }

          }}
          series={formatSeries(series)}
          type="donut"
          width={340}
        />
      </div>

    </div>

  )
}