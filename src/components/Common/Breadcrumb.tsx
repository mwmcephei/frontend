import React, { useState } from "react"
import PropTypes from "prop-types"
import { Row, Col, BreadcrumbItem } from "reactstrap"
import { Link, withRouter, useHistory } from "react-router-dom"
import { Measure } from "types"

const Breadcrumb = (props: { measures: Measure[], currentMeasure: Measure, breadcrumbItem: string }) => {
  const history = useHistory()

  return (
    <Row>

      <div className="page-title-box d-sm-flex align-items-center justify-content-between">
        <h4><div className="mb-0 " style={{ fontSize: "22px" }}>{props.breadcrumbItem}</div></h4>
        <div className="">
          <div className="input-group input-group ">
            <select
              className="form-select form-select-sm"
              value={""}
              onChange={e => {
                history.push("/measureReports/" + e.target.value)
              }}
            >
              <option
                key={props.currentMeasure._id}
                value={props.currentMeasure._id}
              >
                {props.currentMeasure.title} {props.currentMeasure.name.length > 20 ? props.currentMeasure.name.substring(0, 20) + "..." : props.currentMeasure.name}
              </option>
              {props.measures &&
                props.measures.map(measure => {
                  return <option key={measure._id} value={measure._id}>{measure.title} {measure.name.length > 20 ? measure.name.substring(0, 20) + "..." : measure.name}</option>
                })}
            </select>
            {/* <div className="input-group-append"> */}
            <label className="input-group-text">Measure</label>
          </div>
        </div>
      </div>

    </Row>
  )
}

export default withRouter(Breadcrumb)
