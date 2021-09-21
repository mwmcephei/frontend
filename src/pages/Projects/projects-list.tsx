import React, { useEffect, useState } from "react"
import { withRouter, useHistory } from "react-router-dom"
import { map } from "lodash"
import {
  Badge,
  Col,
  Row,
  Table,
} from "reactstrap"
import { getMax, getColors, focusAreaColors } from "../../globalVars"
import { PieChart, Pie, Cell } from 'recharts';
import ProgressChart from "./ProgressChart"
import { Measure } from "../../types"



const ProjectsList = (props: { measures: Measure[] }) => {
  const history = useHistory()

  const getDoughnutData = (bigger, smaller) => {
    return [
      { name: 'a', value: bigger - smaller },
      { name: 'b', value: smaller },
    ];
  }

  const getShortenedName = (name: string, maxChars: number) => {
    if (name.length > maxChars) {
      return name.substring(0, maxChars) + "..."
    } else {
      return name
    }
  }

  function handleMeasureClick(measureID) {
    history.push("/measureReports/" + measureID)
  }



  return (
    <React.Fragment>
      <Row>
        <Col lg="12">
          <div className="">
            <div className="table-responsive">
              <Table className="project-list-table  align-middle table-borderless" >
                <thead>
                  <tr>
                    <th scope="col" >#</th>
                    <th scope="col" style={{ width: "100px" }}>Focus Area</th>
                    <th scope="col" >Measure Name</th>
                    <th scope="col" >Measure Team</th>
                    <th scope="col">Measure Progress</th>
                    <th scope="col">KPI Name</th>
                    <th scope="col">KPI Progress</th>
                    <th scope="col">Budget</th>
                  </tr>
                </thead>


                <tbody>
                  {map(props.measures, (measure, index) => (
                    <tr key={index} onClick={() => handleMeasureClick(measure._id)}>

                      <td>
                        {measure.id}
                      </td>

                      <td>
                        <div className="d-flex justify-content-center text-center align-items-center
                          rounded-circle 
                          text-truncate"
                          style={{ height: '40px', width: '40px', background: focusAreaColors[measure.focusArea] }} >
                          <b>{measure.focusArea}</b>
                        </div>
                      </td>

                      <td style={{ wordWrap: "break-word", maxWidth: "300px", minWidth: "200px" }}>
                        <div>
                          <b>{measure.title}</b>
                        </div>
                        <div className="d-none d-xl-block">
                          {getShortenedName(measure.name, 70)}
                        </div>
                        <div className="d-xl-none">
                          {getShortenedName(measure.name, 50)}
                        </div>
                      </td>




                      <td className="p-2 text-nowrap " style={{}}>
                        < div className="d-flex flex-row align-items-center ">
                          <div className="p-0 m-0 d-flex flex-column">
                            <div>
                              <i className="bx bx-user " style={{ fontSize: "15px", marginRight: "2px" }}></i> ML: {measure.measureLead}
                            </div>
                            <div>
                              <i className="bx bx-user " style={{ fontSize: "15px", marginRight: "2px" }}></i> MS: {measure.measureSponsor}
                            </div>
                          </div>
                          <div className="d-none d-xl-block  d-flex flex-column m-2">
                            <div className="d-flex align-items-center">
                              <i className="bx bx-user " style={{ fontSize: "15px", marginRight: "2px" }}></i><span> LM: {measure.lineOrgSponsor}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <i className="bx bx-user " style={{ fontSize: "15px", marginRight: "2px" }}></i><span> SM: {measure.solutionManager}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className=" pl-4" style={{ wordWrap: "break-word", maxWidth: "200px", minWidth: "150px" }}>
                        <Row className="d-flex align-items-center">
                          <Col className="d-flex   " xs="6" xm="6" lg="6" xl="6">
                            Status:
                            </Col>
                          <Col>
                            <PieChart width={30} height={30} >
                              <Pie data={[{ name: 'Geeksforgeeks', students: 400 },]}
                                dataKey="students" outerRadius={10}
                                fill={getColors(getMax([measure.risk, measure.artefact, measure.budget]))[1]}
                                stroke="none"
                                isAnimationActive={false} />
                            </PieChart>
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center ">
                          <Col className="d-flex  " xs="6" xm="6" lg="6" xl="6">

                            Progress:
                            </Col>
                          <Col>
                            <ProgressChart measure={measure} colors={getColors(getMax([measure.risk, measure.artefact, measure.budget]))} />
                          </Col>
                        </Row>
                      </td>

                      <td style={{ wordWrap: "break-word", maxWidth: "300px", minWidth: "200px" }}>
                        {getShortenedName(measure.kpiName, 50)}
                      </td>

                      <td>
                        <Badge className="p-2" style={{ background: "#97d48a", fontSize: "12px", width: "80px" }}>
                          <b>{measure.actuals} / {measure.target}</b>
                        </Badge>
                      </td>

                      <td style={{ wordWrap: "break-word", maxWidth: "250px", minWidth: "250px" }}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="">
                            <div>
                              Approved:
                              </div>
                            <div>
                              Spent:
                              </div>
                          </div>

                          <div className="m-1">
                            <div>
                              {measure.approved}k €
                              </div>
                            <div>
                              {measure.spent}k €
                              </div>
                          </div>

                          <PieChart width={50} height={50} style={{ transform: "rotate(270deg)" }}>
                            <Pie data={getDoughnutData(measure.approved, measure.spent)}
                              dataKey="value" outerRadius={20} innerRadius={10}
                              isAnimationActive={false}
                            >
                              {getDoughnutData(measure.approved, measure.spent).map((
                                // @ts-ignore
                                entry, index) => (
                                // @ts-ignore
                                <Cell key={`cell-${index}`} fill={getColors(-1)[index % 2]} />
                              ))}
                            </Pie>
                          </PieChart>
                        </div>

                      </td>

                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment >
  )
}

export default withRouter(ProjectsList)




