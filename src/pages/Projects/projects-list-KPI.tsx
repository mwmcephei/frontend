import React, { ReactElement, useEffect, useState } from "react"
import { Link, withRouter, useHistory } from "react-router-dom"
import { map } from "lodash"
import {
  Badge,
  Col,
  Row,
  Table,
} from "reactstrap"







const ProjectsListKPI = ({ kpiData }): ReactElement => {

  return (
    <React.Fragment>
      <Row>
        <Col lg="12">
          <div className="">
            <div className="table-responsive">
              <Table className="project-list-table  align-middle table-borderless" >
                <thead>
                  <tr>
                    <th scope="col" >Target</th>
                    <th scope="col" >Actuals</th>
                    <th scope="col" >Baseline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr  >
                    <td>
                      {kpiData.target}
                    </td>
                    <td>
                      {kpiData.actuals}
                    </td>
                    <td>
                      {kpiData.baseline}
                    </td>
                  </tr>
                </tbody>

                <thead>
                  <tr>
                    <th scope="col" >Plan</th>
                    <th scope="col" >Plan</th>
                    <th scope="col" >Plan</th>
                    <th scope="col" >Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr  >
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
                      {kpiData.plan4}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment >
  )
}

export default withRouter(ProjectsListKPI)




