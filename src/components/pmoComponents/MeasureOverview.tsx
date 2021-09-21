import { useState, useEffect, ReactElement } from "react"

import { Container, Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"
import { apiUrl } from "../../globalVars"
import MeasureList from "../../pages/Projects/projects-list"
import { Measure } from "../../types"
import BreadcrumbOnlyTitle from "components/Common/BreadcrumbOnlyTitle"




const MeasureOverview = (): ReactElement => {

  const [measures, setMeasures] = useState<Measure[]>()


  useEffect(() => {
    fetch(apiUrl + "/measures")
      .then(response => response.json())
      .then(response => {
        setMeasures(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);



  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row>
            <BreadcrumbOnlyTitle ttle="" breadcrumbItem="Measure Overview" />
          </Row>
          <MeasureList measures={measures} />
        </Container>
      </div>
    </>
  )
}

export default MeasureOverview
