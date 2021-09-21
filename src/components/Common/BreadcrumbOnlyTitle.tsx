import { Row, Col } from "reactstrap"
import { withRouter } from "react-router-dom"

const BreadcrumbOnlyTitle = (props: { breadcrumbItem: string }) => {


  return (
    <Row>
      <Col xs="12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4><div className="mb-0 " style={{ fontSize: "22px" }}>{props.breadcrumbItem}</div></h4>
        </div>
      </Col>
    </Row>
  )
}

export default withRouter(BreadcrumbOnlyTitle)
