import React from 'react'
import { graphql } from "gatsby"
import {GatsbyImage} from 'gatsby-plugin-image'
import Layout from '../components/layout';
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    text-align: center;

    .profile{
        width: 50%;
        margin: 0 auto;

        .img-container{
            max-width: 350px;
            max-height: 350px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto;
        }

        h2{
            margin-top: 2rem;
        }

        p{
            margin-top: 1rem;
            margin-bottom: 2rem;
        }
    }
`

const WhoWeAre = ({ data }) => {

    const pastors = data.pastors.nodes;
    console.log(pastors)

    return(
        <Layout>
            <Container>
                <h1>Staff</h1>
                {pastors.map(pastor => {
                    return(
                        <div key={pastor.name} className="profile">
                            <div className='img-container'>
                                <GatsbyImage image={pastor.image.asset.gatsbyImageData}/>
                            </div>
                            <h2>{pastor.name}</h2>
                            <p>{pastor.bio}</p>
                        </div>
                        )
                })}
            </Container>
        </Layout>
    )
}

export default WhoWeAre;

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