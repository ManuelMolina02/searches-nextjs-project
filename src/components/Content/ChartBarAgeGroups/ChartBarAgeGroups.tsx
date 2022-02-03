import { ageGroupsChartOptions } from '../../../services/configs'
import ReactApexChart from 'react-apexcharts'
import styles from './chartBarAgeGroups.module.scss'

interface chartBarAgeGroupsProps {
  id: number,
  genderPopulation: [{
    gender: string,
    etary_groups: [{
      age_range: string,
      amount: number
    }]
  }]
}

export default function ChartBarAgeGroups({ id, genderPopulation }: chartBarAgeGroupsProps) {

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


  return (
    <div className={styles.exportationContainer}>
      <h2>População por Faixa Etária</h2>

      <div>
        <div className={styles.ChartPopulationContainer}>

          <ReactApexChart
            key={id}
            type="bar"
            series={dataSeries}

            width={480}
            height={300}
            options={ageGroupsChartOptions as any}
          />

        </div>
      </div>
    </div>

  )
}