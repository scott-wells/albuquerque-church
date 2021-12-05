import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"



const HomeHero = ({ children }) => {
  
    return (
      <div class="home-hero p-5" >
        <div class="container-fluid py-5">
          <h1>
            A vision for the community.<br/>
            A home for your family.
          </h1>
          <br/>

          <Link to="/about" class="btn btn-light btn-outline" role="button">
            Learn more &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
          </Link>
            
          {/* <button class="btn btn-primary btn-lg" type="button">Example button</button> */}
        </div>
      </div>
    )
  }
  
  export default HomeHero
