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
              type: 'pie',
            },
            tooltip: {
              enabled: false
            },

            labels,
            legend: {
              position: 'bottom',
              offsetY: 0,
              height: -20,
              markers: {
                radius: 2
              },
              itemMargin: {
                horizontal: 10,
                vertical: 5
              },
              labels: {
                colors: '#e1e1e6',
              }
            },
            dataLabels: {
              enabled: true,
              style: {
                colors: ['#16141490'],
                fontSize: '12px'

              },
              background: {
                dropShadow: {
                  enabled: true,
                  opacity: .1
                },
                enabled: true,
                borderWidth: 0,
                borderRadius: 2
              }
            },
            stroke: {
              width: 0
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '58%',
                  labels: {

                    show: true,
                    name: {
                      color: '#e1e1e6',
                    },
                    value: {
                      color: '#e1e1e6',
                      formatter: function (val) {
                        return val + " Mi"
                      }
                    },
                    total: {
                      show: true,
                      fontSize: '22px',
                      color: '#e1e1e6',
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
          width={380}
        />
      </div>

    </div>

  )
}