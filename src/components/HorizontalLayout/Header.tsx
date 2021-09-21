import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import ReactDrawer from "react-drawer"

import { connect } from "react-redux"

import { Link } from "react-router-dom"

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions"

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"
import RightSidebar from "../CommonForBoth/RightSidebar"
import logo_small from "../../assets/images/allianz_bird_logo.png"
import headerLogog from "../../assets/images/headerLogo.png"
//i18n
import { withTranslation } from "react-i18next"

const Header = props => {
  const [position, setPosition] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    props.toggleLeftmenu(false)
  }, [window.location.href]);


  const toggleTopDrawer = () => {
    setPosition("right")
    setOpen(!open)
  }

  const onDrawerClose = () => {
    setOpen(false)
  }

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document["mozFullScreenElement"] &&
      !document["webkitFullscreenElement"]
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement["mozRequestFullScreen"]) {
        document.documentElement["mozRequestFullScreen"]()
      } else if (document.documentElement["webkitRequestFullscreen"]) {
        document.documentElement["webkitRequestFullscreen"](
          // @ts-ignore
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document["cancelFullScreen"]) {
        document["cancelFullScreen"]()
      } else if (document["mozCancelFullScreen"]) {
        document["mozCancelFullScreen"]()
      } else if (document["webkitCancelFullScreen"]) {
        document["webkitCancelFullScreen"]()
      }
    }
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/dashboard" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo_small} alt="" height="40" />
                </span>
                <span className="logo-lg">
                  <img src={headerLogog} alt="" height="60" />
                </span>
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              data-toggle="collapse"
              onClick={() => {
                props.toggleLeftmenu(!props.leftMenu)
              }}
              data-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>

          <div className="d-flex">
            <NotificationDropdown />

            <ProfileMenu />
          </div>
        </div>
      </header>
      <ReactDrawer open={open} position={position} onClose={onDrawerClose}>
        <RightSidebar onClose={onDrawerClose} />
      </ReactDrawer>
    </React.Fragment>
  )
}

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
}

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout
  return { layoutType, showRightSidebar, leftMenu }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header))
