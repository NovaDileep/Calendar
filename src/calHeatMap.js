import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import shutTypeCode from "./shutTypeCode.json";
import { useEffect, useState } from "react";
import CommonCalendar from "./commonCalendar";

export default function CalHeatMap() {
  const [plannedDate, setPlannedDate] = useState();
  const [code, setCode] = useState();
  const [chartData, setChartData] = useState();
  const [calendarMonths, setCalendarMonths] = useState();
  const [calendarYears, setCalendarYears] = useState();

  useEffect(() => {
    setPlannedDate(shutTypeCode.map((data) => data.PLANNED_DATE));
    setCode(shutTypeCode.map((data) => data.ALIGNMENT_TO_SHUT_TYPE_CODE));
  }, []);
  useEffect(() => {
    dateFormat();
  }, [plannedDate]);

  function dateFormat() {
    //for getting [col,row,val]=>[day-1,date/7,date]
    //row=>if current col is 6, next row is prev row + 1
    let seriesData = [];
    let months = [];
    let finalArray = [];
    let j = 0;
    let calMonths = [];
    let years = [];
    let colorArray = [];

    for (var i = 0; i < plannedDate?.length; i++) {
      var year = new Date(plannedDate[i]).getUTCFullYear();
      // const month = new Date(plannedDate?.[i]).getUTCMonth();
      months.push(new Date(plannedDate?.[i]).getUTCMonth());

      const date = new Date(plannedDate?.[i]).getUTCDate();
      const day =
        new Date(plannedDate?.[i]).getDay() - 1 === -1
          ? 6
          : new Date(plannedDate?.[i]).getDay() - 1;
      let row = parseInt(date / 7); // for first date
      if (i !== 0) {
        if (j !== 0) {
          console.log(
            "seriesData[j - 1][2]",
            seriesData[j - 1]?.[2],
            seriesData[j - 2]?.[2]
          );
          row =
            seriesData[j - 1][0] === 6
              ? date === seriesData[j - 1][2]
                ? seriesData[j - 1][1]
                : seriesData[j - 1][1] + 1 //if last date in a row comes twice
              : date - seriesData[j - 1][2] > 6 //to increase row by 1(eg:18-9>6)
              ? seriesData[j - 1][1] + 1
              : seriesData[j - 1][1];
        }

        if (months[i] !== months[i - 1]) {
          // seriesData.push({
          //   x: 4,
          //   y: 2,
          //   // value: date,
          //   color: "hsl(70.91deg 77.19% 77.65%)",
          // });
          for (var color = 0; color < colorArray.length; color++) {
            seriesData.push(colorArray[color]);
          }
          finalArray.push(seriesData);

          calMonths.push(months[i - 1]);
          colorArray = [];
          seriesData = [];
          j = 0;
          row = 0;
          years.push(new Date(plannedDate[i - 1]).getUTCFullYear());
        }

        seriesData.push([day, row, date]);
        // console.log("ser", seriesData[j]);
        j = j + 1;
      } else {
        seriesData.push([day, row, date]);
        j = j + 1;
      }

      // if (code[i] === 1) {
      //   seriesData.push({
      //     x: day,
      //     y: row,
      //     value: date,
      //     color: "hsl(70.91deg 77.19% 77.65%)",
      //   });
      // }
      if (code[i] === 1) {
        colorArray.push({
          x: day,
          y: row,
          value: date,
          color: "hsl(70.91deg 77.19% 77.65%)",
        });
      }
    }
    finalArray.push(seriesData);

    setChartData(finalArray);
    console.log("final final array", finalArray);
    calMonths.push(months[months.length - 1]);
    years.push(year);
    setCalendarYears(years);
    setCalendarMonths(calMonths);
    // console.log("months", calendarMonths);
  }

  return (
    <>
      {plannedDate &&
        chartData?.length > 0 &&
        chartData?.map((data, i) => {
          // console.log({ chartData });
          // console.log({ i });
          return (
            <div className="charts">
              <CommonCalendar
                key={i}
                data={data}
                month={calendarMonths[i]}
                year={calendarYears[i]}
              />
            </div>
          );
        })}
    </>
  );
}
