import React, { Component } from "react"
import ReactEcharts from "echarts-for-react"



class Doughnut extends Component {
  getOption = () => {
    return {
      color: ["#02a499", "#f8b425"],
      series: [
        {
          name: "Total sales",
          type: "pie",
          radius: ["50%", "100%"],
          avoidLabelOverlap: true,
          label: {
            normal: {
              show: false,
              position: "center",
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 335, name: "Laptop" },
            { value: 310, name: "Tablet" },
          ],
        },
      ],
    }
  }
  render() {
    return (
      <React.Fragment>
        <ReactEcharts
          style={{ height: "50px", width: "30%" }}
          option={this.getOption()}
          notMerge={true}
        />
      </React.Fragment>
    )
  }
}
export default Doughnut
