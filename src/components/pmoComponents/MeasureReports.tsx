import React, { ReactElement, useState, useEffect } from "react"

import { Container, Row, Col, Card, CardBody, CardTitle, Spinner } from "reactstrap"
import { useParams } from "react-router-dom"
import { apiUrl } from "../../globalVars"
import ProjectDetail from "pages/Projects/ProjectOverview/projectDetail"
import TeamMembers from "pages/Projects/ProjectOverview/teamMembers"
import TotalSellngProduct from "pages/Dashboard-saas/total-selling-product"
import TapVisitors from "pages/Dashboard-Blog/TapVisitors"
import LineColumnArea from "pages/AllCharts/apex/LineColumnAreaMeasureReport"
import ProjectsListRisks from "pages/Projects/projects-list-Risk"
import ProjectsListKPI from "pages/Projects/projects-list-KPI"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Measure } from "../../types"
import { toggleLeftmenu } from "../../store/actions"



const MeasureReports = (props): ReactElement => {
  const { measureID } = useParams();
  const [currentMeasure, setCurrentMeasure] = useState<Measure>()
  const [measures, setMeasures] = useState<Measure[]>()



  useEffect(() => {
    window.scrollTo(0, 0)
    //    props.toggleLeftmenu(true)
    fetch(apiUrl + "/measures")
      .then(response => response.json())
      .then(response => {
        setMeasures(response)

        if (measureID) {

          response.map(m => {
            if (m._id === measureID) {
              setCurrentMeasure(m)
              console.log(measureID)
            }
          })
        } else {
          setCurrentMeasure(response[0])
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  useEffect(() => {
    fetch(apiUrl + "/measures")
      .then(response => response.json())
      .then(response => {
        setMeasures(response)
        if (measureID) {
          response.map(m => {
            if (m._id === measureID) {
              setCurrentMeasure(m)
            }
          })
        } else {
          setCurrentMeasure(response[0])
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [measureID]);

  const team = currentMeasure && <TeamMembers lead={currentMeasure.measureLead}
    measureSponsor={currentMeasure.measureSponsor}
    lineOrgSponsor={currentMeasure.lineOrgSponsor}
    solutionManager={currentMeasure.solutionManager}
  />

  const measureReportStatus = currentMeasure && <TotalSellngProduct artefacts={currentMeasure.artefact}
    budget={currentMeasure.budget}
    risks={currentMeasure.risk} />

  const artefactsChart = currentMeasure && <TapVisitors measureID={currentMeasure._id} totalApprovedBudget={currentMeasure.budgetDetail.totalApprovedBudget} />

  const budgetChart = currentMeasure && <LineColumnArea measure={currentMeasure} />

  const kpi = currentMeasure && <ProjectsListKPI kpiData={currentMeasure.kpiData} kpiName={currentMeasure.kpiName} />

  const risks = currentMeasure && <ProjectsListRisks risks={currentMeasure.risks} />





  return (
    <>
      <div className="page-content">
        <Container >
          {currentMeasure && measures ?

            window.innerWidth > 1000 ?
              <div>
                <Row>
                  <Breadcrumbs title="" breadcrumbItem="Measure Status Report"
                    measures={measures}
                    currentMeasure={currentMeasure}
                  />
                </Row>
                <Row>
                  {currentMeasure && <Col xs="12" xm="6" lg="6" xl="6" >
                    <ProjectDetail currentMeasure={currentMeasure} />
                  </Col>}
                  <Col xs="12" xm="6" lg="6" xl="6" >
                    {team}
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" xm="6" lg="6" xl="6" >
                    {measureReportStatus}
                  </Col>
                  <Col xs="12" xm="6" lg="6" xl="6" >
                    <Card style={{ height: "300px" }}>
                      <CardBody>
                        <CardTitle className="mb-4">KPI</CardTitle>
                        {kpi}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row >
                  <Col xs="12" xm="6" lg="6" xl="6">
                    {artefactsChart}
                  </Col>
                  <Col xs="12" xm="6" lg="6" xl="6" >
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-4">Budget</CardTitle>
                        {budgetChart}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Container >
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-4">Risks</CardTitle>
                        {risks}
                      </CardBody>
                    </Card>
                  </Container>
                </Row>

              </div>
              :


              <div>
                <Row>
                  <Breadcrumbs title="" breadcrumbItem="Measure Status Report"
                    measures={measures}
                    currentMeasure={currentMeasure}
                  />
                </Row>
                <Row>
                  {currentMeasure && <Col xs="12" xm="6" lg="6" xl="6" >
                    <ProjectDetail currentMeasure={currentMeasure} />
                  </Col>}
                  <Col xs="12" xm="6" lg="6" xl="6" >
                    {team}
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" xm="6" lg="6" xl="6" >
                    {measureReportStatus}
                  </Col>
                </Row>
                <Row >
                  <Col xs="12" xm="6" lg="6" xl="6">
                    {artefactsChart}
                  </Col>
                  <Col xs="12" xm="6" lg="6" xl="6" >
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-4">Budget</CardTitle>
                        {budgetChart}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>

                  <Col xs="12" xm="6" lg="6" xl="6" >
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-4">KPI</CardTitle>
                        {kpi}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Container >
                    <Card>
                      <CardBody>
                        <CardTitle className="mb-4">Risks</CardTitle>
                        {risks}
                      </CardBody>
                    </Card>
                  </Container>
                </Row>

              </div>
            :
            <div className="d-flex justify-content-center align-items-center " style={{ height: "80vh" }}>
              <Spinner className="ms-6" color="primary" />
            </div>
          }
        </Container>
      </div>
    </>
  )
}
export default MeasureReports




