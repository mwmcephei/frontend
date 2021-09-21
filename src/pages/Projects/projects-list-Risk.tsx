import React, { ReactElement, useEffect, useState } from "react"
import { Link, withRouter, useHistory } from "react-router-dom"
import { map } from "lodash"
import {
  Badge,
  Col,
  Row,
  Table,
} from "reactstrap"
import { Risk } from "../../types"





const ProjectsList = ({ risks }): ReactElement => {

  const gotRisks = (input: Risk[]): boolean => {
    let result = true
    input.map(risk => {
      if (risk.description === "" &&
        risk.criticality === "" &&
        risk.migration === "" &&
        risk.resolutionDate === ""
      ) {
        result = false
      }
    })
    return result
  }


  return (
    <React.Fragment>
      <Row>
        <Col lg="12">
          <div className="">
            {gotRisks(risks) ?

              <div className="table-responsive">
                <Table className="project-list-table  align-middle table-borderless" >
                  <thead>
                    <tr>
                      <th scope="col" >Risks</th>
                      <th scope="col" >Description</th>
                      <th scope="col" >Criticality</th>
                      <th scope="col" >Mitigation Activities</th>
                      <th scope="col" >Resolution Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {map(risks, (item, index) => (
                      <tr key={index} >
                        <td>
                          {item.risk}
                        </td>
                        <td>
                          {item.description}
                        </td>
                        <td>
                          {item.criticality}
                        </td>
                        <td>
                          {item.migration}
                        </td>
                        <td>
                          {item.resolutionDate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              :
              <div style={{ fontSize: "20px", color: "#dbdbdb" }} className="d-flex justify-content-center mb-4">
                <b>No Risks</b>
              </div>
            }

          </div>
        </Col>
      </Row>
    </React.Fragment >
  )
}

export default withRouter(ProjectsList)




