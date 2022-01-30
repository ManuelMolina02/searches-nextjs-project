import ReactApexChart from 'react-apexcharts'
import styles from './styles.module.scss'

interface etaryGroupsChartProps {
  genderPopulation: [{
    gender: string,
    color: string,
    etary_groups: [{
      age_range: string,
      amount: number
    }]
  }]
}

export default function ChartAgeGroup({ genderPopulation }: etaryGroupsChartProps) {

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
            options={{
              chart: {
                stacked: true,
                toolbar: {
                  show: false
                }
              },

              plotOptions: {
                bar: {
                  borderRadius: 3
                },
              },
              tooltip: {
                theme: 'dark'
              },

              legend: {
                position: 'bottom',
                offsetY: 0,
                offsetX: 0,
                labels: {
                  colors: 'white'
                },
                itemMargin: {
                  horizontal: 10,
                  vertical: 5
                }
              },
              fill: {
                opacity: 1
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

              xaxis: {
                type: 'category',
                categories: ['0-14', '15-29', '30-49', '50-69', '70 +'],
                labels: {
                  style: {
                    colors: 'white'
                  }
                }
              },
              yaxis: {
                labels: {
                  style: {
                    colors: 'white'
                  }
                }
              }
            }}
            series={series}
            type="bar"
            width={460}
            height={300}
          />

        </div>

      </div>
    </div>

  )
}