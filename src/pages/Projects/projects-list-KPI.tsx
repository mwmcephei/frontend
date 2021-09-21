import React, { ReactElement, useEffect, useState } from "react"
import { Link, withRouter, useHistory } from "react-router-dom"
import { map } from "lodash"
import {
  Badge,
  Col,
  Row,
  Table,
} from "reactstrap"
import { apiUrl } from "globalVars"







const ProjectsListKPI = ({ kpiData, kpiName }): ReactElement => {
  const [plans, setPlans] = useState<string[]>()

  useEffect(() => {
    fetch(apiUrl + "/overview")
      .then(response => response.json())
      .then(response => {
        setPlans(response.kpiPlans)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);


  const modifyDateString = (s) => {
    const split = s.split(".")
    return split[0] + "-" + split[1]
  }



  return (
    <div >
      <Row className="mb-3">
        <Col className={window.innerWidth < 700 ? "mb-3 " + "text-center" : "mb-3 "} xs="12" xm="6" lg="9" xl="9">
          <div>
            {kpiName}
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs="12" xm="6" lg="3" xl="3">
          <Badge className="p-2" style={{ background: "#97d48a", fontSize: "12px", width: "80px" }}>
            <b>{kpiData.actuals} / {kpiData.plan2}</b>
          </Badge>

        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <div className="">
            <div className="table-responsive">
              <Table className="project-list-table  align-middle table-borderless " >
                <thead >
                  <tr className="">
                    <th scope="col" style={{ maxWidth: "65px" }}>Baseline</th>
                    <th scope="col" style={{ maxWidth: "60px" }}>Actuals</th>
                    <th scope="col" className="" style={{ minWidth: "70px", maxWidth: "70px" }}>
                      <div>Plan</div>
                      <div>{plans && modifyDateString(plans[0])}</div>
                    </th>
                    <th scope="col" className="" style={{ minWidth: "70px", maxWidth: "70px" }}>
                      <div>Plan</div>
                      <div>{plans && modifyDateString(plans[1])}</div>
                    </th>
                    <th scope="col" className="" style={{ minWidth: "70px", maxWidth: "70px" }}>
                      <div>Plan</div>
                      <div>{plans && modifyDateString(plans[2])}</div>
                    </th>
                    <th scope="col" style={{ maxWidth: "60px" }}>Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr  >
                    <td>
                      {kpiData.baseline}
                    </td>
                    <td>
                      {kpiData.actuals}
                    </td>
                    <td>
                      {kpiData.plan1}
                    </td>
                    <td>
                      {kpiData.plan2}
                    </td>
                    <td>
                      {kpiData.plan3}
                    </td>
                    <td>
                      {kpiData.target}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </div >
  )
}

export default withRouter(ProjectsListKPI)




