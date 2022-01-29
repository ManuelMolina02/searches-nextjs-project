import ReactApexChart from 'react-apexcharts'
import styles from './styles.module.scss'

export default function ChartTree({ countrie }) {

  const series = [
    {
      data: [
        {
          x: 'New Delhi',
          y: 218
        },
        {
          x: 'Kolkata',
          y: 149
        },
        {
          x: 'Mumbai',
          y: 184
        },
        {
          x: 'Ahmedabad',
          y: 55
        },
        {
          x: 'Bangaluru',
          y: 84
        }
      ]
    }
  ]

  return (

    <div className={styles.populationContainer}>
      <h2>Produtos de Exportação </h2>

      <div>
        <div >

          <ReactApexChart

            options={{
              legend: {
                show: false
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

      </div>
    </div>

  )
}