import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import shutTypeCode from "./shutTypeCode.json";
import { useEffect, useState } from "react";

export default function CommonCalendar({ data }) {
  const categories = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const chartOptions = {
    buttons: [
      {
        type: "month",
        count: 1,
        text: "1m",
        title: "View 1 month",
      },
    ],
    chart: {
      type: "heatmap",
      marginTop: 40,
      marginBottom: 40,
      plotBorderWidth: 1,
      height: 300,
      width: 400,
    },

    title: {
      text: "2023 July",
    },

    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      tickWidth: 1,
      tickLength: 7,
      tickColor: "red",
    },

    yAxis: {
      visible: false,
      reversed: true,
    },

    colorAxis: {
      min: 0, // minColor: "#edece8", // maxColor: "#edece8", // maxColor: Highcharts.getOptions().colors[0], // maxColor: "black", // stops: [ //   //   [0, "rgba(56, 7, 84, 0.4)"], //   //   [0.5, "rgba(56, 7, 84, 0.65)"], //   //   [1, "rgba(69, 9, 104, 1)"], //   [0, "#FFFFFF"], //   [0.5, "rgb(245, 167, 66)"], //   [1, "rgb(245, 126, 66)"], // ],
      stops: [
        [0, "#edece8"],
        // [0.09, "#edece8"],
        // [0.1, "hsl(70.91deg 77.19% 77.65%)"],
        // [0.11, "#edece8"],
        [1, "#edece8"],
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
      enabled: false,
    },

    tooltip: {
      formatter: function () {
        return (
          "Planned Date:" + this.point.value + "/07" + "/2023" // getPointCategoryName(this.point, "x") // "</b> items on <br><b>" + // getPointCategoryName(this.point, "y") + // "</b>"
        );
      },
    },

    series: [
      {
        tooltip: {
          backgroundColor: "#FCFFC5",
        },
        borderColor: "white",
        name: "Calendar",
        borderWidth: 1,
        data: data,
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],
  };
  console.log({ data });
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
}
