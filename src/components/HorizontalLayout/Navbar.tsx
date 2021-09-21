import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

import { connect } from "react-redux"



const navbarItemStyle = { marginLeft: "20px" }
const iconStyle = {
  backgroundSize: "20px",
  width: "20px",
}

const Navbar = props => {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/dashboard" className="dropdown-item">
                    <div className="d-flex justify-content-left">
                      <h5 className="text-muted" style={iconStyle}>
                        <i className="mdi mdi-developer-board"></i>
                      </h5>
                      <div style={navbarItemStyle}>
                        <h5 className="text-muted ">Dashboard</h5>
                      </div>
                    </div>
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link to="/measure_overview" className="dropdown-item">
                    <div className="d-flex justify-content-left">
                      <h5 className="text-muted" style={iconStyle}>
                        <i className="mdi mdi-clipboard-list-outline"></i>
                      </h5>

                      <div style={navbarItemStyle}>
                        <h5 className="text-muted">Measure Overview</h5>
                      </div>
                    </div>
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link to="/measure_reports" className="dropdown-item">
                    <div className="d-flex justify-content-left">
                      <h5 className="text-muted" style={iconStyle}>
                        <i className="bx bx-file "></i>
                      </h5>

                      <div style={navbarItemStyle}>
                        <h5 className="text-muted">Measure Reports</h5>
                      </div>
                    </div>
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link to="/budget_reports" className="dropdown-item">
                    <div className="d-flex justify-content-left">
                      <h5 className="text-muted" style={iconStyle}>
                        <i className="bx bx-bar-chart-alt-2 "></i>
                      </h5>

                      <div style={navbarItemStyle}>
                        <h5 className="text-muted">Budget Report</h5>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)



