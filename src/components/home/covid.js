import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"



const Covid = ({ children }) => {
  
    return (
        <>
        <div class="home-covid-bar container-fluid"></div>
        <div class="home-covid container-fluid">
            <div class="home-covid-text row row-cols-1 g-4 px-4 mx-auto">
                <h2 class="text-center">COVID-19 Practices Update</h2>
                <div class="col text-center">
                    <p>Albuquerque Church is committed to cleaning our facility, on a routine basis before Sunday services for your care and safety. For your convenience disinfecting gel stations are placed throughout the church.</p>
                    <p>If you or your child is sick, we ask you kindly stay home as to care well for others.</p>
                    <p>Our Sunday messages are uploaded each week under the Teaching/ Sermons section of our website so that you can keep up with the study of God's Word.</p>
                </div>
            </div>
        </div>
        </>
    )
  }
  
  export default Covid
