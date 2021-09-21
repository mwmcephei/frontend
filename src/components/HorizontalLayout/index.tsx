import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"

//actions
import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutWidth,
} from "../../store/actions"

//redux
import { useSelector, useDispatch } from "react-redux"

//components
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Rightbar from "../CommonForBoth/RightSidebar"
const Layout = props => {
  const dispatch = useDispatch()

  const { topbarTheme, layoutWidth, isPreloader, showRightSidebar } =
    useSelector(state => ({
      // @ts-ignore redux store stays untyped for now
      topbarTheme: state.Layout.topbarTheme,
      // @ts-ignore redux store stays untyped for now
      layoutWidth: state.Layout.layoutWidth,
      // @ts-ignore redux store stays untyped for now
      isPreloader: state.Layout.isPreloader,
      // @ts-ignore redux store stays untyped for now
      showRightSidebar: state.Layout.showRightSidebar,
    }))

  /*
  document title
  */
  useEffect(() => {
    const title = props.location.pathname
    let currentage = title.charAt(1).toUpperCase() + title.slice(2)

    document.title = currentage + " PMO Tool"
  }, [props.location.pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  /*
  layout settings
  */
  useEffect(() => {
    dispatch(changeLayout("horizontal"))
  }, [dispatch])

  useEffect(() => {
    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block"
      document.getElementById("status").style.display = "block"

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none"
        document.getElementById("status").style.display = "none"
      }, 2500)
    } else {
      document.getElementById("preloader").style.display = "none"
      document.getElementById("status").style.display = "none"
    }
  }, [isPreloader])

  useEffect(() => {
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme))
    }
  }, [dispatch, topbarTheme])

  useEffect(() => {
    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth))
    }
  }, [dispatch, layoutWidth])

  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header
          theme={topbarTheme}
          isMenuOpened={isMenuOpened}
          openLeftMenuCallBack={openMenu}
        />
        <Navbar menuOpen={isMenuOpened} />
        <div className="main-content">{props.children}</div>
        <Footer />
      </div>

      {showRightSidebar ? <Rightbar /> : null}
    </React.Fragment>
  )
}

Layout.propTypes = {
  changeLayout: PropTypes.func /*  */,
  changeLayoutWidth: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any,
}

export default withRouter(Layout)
