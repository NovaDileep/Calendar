import logo from "./logo.svg";
import "./App.css";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import HeatMap from "./heatMaps";
import HeatMap2 from "./heatMaps2";
import StackedChart from "./stackedChart";
import CalendarHeatMap from "./calendarHeatmap";
import CalHeatMap from "./calHeatMap";

function Charts() {
  const options = {
    title: {
      text: "line chart",
    },
    series: [
      {
        data: [10, 20, 30],
      },
      {
        data: [100, 200, 300],
      },
    ],
  };
  const options2 = {
    chart: {
      type: "pie",
    },
    title: {
      text: "pie chart",
    },
    series: [
      {
        data: [100, 200, 300],
      },
    ],
  };
  const options3 = {
    title: {
      text: "line and column charts",
    },
    series: [
      { type: "line", data: [100, 200, 300] },
      { type: "column", data: [50, 180, 220, 560] },
    ],
  };

  function getPointCategoryName(point, dimension) {
    var series = point.series,
      isY = dimension === "y",
      axis = series[isY ? "yAxis" : "xAxis"];
    return axis.categories[point[isY ? "y" : "x"]];
  }
  HighchartsHeatmap(Highcharts);
  const optionsHeatMaps = {
    chart: {
      type: "heatmap",
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1,
    },

    title: {
      text: "Sales per employee per weekday",
    },

    xAxis: {
      categories: [
        "Alexander",
        "Marie",
        "Maximilian",
        "Sophia",
        "Lukas",
        "Maria",
        "Leon",
        "Anna",
        "Tim",
        "Laura",
      ],
    },

    yAxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      title: null,
      reversed: true,
    },

    accessibility: {
      point: {
        descriptionFormatter: function (point) {
          var ix = point.index + 1,
            xName = getPointCategoryName(point, "x"),
            yName = getPointCategoryName(point, "y"),
            val = point.value;
          return ix + ". " + xName + " sales " + yName + ", " + val + ".";
        },
      },
    },

    colorAxis: {
      min: 0,
      minColor: "#FFFFFF",
      maxColor: Highcharts.getOptions().colors[0],
    },

    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 280,
    },

    tooltip: {
      formatter: function () {
        return (
          "<b>" +
          getPointCategoryName(this.point, "x") +
          "</b> sold <br><b>" +
          this.point.value +
          "</b> items on <br><b>" +
          getPointCategoryName(this.point, "y") +
          "</b>"
        );
      },
    },

    series: [
      {
        name: "Sales per employee",
        borderWidth: 1,
        data: [
          [0, 0, 10],
          [0, 1, 19],
          [0, 2, 8],
          [0, 3, 24],
          [0, 4, 67],
          [1, 0, 92],
          [1, 1, 58],
          [1, 2, 78],
          [1, 3, 117],
          [1, 4, 48],
          [2, 0, 35],
          [2, 1, 15],
          [2, 2, 123],
          [2, 3, 64],
          [2, 4, 52],
          [3, 0, 72],
          [3, 1, 132],
          [3, 2, 114],
          [3, 3, 19],
          [3, 4, 16],
          [4, 0, 38],
          [4, 1, 5],
          [4, 2, 8],
          [4, 3, 117],
          [4, 4, 115],
          [5, 0, 88],
          [5, 1, 32],
          [5, 2, 12],
          [5, 3, 6],
          [5, 4, 120],
          [6, 0, 13],
          [6, 1, 44],
          [6, 2, 88],
          [6, 3, 98],
          [6, 4, 96],
          [7, 0, 31],
          [7, 1, 1],
          [7, 2, 82],
          [7, 3, 32],
          [7, 4, 30],
          [8, 0, 85],
          [8, 1, 97],
          [8, 2, 123],
          [8, 3, 64],
          [8, 4, 84],
          [9, 0, 47],
          [9, 1, 114],
          [9, 2, 31],
          [9, 3, 48],
          [9, 4, 91],
        ],
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            yAxis: {
              labels: {
                formatter: function () {
                  return this.value.charAt(0);
                },
              },
            },
          },
        },
      ],
    },
  };
  return (
    <div className="App">
      <h3>Charts using Highcharts</h3>
      <div className="charts lineChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div className="charts">
        <HighchartsReact highcharts={Highcharts} options={options2} />
      </div>
      <div className="charts">
        <HighchartsReact highcharts={Highcharts} options={options3} />
      </div>
      {/* <div className="charts">
        <HighchartsReact highcharts={Highcharts} options={optionsHeatMaps} />
      </div> */}
      <div className="charts">
        <HeatMap />
      </div>
      <div className="charts">
        <HeatMap2 />
      </div>
      {/* <div className="charts">
        <StackedChart />
      </div> */}
      <div className="charts">
        <CalendarHeatMap />
      </div>
      <div className="charts-heatmap">
        <CalHeatMap />
      </div>
    </div>
  );
}

export default Charts;
