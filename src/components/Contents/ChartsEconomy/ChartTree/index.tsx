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

  const series = [{ data: detailsActivity.map(data => data.value) }]

  const labels = detailsActivity.map(data => data.name)

  return (
    <ReactApexChart
      options={{
        chart: {
          type: 'bar',
          toolbar: {
            show: false
          },
          offsetX: -26,
          offsetY: 18
        },
        grid: {
          borderColor: 'transparent',
        },

        plotOptions: {
          bar: {
            barHeight: '50%',
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'bottom'
            },
            borderRadius: 12
          }
        },

        dataLabels: {
          enabled: false,
        },

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

        yaxis: {
          labels: {
            show: false
          }
        },

        tooltip: {
          enabled: false
        },

        legend: {
          show: false,

          labels: {
            colors: '#e1e1e6',
          }
        }

      }}
      series={series}
      type="bar"
      width='200px'
      height='375px'
    />

  )
}