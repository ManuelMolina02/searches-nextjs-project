import ReactApexChart from 'react-apexcharts'

interface chartTreeProps {
  detailsActivity: [{
    id: number,
    name: string,
    value: number,
    unit: string
    reference: string
  }]
}

export default function ChartTree({ detailsActivity }: chartTreeProps) {

  let data = detailsActivity.map(data => {
    return {
      x: data.name,
      y: data.value
    }
  })

  const series = [{ data }]

  return (
    <div >
      <ReactApexChart
        options={{
          legend: {
            show: false
          },
          tooltip: {
            theme: 'dark'
          },
          chart: {
            type: 'treemap'
          }
        }}
        series={series}
        type="treemap"
        width={460}
        height={340}
      />
    </div>
  )
}