import React, { useEffect } from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout';

const Teaching = ( {data} ) => {
    console.log(data);

    useEffect(() => {
        console.log('mounted');
    },[])

    return(
        <Layout>
            <h1>TEACHINGS</h1>
        </Layout>
    )
}

export default Teaching;

export const query = graphql`
query allTeachings {
    teachings: allSanityTeachings {
      nodes {
        title
        description
        audio
      }
    }
  }
`
