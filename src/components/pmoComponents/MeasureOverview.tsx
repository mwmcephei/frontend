import { useState, useEffect, ReactElement } from "react"

import { Container } from "reactstrap"
import MeasureList from "../../pages/Projects/projects-list"
import { Measure } from "../../types"



const MeasureOverview = (): ReactElement => {

  const [measures, setMeasures] = useState<Measure[]>([])


  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL_LOCAL + "/measures")
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setMeasures(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);



  return (
    <div className="page-content">
      <Container fluid>
        <MeasureList measures={measures} />
      </Container>
    </div>
  )
}

export default MeasureOverview
