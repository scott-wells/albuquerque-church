import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from '../components/layout';
import Hero from "../components/about/hero"
import WhoWeAre from '../components/about/who-we-are'
import OurHistory from '../components/about/our-history'
import Staff from '../components/about/staff'

// const Container = styled.div`
//     width: 100%;
//     text-align: center;

//     .profile{
//         width: 50%;
//         margin: 0 auto;

//         .img-container{
//             max-width: 350px;
//             max-height: 350px;
//             border-radius: 50%;
//             overflow: hidden;
//             margin: 0 auto;
//         }

//         h2{
//             margin-top: 2rem;
//         }

//         p{
//             margin-top: 1rem;
//             margin-bottom: 2rem;
//         }
//     }
// `

const About = ({ data }) => {

    const pastors = data.pastors.nodes;
    console.log(pastors)

    return(
        <Layout>
            {/* <Container> */}
            <Hero/>
            <WhoWeAre/>
            <OurHistory/>
            <Staff pastors={pastors} />
            {/* put this in a component */}
            {/* {pastors.map(pastor => {
                return(
                    <div key={pastor.name}>
                        <div>
                            <GatsbyImage image={pastor.image.asset.gatsbyImageData}/>
                        </div>
                        <h2>{pastor.name}</h2>
                        <p>{pastor.bio}</p>
                    </div>
                    )
            })} */}
        </Layout>
    )
}

export default About;

export const query = graphql`
query allPastors {
    pastors: allSanityPastor {
        nodes {
            name
            bio
            image{
                asset{
                    gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
                }
            }
          }
    }
  }
`