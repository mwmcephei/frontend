import React, { ReactElement } from "react"
import PropTypes from "prop-types"
import { Card, CardBody, CardTitle, Col, Container, Table } from "reactstrap"
import { Link } from "react-router-dom"
import { map } from "lodash"
import { Team, DividedName } from "../../../types"



const TeamMembers = (props: Team): ReactElement => {


  const divideName = (name: string): DividedName => {
    const divided = name.split(" ")
    const firstNameLength = divided[0].length
    return {
      firstName: divided[0],
      lastName: name.substring(firstNameLength + 1, name.length)
    }
  }



  return (

    <Col xs="12" xm="6" lg="6" xl="6" >
      <Card style={{ height: "330px" }}>
        <CardBody>
          <CardTitle className="mb-4">Team</CardTitle>

          <div className="table-responsive">
            <Table className="table align-middle table-nowrap">
              <tbody>

                <tr >
                  <td style={{ width: "50px" }}>
                    <i className="bx bx-user " style={{ fontSize: "15px", marginRight: "2px" }}></i>
                  </td>
                  <td>
                    <h5 className="font-size-14 m-0">
                      <div>
                        {divideName(props.lead).firstName}
                      </div>
                      <div>
                        {divideName(props.lead).lastName}
                      </div>
                    </h5>
                  </td>
                  <td>
                    <div>
                      <Link
                        to="#"
                        className="badge  bg-soft  font-size-11 me-1"
                        style={{ background: "#435fe3", color: "white" }}
                      >
                        Measure Lead
                        </Link>
                    </div>
                  </td>
                </tr>

                <tr >
                  <td style={{ width: "50px" }}>
                    <i className="bx bx-user " style={{ fontSize: "15px", marginRight: "2px" }}></i>
                  </td>
                  <td>
                    <h5 className="font-size-14 m-0">
                      <div>
                        {divideName(props.measureSponsor).firstName}
                      </div>
                      <div>
                        {divideName(props.measureSponsor).lastName}
                      </div>
                    </h5>
                  </td>
                  <td>
                    <div>
                      <Link
                        to="#"
                        className="badge  bg-soft  font-size-11 me-1"
                        style={{ background: "#435fe3", color: "white" }}
                      >
                        Measure Sponsor
                        </Link>
                    </div>
                  </td>
                </tr>

                <tr >
                  <td style={{ width: "50px" }}>
                    <i className="bx bx-user " style={{ fontSize: "15px", marginRight: "2px" }}></i>
                  </td>
                  <td>
                    <h5 className="font-size-14 m-0">
                      <div>
                        {divideName(props.lineOrgSponsor).firstName}
                      </div>
                      <div>
                        {divideName(props.lineOrgSponsor).lastName}
                      </div>
                    </h5>
                  </td>
                  <td>
                    <div>
                      <Link
                        to="#"
                        className="badge  bg-soft  font-size-11 me-1"
                        style={{ background: "#435fe3", color: "white" }}
                      >
                        Line Organization Sponsor
                        </Link>
                    </div>
                  </td>
                </tr>

                <tr >
                  <td style={{ width: "50px" }}>
                    <i className="bx bx-user " style={{ fontSize: "15px", marginRight: "2px" }}></i>
                  </td>
                  <td>
                    <h5 className="font-size-14 m-0">
                      <div>
                        {divideName(props.solutionManager).firstName}
                      </div>
                      <div>
                        {divideName(props.solutionManager).lastName}
                      </div>
                    </h5>
                  </td>
                  <td>
                    <div>
                      <Link
                        to="#"
                        className="badge  bg-soft  font-size-11 me-1"
                        style={{ background: "#435fe3", color: "white" }}
                      >
                        Solution Manager
                        </Link>
                    </div>
                  </td>
                </tr>

              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>

  )
}


export default TeamMembers
