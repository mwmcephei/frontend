import React, { ReactElement, useEffect, useState } from "react"
import { Container, Row, Col, Card, CardBody, Table, CardTitle } from "reactstrap"
import { PieChart, Pie, Cell } from 'recharts';
import { getMax, getColors } from "../../globalVars"
import { StatusProps } from "../../types"



const TotalSellngProduct = ({ artefacts, budget, risks }: StatusProps): ReactElement => {


  const getStreetLight = (color: number, size: number): ReactElement => {
    return <div className="d-flex">
      <PieChart width={30} height={30} >
        <Pie data={[{ name: 'Geeksforgeeks', students: 400 },]}
          dataKey="students" outerRadius={size}
          fill={getColors(color === 0 ? color : -2)[1]}
          stroke="none"
          isAnimationActive={false} />
      </PieChart>
      <PieChart width={30} height={30} >
        <Pie data={[{ name: 'Geeksforgeeks', students: 400 },]}
          dataKey="students" outerRadius={size}
          fill={getColors(color === 1 ? color : -2)[1]}
          stroke="none"
          isAnimationActive={false} />
      </PieChart>
      <PieChart width={30} height={30} >
        <Pie data={[{ name: 'Geeksforgeeks', students: 400 },]}
          dataKey="students" outerRadius={size}
          fill={getColors(color === 2 ? color : -2)[1]}
          stroke="none"
          isAnimationActive={false} />
      </PieChart>
    </div>
  }


  return (



    <Col xs="12" xm="6" lg="6" xl="6">
      <Card style={{ height: "330px" }}>
        <CardBody>
          <CardTitle className="mb-5 d-flex justify-content-between align-items-center ">
            <div>Status</div>
            <div>{getStreetLight(getMax([artefacts, budget, risks]), 13)}</div>
          </CardTitle>





          <div className="table-responsive mt-4">
            <Table className="table align-middle mb-0">
              <tbody>
                <tr  >
                  <td>
                    Artefacts
                                    </td>
                  <td className="d-flex justify-content-end p-2">
                    {getStreetLight(artefacts, 10)}
                  </td>
                </tr>
                <tr>
                  <td>
                    Budget
                                     </td>
                  <td className="d-flex justify-content-end p-2">
                    {getStreetLight(budget, 10)}
                  </td>
                </tr>
                <tr>
                  <td>
                    Risks & Issues
                      </td>
                  <td className="d-flex justify-content-end p-2">
                    {getStreetLight(risks, 10)}
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

export default TotalSellngProduct
