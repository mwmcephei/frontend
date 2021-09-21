import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

//Import Components
import Navbar from "./Navbar/Navbar"
import Section from "./HeroSection/Section"
import CardsMini from "./HeroSection/cards-mini"
import Features from "./Features/features"
import RoadMap from "./RoadMap/road-map"
import FAQs from "./Faqs/FAQs"
import Footer from "./Footer/footer"

const CryptoIcoLanding = () => {
  const [imglight, setimglight] = useState(true)
  const [navClass, setnavClass] = useState("")

  // Use ComponentDidMount
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true)
  }, [])

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop
    if (scrollup > 80) {
      setimglight(false)
      setnavClass("nav-sticky")
    } else {
      setimglight(true)
      setnavClass("")
    }
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>ICO Landing | Skote - React Admin & Dashboard Template</title>
      </MetaTags>
      {/* import navbar */}
      <Navbar navClass={navClass} imglight={imglight} />

      {/* Hero section */}
      <Section />

      {/* mini cards */}
      <CardsMini />


      {/* features */}
      <Features />

      {/* roadmap */}
      <RoadMap />

      {/* faqs */}
      <FAQs />

      {/* footer */}
      <Footer />
    </React.Fragment>
  )
}

export default CryptoIcoLanding
