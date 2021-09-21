// @ts-ignore
import React, { useEffect, useState } from "react"
// @ts-ignore
import { Link, withRouter, useHistory } from "react-router-dom"
import { map } from "lodash"
import {
  Badge,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap"
// @ts-ignore
import { getMax, getColors, focusAreaColors } from "../../globalVars"
import { PieChart, Pie, Cell } from 'recharts';
import ProgressChart from "./ProgressChart"
import { Measure } from "../../types"



const ProjectsList = (props) => {
  const history = useHistory()

  const getDoughnutData = (bigger, smaller) => {
    return [
      { name: 'a', value: bigger - smaller },
      { name: 'b', value: smaller },
    ];
  }

  const getShortenedName = (name, maxChars) => {
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

      <div className="table-responsive">
        <Table className="project-list-table  align-middle " >
          <thead>
            <tr>
              <th scope="col" >#</th>
              <th scope="col" style={{ width: "100px" }}>Focus Area</th>
              <th scope="col" >Measure Name</th>
              <th scope="col">Budget</th>
              <th scope="col" style={{ minWidth: "200px" }}></th>
            </tr>
          </thead>


          <tbody className="">
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
                    {getShortenedName(measure.name, 40)}
                  </div>
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
                        {measure.approved} k€
                              </div>
                      <div>
                        {measure.spent} k€
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
                          <Cell key={`cell-${index}`} fill={getColors(measure.budget)[index % 2]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>



                </td>

                <td className="d-flex  align-items-center">
                  <div className="m-1 d-flex flex-column justify-content-center align-items-start">
                    <div>
                      Contract:
                              </div>
                    <div>
                      Invoiced:
                              </div>
                  </div>

                  <div className="mx-1 my-3 d-flex flex-column align-items-start ">
                    <div>
                      <span>{(measure.budgetDetail.contractBudget / 1000).toFixed(2)}k €</span>
                    </div>
                    <div>
                      <span>{(measure.budgetDetail.invoicedBudget / 1000).toFixed(2)}k €</span>
                    </div>
                  </div>

                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </React.Fragment >
  )
}

export default withRouter(ProjectsList)




