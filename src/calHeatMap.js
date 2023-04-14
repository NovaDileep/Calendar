//working for one month
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
  // const [calendarArray, setCalendarArray] = useState([]);

  useEffect(() => {
    setPlannedDate(shutTypeCode.map((data) => data.PLANNED_DATE));
    setCode(shutTypeCode.map((data) => data.ALIGNMENT_TO_SHUT_TYPE_CODE));
  }, []);
  useEffect(() => {
    dateFormat();
  }, [plannedDate]);

  // useEffect(() => {
  //   console.log("chartData from useEffect", chartData);
  // }, [chartData]);

  let calendarArray = [];

  function dateFormat() {
    //for getting [col,row,val]=>[day-1,date/7,date]
    //row=>if current col is 6, next row is prev row + 1
    let seriesData = [];
    let months = [];
    let finalArray = [];
    let j = 0;

    for (var i = 0; i < plannedDate?.length; i++) {
      const year = new Date(plannedDate[i]).getUTCFullYear();
      // const month = new Date(plannedDate?.[i]).getUTCMonth();
      months.push(new Date(plannedDate?.[i]).getUTCMonth() + 1);

      const date = new Date(plannedDate?.[i]).getUTCDate();
      const day =
        new Date(plannedDate?.[i]).getDay() - 1 === -1
          ? 6
          : new Date(plannedDate?.[i]).getDay() - 1;
      let row = parseInt(date / 7); // for first date
      if (i !== 0) {
        if (j !== 0) {
          row =
            seriesData[j - 1][0] === 6
              ? seriesData[j - 1][1] + 1
              : seriesData[j - 1][1];
        }
        // console.log("first month", months[i] !== months[i - 1]);
        if (months[i] !== months[i - 1]) {
          finalArray.push(seriesData);
          // console.log("final array", finalArray);
          seriesData = [];
          j = 0;
        }
        seriesData.push([day, row, date]);
        j = j + 1;
      } else {
        seriesData.push([day, row, date]);
        j = j + 1;
      }

      // console.log("array data", seriesData);
    }
    finalArray.push(seriesData);
    // setChartData(seriesData);
    setChartData(finalArray);
    console.log("final final array", finalArray);
    // finalArray.forEach((data, i) => {
    //   calendarArray.push(<CommonCalendar data={finalArray[i]} />);
    // });
  }
  console.log("chart data", chartData);
  // const a = [];
  // for (var index = 0; index < chartData?.length; index++) {
  //   calendarArray?.push(<CommonCalendar data={chartData[index]} />);
  // }
  // console.log("cal array", ca);
  // return <HighchartsReact highcharts={Highcharts} options={options} />;

  return (
    <>
      {plannedDate &&
        chartData?.length > 0 &&
        chartData?.map((data, i) => {
          console.log({ chartData });
          console.log({ i });
          return <CommonCalendar key={i} data={data} />;
        })}
    </>
  );
}
