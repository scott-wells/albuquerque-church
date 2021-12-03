import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const HomeHero = ({ children }) => {
  
    return (
        <div className="home-hero-bg">
          <h1 className="home-hero-title">A vision for our community. A home for your family.</h1>
          <p className="home-hero-subtitle">Learn More</p> 
          {/* Learn more goes to About page */}
        </div>
    )
  }
  
  export default HomeHero