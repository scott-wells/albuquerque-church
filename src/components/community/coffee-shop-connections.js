import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from "gatsby"

const CoffeeShopConnections = () => {
  const [events, setEvents] = useState(null);

const data = useStaticQuery(graphql`
  query event {
    allSanityCoffeeEvents {
      nodes {
        title
        description
        dateLocation
      }
    }
  }
`)

useEffect(() => {
  setEvents(data.allSanityCoffeeEvents.nodes)
}, [])

    return (
      <div className="community-coffee container-fluid">
          <div className="community-coffee-text row row-cols-1 g-4 px-2 mx-auto">
              <h2 className="text-center">Coffee Shop Connections</h2>
              <div className="col text-center">
                <p>At Albuquerque Church we take our coffee seriously! We'd love to get together with you for a hot cuppa java and fellowship. For more information check out our announcement area in our church foyer.</p>
              </div>

              <br/>
              <br/>

              <h3 style={{textDecoration: `underline`}}>Upcoming Events:</h3>
              {events &&
                events.map((event,index) => {
                  return(
                    <div key={index} className='coffee-event-block'>
                      <b><p>{event.title}</p></b>
                      <p>{event.dateLocation}</p>
                      <p>{event.description}</p>
                      <hr></hr>
                    </div>
                  )
                })}

                {!events &&
                  <h1>Loading Coffee Shop Connections Events...</h1>
                }

                {events < 1 &&
                  <h1>Currently, No Events Scheduled</h1>
                }

          </div>
      </div>
      )
  }

export default CoffeeShopConnections

