import PropTypes from "prop-types"
import React, { useEffect } from "react"

import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"

// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes"

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"

// layouts Format
import VerticalLayout from "./components/VerticalLayout"
import HorizontalLayout from "./components/HorizontalLayout"
import NonAuthLayout from "./components/NonAuthLayout"
import Index from "./components/HorizontalLayout"
import Overview from "./components/pmoComponents/overview"
import MeasureOverview from "./components/pmoComponents/MeasureOverview"
import MeasureReports from "./components/pmoComponents/MeasureReports"
import BudgetReport from "./components/pmoComponents/BudgetReport"

// Import scss
import "./assets/scss/theme.scss"




const App = props => {
  function getLayout() {
    let layoutCls = VerticalLayout
    switch (props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout
        break
      default:
        layoutCls = VerticalLayout
        break
    }
    return layoutCls
  }

  const Layout = getLayout()
  return (
    <React.Fragment>
      <Router>
        <Index />
        <Switch>
          <Route path="/" exact>
            <Overview />
          </Route>
          <Route path="/dashboard">
            <Overview />
          </Route>
          <Route path="/measure_overview">
            <MeasureOverview />
          </Route>
          <Route path="/measure_reports">
            <MeasureReports />
          </Route>
          <Route path="/budget_reports">
            <BudgetReport />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any,
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)
