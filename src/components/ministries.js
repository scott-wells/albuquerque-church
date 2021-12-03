import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import MinistryThumbnail from "./ministry-thumbnail"

const Ministries = ({ children }) => {
  
    return (
        <div className="home-ministries-bg">
          <MinistryThumbnail />
          {/* each minsitry has a thumbnail with text on hover that links to page */}
          {/* ministries arranged in a grid */}
        </div>
    )
  }
  
  export default Ministries