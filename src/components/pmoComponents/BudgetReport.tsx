import React, { ReactElement } from "react"
import { useState, useEffect } from "react"

import { Container, Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

const BudgetReport = (): ReactElement => {
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row>Budget Report</Row>
        </Container>
      </div>
    </>
  )
}

export default BudgetReport
