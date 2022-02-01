import ReactApexChart from 'react-apexcharts'
import styles from './styles.module.scss'

interface etaryGroupsChartProps {
  id: number,
  genderPopulation: [{
    gender: string,
    etary_groups: [{
      age_range: string,
      amount: number
    }]
  }]
}

export default function ChartAgeGroup({ id, genderPopulation }: etaryGroupsChartProps) {

  const totalPopulation = genderPopulation.map(data => data.etary_groups
    .map(data => data.amount)
    .reduce((acc, amount) => acc += amount))
    .reduce((acc, amount) => acc += amount)

  const dataSeries = genderPopulation.map(serie => {

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


  const dataOptions = {
    //Configs Gráfico
    chart: {
      stacked: true,
      toolbar: {
        show: false
      },
    },

    //Colunas de gráfico
    plotOptions: {
      bar: {
        borderRadius: 3,
      },
    },

    //Caixa de informativa
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val) {
          return 'Proporção de ' + Math.abs(val) + "%"
        }
      }
    },

    //Caixa de dados (dentro do gráfico)
    dataLabels: {
      formatter: function (val) {
        return Math.abs(Number(val)) + '%'
      },

      style: {
        colors: ['white'],
        fontSize: '13px',
      },

      dropShadow: {
        enabled: true,
        color: '#0c0c20fa',
        left: 0,
        top: 0,
        opacity: 1,
        blur: 10
      },
    },

    //Legendas
    legend: {
      position: 'bottom',
      offsetY: 0,
      offsetX: 0,
      labels: {
        colors: '#e1e1e6',
      },

      itemMargin: {
        horizontal: 10,
        vertical: 5
      }
    },

    //Cor interna do Gráfico
    fill: {
      opacity: 1
    },

    //Eixos x, y e grid de linhas de fundo
    xaxis: {
      type: 'category',
      categories: ['0-14 anos', '15-29 anos', '30-49 anos', '50-69 anos', '+ 70 anos'],
      labels: {
        style: {
          colors: '#8a8a96',
        },
      },
      axisBorder: {
        color: '#4b4b55'
      },
      axisTicks: {
        color: '#4b4b55'
      }
    },

    yaxis: {
      min: -18,
      max: 18,
      labels: {
        style: {
          colors: '#8a8a96'
        }
      }
    },

    grid: {
      borderColor: '#4b4b55',
    },

  }


  return (

    <div className={styles.exportationContainer}>
      <h2>População por Faixa Etária</h2>

      <div>
        <div className={styles.ChartPopulationContainer}>

          <ReactApexChart
            key={id}
            options={dataOptions as any}
            series={dataSeries}
            type="bar"
            width={480}
            height={300}
          />

        </div>

      </div>
    </div>

  )
}