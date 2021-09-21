import React, { ReactElement } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"
import { standardGrey } from "globalVars"


type dashboardCircleDiagram_PropType = {
  title: String,
  green: number,
  yellow: number,
  red: number,
  labels: string[],
  isKPIChart: boolean
}



const SalesAnalytics = (props: dashboardCircleDiagram_PropType): ReactElement => {
  const series: number[] = [props.yellow, props.green, props.red]
  let toolTipLabels = props.labels
  if (props.labels[0] === "Status ") {
    toolTipLabels = ["", "", ""]
  }
  const options = {
    labels: toolTipLabels,
    colors: (props.isKPIChart ? [standardGrey, "#34c38f", "#f46a6a"] : ["#ffdc5c", "#34c38f", "#f46a6a"]),

    legend: { show: !1 },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  }

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <h4 className="card-title mb-4">{props.title}</h4>

          <div>
            <div id="donut-chart">
              <ReactApexChart
                options={options}
                series={series}
                type="donut"
                height={260}
                className="apex-charts"
              />
            </div>
          </div>

          <div className="text-center text-muted">
            <Row>
              <Col xs="4">
                <div className="mt-4">
                  <span className="mb-2 ">
                    <span>{props.labels[0]}</span>
                    <i className="mdi mdi-circle text-danger me-1 " />
                  </span>
                  <h5 className="mt-2">{props.red}</h5>
                </div>
              </Col>
              <Col xs="4">
                <div className="mt-4">
                  <span className="mb-2 text-truncate">
                    <span>{props.labels[1]}</span>
                    {props.isKPIChart ?
                      <i className="mdi mdi-circle  me-1" style={{ color: standardGrey }} />
                      :
                      <i className="mdi mdi-circle  me-1" style={{ color: "#ffdc5c" }} />
                    }

                  </span>
                  <h5 className="mt-2">{props.yellow}</h5>
                </div>
              </Col>
              <Col xs="4">
                <div className="mt-4">
                  <span className="mb-2 text-truncate">
                    <span>{props.labels[2]}</span>
                    <i className="mdi mdi-circle text-success me-1 " />
                  </span>
                  <h5 className="mt-2">{props.green}</h5>
                </div>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default SalesAnalytics
