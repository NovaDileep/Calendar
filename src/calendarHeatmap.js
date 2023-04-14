import React from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "heatmap",
  },

  title: {
    text: "Calendar",
  },

  xAxis: {
    type: "category",
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false,
    },
  },

  yAxis: {
    categories: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."],
    reversed: true,
    gridLineWidth: 0,
    title: null,
  },

  colorAxis: {
    min: 0,
    max: 10,
    stops: [
      [0, "#FFFFFF"],
      [0.1, "#c2c6ce"],
      [0.2, "#608ae0"],
      [0.3, "#1a59db"],
      [0.4, "#db261a"],
    ],
  },

  legend: {
    enabled: false,
  },

  plotOptions: {
    series: {
      borderWidth: 1,
      borderColor: "#000000",
    },
  },

  tooltip: {
    useHTML: true,
    formatter: function () {
      var date = Highcharts.dateFormat("%a %e. %B %Y", this.point.date);
      if (this.point.description != undefined) {
        date += "<br><div>" + this.point.description + "</div>";
      }
      return date;
    },
  },

  series: [
    {
      // name: "January",
      // keys: ["x", "y", "value", "date", "description"],
      data: [
        [0, 1, 4, Date.UTC(2019, 0, 1), "New Years Day"],
        [0, 2, 1, Date.UTC(2019, 0, 2)],
        [0, 3, 1, Date.UTC(2019, 0, 3)],
        [0, 4, 1, Date.UTC(2019, 0, 4)],
        [0, 5, 2, Date.UTC(2019, 0, 5)],
        [0, 6, 3, Date.UTC(2019, 0, 6)],
        [1, 0, 1, Date.UTC(2019, 0, 7)],
        [1, 1, 1, Date.UTC(2019, 0, 8)],
        [1, 2, 1, Date.UTC(2019, 0, 9)],
        [1, 3, 1, Date.UTC(2019, 0, 10)],
        [1, 4, 1, Date.UTC(2019, 0, 11)],
        [1, 5, 2, Date.UTC(2019, 0, 12)],
        [1, 6, 3, Date.UTC(2019, 0, 13)],
        [2, 0, 1, Date.UTC(2019, 0, 14)],
        [2, 1, 1, Date.UTC(2019, 0, 15)],
        [2, 2, 1, Date.UTC(2019, 0, 16)],
        [2, 3, 1, Date.UTC(2019, 0, 17)],
        [2, 4, 1, Date.UTC(2019, 0, 18)],
        [2, 5, 2, Date.UTC(2019, 0, 19)],
        [2, 6, 3, Date.UTC(2019, 0, 20)],
        [3, 0, 1, Date.UTC(2019, 0, 21)],
        [3, 1, 1, Date.UTC(2019, 0, 22)],
        [3, 2, 1, Date.UTC(2019, 0, 23)],
        [3, 3, 1, Date.UTC(2019, 0, 24)],
        [3, 4, 1, Date.UTC(2019, 0, 25)],
        [3, 5, 2, Date.UTC(2019, 0, 26)],
        [3, 6, 3, Date.UTC(2019, 0, 27)],
        [4, 0, 1, Date.UTC(2019, 0, 28)],
        [4, 1, 1, Date.UTC(2019, 0, 29)],
        [4, 2, 1, Date.UTC(2019, 0, 30)],
        [4, 3, 1, Date.UTC(2019, 0, 31)],
      ],
    },
    {
      // name: "February",
      // keys: ["x", "y", "value", "date", "description"],
      data: [
        [6, 4, 1, Date.UTC(2019, 1, 1)],
        [6, 5, 2, Date.UTC(2019, 1, 2)],
        [6, 6, 3, Date.UTC(2019, 1, 3)],
        [7, 0, 1, Date.UTC(2019, 1, 4)],
        [7, 1, 1, Date.UTC(2019, 1, 5)],
        [7, 2, 1, Date.UTC(2019, 1, 6)],
        [7, 3, 1, Date.UTC(2019, 1, 7)],
        [7, 4, 1, Date.UTC(2019, 1, 8)],
        [7, 5, 2, Date.UTC(2019, 1, 9)],
        [7, 6, 3, Date.UTC(2019, 1, 10)],
        [8, 0, 1, Date.UTC(2019, 1, 11)],
        [8, 1, 1, Date.UTC(2019, 1, 12)],
        [8, 2, 1, Date.UTC(2019, 1, 13)],
        [8, 3, 4, Date.UTC(2019, 1, 14), "Valentines Day"],
        [8, 4, 1, Date.UTC(2019, 1, 15)],
        [8, 5, 2, Date.UTC(2019, 1, 16)],
        [8, 6, 3, Date.UTC(2019, 1, 17)],
        [9, 0, 1, Date.UTC(2019, 1, 18)],
        [9, 1, 1, Date.UTC(2019, 1, 19)],
        [9, 2, 1, Date.UTC(2019, 1, 20)],
        [9, 3, 1, Date.UTC(2019, 1, 21)],
        [9, 4, 1, Date.UTC(2019, 1, 22)],
        [9, 5, 2, Date.UTC(2019, 1, 23)],
        [9, 6, 3, Date.UTC(2019, 1, 24)],
        [10, 0, 1, Date.UTC(2019, 1, 25)],
        [10, 1, 1, Date.UTC(2019, 1, 26)],
        [10, 2, 1, Date.UTC(2019, 1, 27)],
        [10, 3, 1, Date.UTC(2019, 1, 28)],
      ],
    },
  ],
};
export default function CalendarHeatMap() {
  return (
    <div>
      <h3>Calendar heatmap</h3>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
