import React, { ReactElement, useEffect, useState } from "react"
import { Container, Row, Col, Card, CardBody, Table, CardTitle } from "reactstrap"
import { PieChart, Pie } from 'recharts';
import { getMax, getColors } from "../../globalVars"




const TotalSellngProduct = ({ budgetSignal, budgetDetail }): ReactElement => {
  const labels = ["Approved Budget", "Contract Volume", "Spent Budget", "Invoiced Budget", "Forecast"]

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


    <Container >
      <Col xs="12" xm="12" lg="12" xl="12">
        <Card >
          <CardBody>
            <CardTitle className="mb-5 d-flex justify-content-between align-items-center ">
              <div>Budget KPIs</div>
              <div>{getStreetLight(budgetSignal, 13)}</div>
            </CardTitle>

            <div className="table-responsive mt-4">
              <Table className="table align-middle mb-0">
                <tbody>
                  {
                    budgetDetail.map((item, index) => {
                      return <tr  >
                        <td>
                          {labels[index]}
                        </td>
                        <td className="d-flex justify-content-end ">
                          € {(item / 1000000).toFixed(2)} mn
                      </td>
                      </tr>
                    })
                  }


                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Container>

  )
}

export default TotalSellngProduct
