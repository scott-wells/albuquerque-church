import React from "react"
import {GatsbyImage} from 'gatsby-plugin-image'



const Staff = ({ pastors }) => {
  
    return (
        <>
            <div className="about-staff-bar container-fluid"></div>
            <div className="about-staff container-fluid">
                <h2 class="text-center mb-4 mb-md-5">Elders</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4 px-4">
                        {pastors.map(pastor => {
                            return(
                                <div className="text-center col-11 col-sm-8 col-md-6 mx-auto mb-5">
                                    <div className="about-staff-image rounded-circle mx-auto mb-4">
                                        <picture>
                                            <GatsbyImage image={pastor.image.asset.gatsbyImageData}/>
                                        </picture>
                                    </div>
                                    
                                    <h4>{pastor.name}</h4>
                                    <p>{pastor.bio}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        </> 
    )
  }
  
  export default Staff
