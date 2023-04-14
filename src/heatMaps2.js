import React from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";

HighchartsHeatmap(Highcharts);

function getPointCategoryName(point, dimension) {
  var series = point.series,
    isY = dimension === "y",
    axis = series[isY ? "yAxis" : "xAxis"];
  return axis.categories[point[isY ? "y" : "x"]];
}
const options = {
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
    // minColor: "#FFFFFF",
    // maxColor: Highcharts.getOptions().colors[0],
    // maxColor: "black",
    stops: [
      //   [0, "rgba(56, 7, 84, 0.4)"],
      //   [0.5, "rgba(56, 7, 84, 0.65)"],
      //   [1, "rgba(69, 9, 104, 1)"],
      [0, "#FFFFFF"],
      [0.5, "rgb(245, 167, 66)"],
      [1, "rgb(245, 126, 66)"],
    ],

    gridLineColor: "#fff",
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
      borderColor: "white",
      name: "Sales per employee",
      borderWidth: 1,
      data: [
        [0, 0, 10], //[x,y,value] from top(10)
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

export default function HeatMap2() {
  return (
    <div>
      <h1>Heat Map</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
