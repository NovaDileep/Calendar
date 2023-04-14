import React from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";

HighchartsHeatmap(Highcharts);

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const options = {
  chart: {
    type: "heatmap",
    plotBorderWidth: 1,
  },
  title: {
    text: "Revenue per hour per weekday heatmap",
  },
  xAxis: {
    min: 0,
    max: 23,
    tickInterval: 1,
    labels: {
      step: 1,
      style: {
        fontSize: "14px",
        fontFamily: "Open Sans",
      },
    },
    gridLineWidth: 0,
    lineWidth: 0.5,
    lineColor: "rgba(0,0,0,0.75)",
    tickWidth: 0.5,
    tickLength: 3,
    tickColor: "rgba(0,0,0,0.75)",
    title: {
      text: "Hour",
    },
  },
  yAxis: {
    categories: WEEK_DAYS,
    title: "Weekdays",
    labels: {
      style: {
        fontSize: "14px",
        fontFamily: "Open Sans",
      },
    },
  },
  tooltip: {
    formatter: function () {
      return (
        "<b>Hour Is: </b>" +
        this.point.x +
        "<br /><b>Day Is:</b> " +
        this.point.y +
        "<br />" +
        "<b>Revenue Is:</b> $" +
        this.point.value
      );
    },
  },
  colorAxis: {
    stops: [
      [0, "rgba(56, 7, 84, 0.4)"],
      [0.5, "rgba(56, 7, 84, 0.65)"],
      [1, "rgba(69, 9, 104, 1)"],
    ],
  },
  series: [
    {
      name: "Revenue",
      borderWidth: 0.5,
      borderColor: "white",
      dataLabels: {
        enabled: true,
        color: "#000000",
      },
      data: [
        [1, 2, 100],
        [4, 3, 200],
        [7, 4, 300],
        [2, 5, 400],
        [5, 6, 500],
        [12, 1, 600],
        [10, 0, 700],
      ],
    },
  ],
};

export default function HeatMap() {
  return (
    <div>
      <h1>Heat Map</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
