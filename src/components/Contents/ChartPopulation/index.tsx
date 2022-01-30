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
    return series.map(data => Number((data / 1000000).toFixed(2)))
  }



  let series = genderPopulation.map(serie => {
    const data = serie.etary_groups.map(data => data.amount)
      .reduce((acc, amount) => acc += amount)

    let formatData = Number((data / 1000000).toFixed(2))

    return formatData
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
                      color: 'white',
                      formatter: function (val) {
                        return val + " Mi"
                      }
                    },
                    total: {
                      show: true,
                      fontSize: '22px',
                      color: 'white',
                      formatter: function (w) {
                        return w.globals.seriesTotals.reduce((a, b) => {
                          return a + b
                        }, 0) + ' Mi'
                      }
                    }

                  }
                }
              }
            }

          }}
          series={series}
          type="donut"
          width={340}
        />
      </div>

    </div>

  )
}