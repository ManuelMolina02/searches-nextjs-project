import ReactApexChart from 'react-apexcharts'
import { economyProps } from '../../../services/types'
import { themes } from '../../../styles/theme'
import { Table } from './Table'
import styles from './treeMapEconomy.module.scss'

interface TreeMapEconomyProps {
  dataEconomy: economyProps[],
  colorsTheme: {
    bg100: string,
    bg200: string,
    color: string,
  },
}

export default function TreeMapEconomy({ dataEconomy, colorsTheme }: TreeMapEconomyProps) {
  /*
   Object.values(data.details).map(data => {
                    return {
                      x: data.name,
                      y: data.value
                    }
                  })

                  [
    {
      data: [Object.values(data.details).map(data => {
                    return {
                      x: data.name,
                      y: data.value
                    }
                  })

      ]
    }
  ]
  
  */
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
        },

      ]
    }
  ]



  const options = {
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false
      }
    },
    legend: {
      show: false
    },
    chart: {
      type: 'treemap',
      toolbar: {
        show: false,
      },
    },
    colors: [
      '#008ffb',
      '#00e396',
      '#feb019',
      '#ff4560',
      '#775dd0'
    ],
    title: {
      text: undefined
    },
    tooltip: {
      theme: 'dark'
    },
    dataLabels: {
      style: {
        colors: ["white"],
        fontSize: "13px",
      },
    }
  }





  return (

    <div className={styles.detailsTableContainer} >
      {
        dataEconomy.map(data => (
          <div key={data.id_activity} style={{ backgroundColor: colorsTheme.bg100, color: colorsTheme.color }}>
            <p>Principais {data.name_activity}</p>



            {/*   <Table details={data.details} /> */}

            <div>

              <ReactApexChart
                key={data.id_activity}
                type="treemap"
                width={860}
                height={320}

                series={[
                  {
                    data: [...Object.values(data.details).map(data => {
                      return {
                        x: data.name,
                        y: data.value
                      }
                    })

                    ]
                  }
                ]}
                options={options as any}
              />
            </div>


          </div>
        ))
      }
    </div>
  )
}