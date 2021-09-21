import React, { Component } from "react"
import ReactEcharts from "echarts-for-react"

class Pie extends Component {
  getOption = () => {
    return {
      color: ["#02a499"],
      series: [
        {
          name: "",
          type: "pie",
          radius: "100%",
          //     center: ["50%", "30%"],
          data: [{ value: 335 }],
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
        />
      </React.Fragment>
    )
  }
}
export default Pie
