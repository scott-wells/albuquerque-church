import React, { useState, useEffect } from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout';
import TeachingHero from '../components/teaching/TeachingHero'

const Teaching = ( {data} ) => {
    const [teachings, setTeachings] = useState(null);

    useEffect(() => {
      setTeachings(data.teachings.nodes)
    }, [])

    return(
        <Layout>
          <TeachingHero />
          <div className='teaching-container'>
            <h3 className="mt-5">Each week we go verse by verse through the Bible to be transformed by the liberating power of the Gospel of grace! Come worship with us!</h3>

            <br/>
            <br/>

            <h3>Recent Teachings:</h3>
            {teachings &&
              teachings.map((teaching,index) => {
                return(
                  <div key={index} className='teaching-block'>
                    <h3>{teaching.title}</h3>
                    <audio controls className='teaching-audio' src={teaching.audio}></audio>
                  </div>
                )
              })}

              {!teachings &&
                <h1>Loading Teachings...</h1>
              }
            </div>
        </Layout>
    )
}

export default Teaching;

export const query = graphql`
query allTeachings {
    teachings: allSanityTeachings(
      sort: {
        fields: [_createdAt]
        order: [DESC, ASC]
      }
    ) {
      nodes {
        title
        description
        audio
        _createdAt
      }
    }
  }
`
