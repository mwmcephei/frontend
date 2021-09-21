import React, { ReactElement, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { map, get } from "lodash"
import { Card, CardBody, CardTitle, Col, Container, Media, Row } from "reactstrap"
import { getMax, getColors, focusAreaColors } from "../../../globalVars"
import { PieChart, Pie, Cell } from 'recharts';
import { Measure } from "../../../types"






const ProjectDetail = ({ currentMeasure }): ReactElement => {



  const getDoughnutData = (bigger, smaller) => {
    return [
      { name: 'a', value: bigger - smaller },
      { name: 'b', value: smaller },
    ];
  }


  return (

    <Card>
      <CardBody className="px-4">

        <Row>
          <div className="d-flex align-items-center "  >
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-center text-center align-items-center
                          rounded-circle 
                           text-truncate"
                style={{ minHeight: '40px', minWidth: '40px', maxHeight: '40px', maxWidth: '40px', background: focusAreaColors[currentMeasure.focusArea] }} >
                <b>{currentMeasure.focusArea}</b>
              </div>

              <div className="d-flex flex-column align-items-start justify-content-start m-2">
                <div className="font-size-15 "><b>{currentMeasure.title}</b></div>
                <div className="font-size-15 ">{currentMeasure.name}</div>
              </div>
            </div>
          </div>
        </Row>



        <Row>
          <h6 className=" mt-4"><b>Description:</b></h6>
          <p className=" ">
            {currentMeasure.description}
          </p>

        </Row>




        <Row className="task-dates">
          <Col className="d-flex justify-content-start" >

            <div className="mt-4 d-flex flex-row align-items-center ">
              <i className="bx bx-calendar me-2 pb-1 text-primary" />
              <div className="mt-4 d-flex flex-column align-items-start">
                <h5 className="font-size-14">
                  Start Date
                 </h5>
                <p className="mb-0">{currentMeasure.time.split(" - ")[0]}</p>
              </div>
            </div>

            <div className="mt-4 d-flex flex-row align-items-center mx-3">
              <i className="bx bx-calendar me-2 pb-1 text-primary" />
              <div className="mt-4 d-flex flex-column align-items-start">
                <h5 className="font-size-14">
                  Due Date
                 </h5>
                <p className=" mb-0">{currentMeasure.time.split(" - ")[1]}</p>
              </div>
            </div>



          </Col>
        </Row>


      </CardBody>
    </Card >
  )
}



export default ProjectDetail
