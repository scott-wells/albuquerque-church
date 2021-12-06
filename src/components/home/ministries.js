import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
// import MinistryThumbnail from "./ministry-thumbnail"


const Ministries = ({ children }) => {
  
    return (
      <div class="container-fluid">
        <div class="home-ministry row row-cols-1 row-cols-sm-2 g-4 px-3">
          <div class="col">
            <div class="card home-ministry-thumb home-ministry-1">
                <Link to="/teaching" class="my-auto ps-3">
                  <h1>Teaching</h1>
                </Link>
            </div>
          </div>
          <div class="col">
            <div class="card home-ministry-thumb home-ministry-2">
              <Link to="/teaching/abq-kids-church" class="my-auto ps-3">
                <h1>ABQ Kids <br/>Church</h1>
              </Link>
            </div>
          </div>
          <div class="col">
            <div class="card home-ministry-thumb home-ministry-3">
              <Link to="/community/coffee-shop-connections" class="my-auto ps-3">
                <h1>Coffee Shop <br/>Connections</h1>
              </Link>
            </div>
          </div>
          <div class="col">
            <div class="card home-ministry-thumb home-ministry-4">
              <Link to="/community/mountain-bike-fellowship" class="my-auto ps-3">
                <h1>Mountain Bike <br/>Fellowship</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Ministries