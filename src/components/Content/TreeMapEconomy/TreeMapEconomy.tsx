import ReactApexChart from 'react-apexcharts'
import styles from './treeMapEconomy.module.scss'

interface TreeMapEconomyProps {
  dataEconomy: economyConsumer[],
  colorsTheme: {
    bg100: string,
    bg200: string,
    color: string,
  },
}

type economyConsumer = { name: string, detail: detailConsumer[] }
type detailConsumer = { name: string, value: number }

export default function TreeMapEconomy({ dataEconomy, colorsTheme }: TreeMapEconomyProps) {

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
          <div key={data.name} style={{ backgroundColor: colorsTheme.bg100, color: colorsTheme.color }}>
            <p>Principais Países de {data.name === 'imports' ? 'Importação' : 'Exportação'}</p>
            {/*   <Table details={data.details} />   */}

            <div>
              <ReactApexChart
                key={data.name}
                type="treemap"
                width={860}
                height={320}
                series={[
                  {
                    data: [...Object.values(data.detail).map(data => {
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