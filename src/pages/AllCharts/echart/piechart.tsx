import React, { Component } from "react"
import ReactEcharts from "echarts-for-react"

class Pie extends Component {
  getOption = () => {
    return {
      color: ["#02a499"],
      series: [],
    }
  }
  render() {
    return (
      <React.Fragment>
        <ReactEcharts style={{ height: "50px", width: '30%' }} option={this.getOption()} />
      </React.Fragment>
    )
  }
}
export default Pie
