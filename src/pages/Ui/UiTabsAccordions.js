import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"

import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import classnames from "classnames"
function UiTabsAccordions(props) {
  const [activeTab, setactiveTab] = useState("1")
  const [activeTab1, setactiveTab1] = useState("5")
  const [activeTab2, setactiveTab2] = useState("1")
  const [activeTab3, setactiveTab3] = useState("1")
  const [verticalActiveTab, setverticalActiveTab] = useState("1")
  const [verticalActiveTabWithIcon, setverticalActiveTabWithIcon] =
    useState("1")
  const [customActiveTab, setcustomActiveTab] = useState("1")
  const [customIconActiveTab, setcustomIconActiveTab] = useState("1")
  const [activeTabJustify, setactiveTabJustify] = useState("5")
  const [col1, setcol1] = useState(true)
  const [col2, setcol2] = useState(false)
  const [col3, setcol3] = useState(false)

  const [col5, setcol5] = useState(true)
  const [col6, setcol6] = useState(true)
  const [col7, setcol7] = useState(true)

  const [col8, setcol8] = useState(true)
  const [col9, setcol9] = useState(true)
  const [col10, setcol10] = useState(false)
  const [col11, setcol11] = useState(false)

  const t_col1 = () => {
    setcol1(!col1)
    setcol2(false)
    setcol3(false)
  }

  const t_col2 = () => {
    setcol2(!col2)
    setcol1(false)
    setcol3(false)
  }

  const t_col3 = () => {
    setcol3(!col3)
    setcol1(false)
    setcol2(false)
  }

  const t_col5 = () => {
    setcol5(!col5)
  }

  const t_col6 = () => {
    setcol6(!col6)
  }

  const t_col7 = () => {
    setcol7(!col7)
  }

  const t_col8 = () => {
    setcol6(!col6)
    setcol7(!col7)
  }

  const t_col9 = () => {
    setcol9(!col9)
    setcol10(false)
    setcol11(false)
  }

  const t_col10 = () => {
    setcol10(!col10)
    setcol9(false)
    setcol11(false)
  }

  const t_col11 = () => {
    setcol11(!col11)
    setcol10(false)
    setcol9(false)
  }

  const toggle = tab => {
    if (activeTab !== tab) {
      setactiveTab(tab)
    }
  }

  const toggle1 = tab => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab)
    }
  }

  const toggle2 = tab => {
    if (activeTab2 !== tab) {
      setactiveTab2(tab)
    }
  }

  const toggle3 = tab => {
    if (activeTab3 !== tab) {
      setactiveTab3(tab)
    }
  }

  const toggleVertical = tab => {
    if (verticalActiveTab !== tab) {
      setverticalActiveTab(tab)
    }
  }

  const toggleVerticalIcon = tab => {
    if (verticalActiveTabWithIcon !== tab) {
      setverticalActiveTabWithIcon(tab)
    }
  }

  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab)
    }
  }

  const toggleIconCustom = tab => {
    if (customIconActiveTab !== tab) {
      setcustomIconActiveTab(tab)
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Tabs & Accordions | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Row>
            <Card>
              <CardBody>
                <Row>
                  <Col lg={6}>
                    <CardTitle className="h4">Accordion</CardTitle>
                    <p className="card-title-desc">
                      Extend the default collapse behavior to create an
                      accordion.
                    </p>

                    <div className="accordion" id="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col1 }
                            )}
                            type="button"
                            onClick={t_col1}
                            style={{ cursor: "pointer" }}
                          >
                            Accordion Item #1
                          </button>
                        </h2>

                        <Collapse isOpen={col1} className="accordion-collapse">
                          <div className="accordion-body">
                            <div className="text-muted">
                              <strong className="text-dark">
                                This is the first item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col2 }
                            )}
                            type="button"
                            onClick={t_col2}
                            style={{ cursor: "pointer" }}
                          >
                            Accordion Item #2
                          </button>
                        </h2>

                        <Collapse isOpen={col2} className="accordion-collapse">
                          <div className="accordion-body">
                            <div className="text-muted">
                              <strong className="text-dark">
                                This is the second item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col3 }
                            )}
                            type="button"
                            onClick={t_col3}
                            style={{ cursor: "pointer" }}
                          >
                            Accordion Item #3
                          </button>
                        </h2>
                        <Collapse isOpen={col3} className="accordion-collapse">
                          <div className="accordion-body">
                            <div className="text-muted">
                              <strong className="text-dark">
                                This is the third item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </Collapse>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mt-4">
                      <CardTitle className="h4">Flush</CardTitle>
                      <p className="card-title-desc">
                        Add <code>.accordion-flush</code> to remove the default{" "}
                        <code>background-color</code>, some borders, and some
                        rounded corners to render accordions edge-to-edge with
                        their parent container.
                      </p>

                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFlushOne">
                            <button
                              className={classnames(
                                "accordion-button",
                                "fw-medium",
                                { collapsed: !col9 }
                              )}
                              type="button"
                              onClick={t_col9}
                              style={{ cursor: "pointer" }}
                            >
                              Accordion Item #1
                            </button>
                          </h2>

                          <Collapse
                            isOpen={col9}
                            className="accordion-collapse"
                          >
                            <div className="accordion-body">
                              <div className="text-muted">
                                <strong className="text-dark">
                                  This is the first item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFlushTwo">
                            <button
                              className={classnames(
                                "accordion-button",
                                "fw-medium",
                                { collapsed: !col10 }
                              )}
                              type="button"
                              onClick={t_col10}
                              style={{ cursor: "pointer" }}
                            >
                              Accordion Item #2
                            </button>
                          </h2>

                          <Collapse
                            isOpen={col10}
                            className="accordion-collapse"
                          >
                            <div className="accordion-body">
                              <div className="text-muted">
                                <strong className="text-dark">
                                  This is the second item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="headingFlushThree"
                          >
                            <button
                              className={classnames(
                                "accordion-button",
                                "fw-medium",
                                { collapsed: !col11 }
                              )}
                              type="button"
                              onClick={t_col11}
                              style={{ cursor: "pointer" }}
                            >
                              Accordion Item #3
                            </button>
                          </h2>
                          <Collapse
                            isOpen={col11}
                            className="accordion-collapse"
                          >
                            <div className="accordion-body">
                              <div className="text-muted">
                                <strong className="text-dark">
                                  This is the third item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiTabsAccordions
