import React, { useEffect, useState } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout';

const Teaching = ({ data }) => {
    const [teachings, setTeachings] = useState(null);

    console.log(data)

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
query data {
    teachings: allSanityTeachings {
      nodes{
        title
        description
        audio
      }
    }
  }
`