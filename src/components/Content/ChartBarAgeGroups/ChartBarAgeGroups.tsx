import ReactApexChart from 'react-apexcharts'
import { ageGroupsChartOptions } from '../../../services/configs'
import { useTheme } from '../../../contexts/useTheme'
import styles from './chartBarAgeGroups.module.scss'

interface chartBarAgeGroupsProps {
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

export default function ChartBarAgeGroups({ id, colorsTheme, genderPopulation }: chartBarAgeGroupsProps) {

  const { theme } = useTheme()

  let totalPopulation = genderPopulation.map(data => data.etary_groups
    .map(data => data.amount)
    .reduce((acc, amount) => acc += amount))
    .reduce((acc, amount) => acc += amount)

  let dataSeries = genderPopulation.map(serie => {

    let name = serie.gender
    let amount = serie.etary_groups.map(data => data.amount)

    if (serie.gender === "Feminino") {
      let data = amount.map(data => - Number(((data / totalPopulation) * 100).toFixed(1)))
      return {
        name,
        data
      }
    } else {
      let data = amount.map(data => Number(((data / totalPopulation) * 100).toFixed(1)))
      return {
        name,
        data
      }
    }
  })

  const stylesChart = {
    ...ageGroupsChartOptions,
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

    //Caixa de informativa
    tooltip: {
      theme: theme.name,
      y: {
        formatter: function (val) {
          return "Proporção de " + Math.abs(val) + "%";
        },
      },
    },
  }


  return (
    <div className={styles.exportationContainer} style={{ backgroundColor: colorsTheme.bg100, color: colorsTheme.color }}>
      <h2>População por Faixa Etária</h2>

      <div>
        <div className={styles.ChartPopulationContainer}>
          <ReactApexChart
            key={id}
            type="bar"
            series={dataSeries}

            width={480}
            height={300}
            options={stylesChart as any}
          />

        </div>
      </div>
    </div>

  )
}