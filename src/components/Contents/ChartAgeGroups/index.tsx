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
    return (((amount) / 100000).toFixed(1))
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
                  horizontal: false,
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
                }
              },
              fill: {
                opacity: 1
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
            height={240}
            width={460}
          />

        </div>

      </div>
    </div>

  )
}