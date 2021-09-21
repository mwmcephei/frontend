import React, { ReactElement } from "react"
import { useState, useEffect } from 'react';
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from 'apexcharts'

type LineColumnAreaProps = {
  labels: string[],
  monthlySpendings: number[],
  approved: number,
}




const LineColumnArea = ({ labels, monthlySpendings, approved }: LineColumnAreaProps): ReactElement => {
  const [approvedArray, setApproved] = useState<number[]>([])
  const [accumulatedSpendings, setAccumulatedSpendings] = useState<number[]>([])

  useEffect(() => {
    if (typeof labels != 'undefined' && labels &&
      typeof monthlySpendings != 'undefined' && monthlySpendings &&
      typeof approved != 'undefined' && approved) {
      console.log("data ")
      console.log(labels)
      console.log(monthlySpendings)
      console.log(approved)

      const a = monthlySpendings.map(a => {
        return approved
      })
      setApproved(a)

      const acumulateSpendingsAray = acumulateArray(monthlySpendings)
      console.log("acumulateSpendings")
      console.log(acumulateSpendingsAray)
      setAccumulatedSpendings(acumulateSpendingsAray)
    } else {
      console.log("NO PROPS")
    }
  }, []);


  const acumulateArray = (array: number[]): number[] => {
    let result = []
    for (let i = 0; i < array.length; i++) {
      let acc = 0
      for (let j = 0; j <= i; j++) {
        acc += array[j]
      }
      result.push(acc)
    }
    return result
  }

  const series = [
    {
      name: "Accumulated Monthly Spendings",
      type: "area",
      data: accumulatedSpendings ? accumulatedSpendings : [],
    },
    {
      name: "Monthly Spendings",
      type: "column",
      data: monthlySpendings ? monthlySpendings : [],
    },
    {
      name: "Approved",
      type: "line",
      data: approvedArray ? approvedArray : [],
    },
  ]


  const options: ApexOptions = {
    chart: {
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 2, 4],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    colors: [
      "#556ee6",
      "#f46a6a", // red
      "#34c38f",
    ],
    fill: {
      opacity: [0.25, 1, 1], // [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: labels,
    markers: {
      size: 0,
    },
    legend: {
      offsetY: 11,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Spent €",
      },
      labels: {
        show: true,
        formatter: (value) => { return Math.ceil(value / 1000) + " k" },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return Math.ceil(y / 1000) + " k"
          }
          return y
        },
        title: {
          formatter: (seriesName) => "",
        },
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  }




  let budgetChart = <div></div>
  if (labels && monthlySpendings && approved) {
    budgetChart = <ReactApexChart
      options={options}
      series={series}
      type="line"
      height="350"
    />
  }







  return (
    <div>
      {budgetChart}
    </div>
  )
}

export default LineColumnArea
