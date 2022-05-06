import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout';
import Hero from "../components/about/hero"
import JobPost from '../components/about/job-post'
import WhoWeAre from '../components/about/who-we-are'
import OurHistory from '../components/about/our-history'
import Staff from '../components/about/staff'


const About = ({ data }) => {

    const pastors = data.pastors.nodes;

    return(
        <Layout>
            <Hero/>
            {/* <JobPost/> */}
            <WhoWeAre/>
            <OurHistory/>
            <Staff pastors={pastors} />
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