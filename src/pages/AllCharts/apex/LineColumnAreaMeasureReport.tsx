import React, { ReactElement } from "react"
import { useState, useEffect } from 'react';
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from 'apexcharts'
import { Measure } from "../../../types"





const LineColumnArea = ({ measure }): ReactElement => {

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

  const approvedPerMonth = (array: number[], total: number): number[] => {
    const perMonth = total / array.length
    const result = array.map(a => {
      return perMonth
    })
    return result
  }

  const series = [
    {
      name: "Accumulated Monthly Spendings",
      type: "area",
      data: acumulateArray(measure.monthlySpendings ?? []),   //measure.monthlySpendings ? acumulateArray(measure.monthlySpendings) : [],
    },
    {
      name: "Monthly Spendings",
      type: "column",
      data: measure.monthlySpendings ? measure.monthlySpendings : [],
    },
    {
      name: "Approved",
      type: "line",
      data: measure.monthlySpendings ? approvedPerMonth(measure.monthlySpendings, measure.budgetDetail.totalApprovedBudget) : [],
    },
  ]

  const getOptions = (): ApexOptions => {
    return {
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
      labels: ["1", "2", "3", "4", "5", "6"],
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
  }






  const budgetChart = <ReactApexChart
    options={getOptions()}
    series={series}
    height="350"
  />








  return (
    <div>
      {budgetChart}
    </div>
  )
}

export default LineColumnArea
