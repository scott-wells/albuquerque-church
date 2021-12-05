import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
// import MinistryThumbnail from "./ministry-thumbnail"

// images
import teachingPic from '../images/bible-leather-cross.jpeg'

const Ministries = ({ children }) => {
  
    return (

      <div class="row row-cols-1 row-cols-md-2 g-4 p-5">
        <div class="col">
          <div class="card">
            <img src={teachingPic} class="card-img-top" alt="leather bible with a cross on the cover" />
            <div class="card-body">
              <h5 class="card-title">Teaching</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">ABQ Kids Church</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Coffee Shop Connections</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Mountain Bike Fellowship</h5>
            </div>
          </div>
        </div>
      </div>


    )
  }
  
  export default Ministries