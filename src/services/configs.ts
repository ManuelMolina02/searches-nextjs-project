//Charts Fixed Configs

export const ageGroupsChartOptions = {
  //Configs Gráfico
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },

  //Colunas de gráfico
  plotOptions: {
    bar: {
      borderRadius: 3,
    },
  },

  //Caixa de dados (dentro do gráfico)
  dataLabels: {
    formatter: function (val) {
      return Math.abs(Number(val)) + "%";
    },

    style: {
      colors: ["white"],
      fontSize: "13px",
    },

    dropShadow: {
      enabled: true,
      color: "#0c0c20fa",
      left: 0,
      top: 0,
      opacity: 1,
      blur: 10,
    },
  },

  //Legendas
  legend: {
    position: "bottom",
    offsetY: 0,
    offsetX: 0,
    labels: {
      colors: "#e1e1e6",
    },

    itemMargin: {
      horizontal: 10,
      vertical: 5,
    },
  },

  //Cor interna do Gráfico
  fill: {
    opacity: 1,
  },

  //Eixos x, y e grid de linhas de fundo
  xaxis: {
    type: "category",
    categories: [
      "0-14 anos",
      "15-29 anos",
      "30-49 anos",
      "50-69 anos",
      "+ 70 anos",
    ],
    labels: {
      style: {
        colors: "#8a8a96",
      },
    },
    axisBorder: {
      color: "#4b4b55",
    },
    axisTicks: {
      color: "#4b4b55",
    },
  },

  yaxis: {
    min: -18,
    max: 18,
    labels: {
      style: {
        colors: "#8a8a96",
      },
    },
  },

  grid: {
    borderColor: "#4b4b55",
  },
};

export const genderPopulationChartOptions = {
  chart: {
    type: "pie",
    animations: {
      easing: "easeinout",
      speed: 500,
    },
  },

  tooltip: {
    enabled: false,
  },

  dataLabels: {
    style: {
      colors: ["white"],
      fontSize: "13px",
    },

    dropShadow: {
      enabled: true,
      color: "#0c0c20fa",
      left: 2,
      top: 2,
      opacity: 1,
      blur: 10,
    },
  },

  labels: ["Masculino", "Feminino"],

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
      colors: "#e1e1e6",
    },
  },

  stroke: {
    width: 0,
  },

  plotOptions: {
    pie: {
      donut: {
        size: "58%",
        labels: {
          show: true,
          name: {
            color: "#e1e1e6",
          },
          value: {
            color: "#e1e1e6",
            formatter: function (val) {
              return val + " Mi";
            },
          },
          total: {
            show: true,
            fontSize: "22px",
            color: "#e1e1e6",
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
};

export const economyChartOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
    offsetX: -26,
    offsetY: 18,
  },
  grid: {
    borderColor: "transparent",
  },

  plotOptions: {
    bar: {
      barHeight: "50%",
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: "bottom",
      },
      borderRadius: 12,
    },
  },

  dataLabels: {
    enabled: false,
  },

  yaxis: {
    labels: {
      show: false,
    },
  },

  tooltip: {
    enabled: false,
  },

  legend: {
    show: false,

    labels: {
      colors: "#e1e1e6",
    },
  },
};
