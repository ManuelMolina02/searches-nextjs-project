import ReactApexChart from 'react-apexcharts'
import { genderPopulationChartOptions } from '../../../services/configs'
import { useTheme } from '../../../contexts/useTheme'
import styles from './chartPieGenders.module.scss'

interface chartPieGendersProps {
  id: number,
  colorsTheme: {
    bg100: string,
    bg200: string,
    color: string,
  },

  genderPopulation: [{
    gender: string,
    etary_groups: [{
      age_range: string,
      amount: number
    }]
  }]
}

export default function ChartPieGenders({ id, colorsTheme, genderPopulation }: chartPieGendersProps) {

  const { theme } = useTheme()

  let series = genderPopulation.map(serie => {
    let data = serie.etary_groups.map(data => data.amount)
      .reduce((acc, amount) => acc += amount)

    let formatData = Number((data / 1000000).toFixed(2))

    return formatData
  })


  const stylesChart = {
    ...genderPopulationChartOptions,
    legend: {
      position: "bottom",
      offsetY: 0,
      height: -20,
      markers: {
        radius: 2,
      },

      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },

      labels: {
        colors: theme.color,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "58%",
          labels: {
            show: true,
            name: {
              color: theme.color,
            },
            value: {
              color: theme.color,
              formatter: function (val) {
                return val + " Mi";
              },
            },
            total: {
              show: true,
              fontSize: "22px",
              color: theme.color,
              formatter: function (w) {
                return (
                  w.globals.seriesTotals
                    .reduce((a, b) => {
                      return a + b;
                    }, 0)
                    .toFixed(2) + " Mi"
                );
              },
            },
          },
        },
      },
    },
  }

  return (
    <div className={styles.chartPieContainer} style={{ backgroundColor: colorsTheme.bg100, color: colorsTheme.color }}>
      <h2>População por Gênero</h2>

      <div>
        <ReactApexChart
          key={id}
          type="donut"
          width={380}

          series={series}
          options={stylesChart as any}
        />
      </div>

    </div>

  )
}