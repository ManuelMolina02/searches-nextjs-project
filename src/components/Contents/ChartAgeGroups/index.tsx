import ReactApexChart from 'react-apexcharts'
import styles from './styles.module.scss'

interface etaryGroupsChartProps {
  id: number,
  genderPopulation: [{
    gender: string,
    etary_groups: [{
      age_range: string,
      amount: number
    }]
  }]
}

export default function ChartAgeGroup({ id, genderPopulation }: etaryGroupsChartProps) {

  function formatAmount(amount: number) {
    return (((amount) / 1000000).toFixed(2))
  }

  const series = genderPopulation.map(serie => {
    return {
      name: serie.gender,
      data: serie.etary_groups.map(data => formatAmount(data.amount))
    }
  })

  return (

    <div className={styles.exportationContainer}>
      <h2>População por Faixa Etária</h2>

      <div>
        <div className={styles.ChartPopulationContainer}>

          <ReactApexChart
            key={id}
            options={{
              chart: {
                stacked: true,
                toolbar: {
                  show: false
                }
              },

              grid: {
                borderColor: '#4b4b55',
              },

              plotOptions: {
                bar: {
                  borderRadius: 3,

                },

              },
              tooltip: {
                theme: 'dark',
              },

              dataLabels: {
                style: {
                  colors: ['white'],
                  fontSize: '13px',
                },
                dropShadow: {
                  enabled: true,
                  color: '#0c0c20fa',
                  left: 0,
                  top: 0,
                  opacity: 1,
                  blur: 10
                },
              },

              legend: {
                position: 'bottom',
                offsetY: 0,
                offsetX: 0,
                labels: {
                  colors: '#e1e1e6',
                },

                itemMargin: {
                  horizontal: 10,
                  vertical: 5
                }
              },
              fill: {
                opacity: 1
              },
              // dataLabels: {
              //   enabled: true,
              //   style: {
              //     colors: ['#16141490'],
              //     fontSize: '12px'

              //   },

              //   background: {
              //     dropShadow: {
              //       enabled: true,
              //       opacity: .1
              //     },
              //     enabled: true,
              //     borderWidth: 0,
              //     borderRadius: 2
              //   }
              // },
              xaxis: {
                type: 'category',
                categories: ['0-14', '15-29', '30-49', '50-69', '70 +'],
                labels: {
                  style: {
                    colors: '#8a8a96',
                  },
                },
                axisBorder: {
                  color: '#4b4b55'
                },
                axisTicks: {
                  color: '#4b4b55'
                }
              },
              yaxis: {
                labels: {
                  style: {
                    colors: '#8a8a96'
                  }
                }
              },

            }}
            series={series}
            type="bar"
            width={480}
            height={300}
          />

        </div>

      </div>
    </div>

  )
}