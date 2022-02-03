import { detailsEconomyProps } from '../../../../services/types'
import { economyChartOptions } from '../../../../services/configs'
import ReactApexChart from 'react-apexcharts'

interface ChartBarEconomyProps {
  details: detailsEconomyProps[]
}

export default function ChartBarEconomy({ details }: ChartBarEconomyProps) {

  const id = details.map(data => data.id)
  const labels = details.map(data => data.name)
  const series = [{ data: details.map(data => data.value) }]

  const dataOptions = {
    ...economyChartOptions,
    xaxis: {
      categories: labels,
      axisTicks: {
        show: false
      },

      axisBorder: {
        color: '#4b4b55'
      },

      labels: {
        show: false
      }
    },
  }
  return (
    <ReactApexChart
      key={id[0]}
      options={dataOptions as any}
      series={series}
      type="bar"
      width='200px'
      height='375px'
    />

  )
}