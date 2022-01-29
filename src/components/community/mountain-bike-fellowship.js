import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

const MountainBikeFellowship = () => {
  const [events, setEvents] = useState(null);

  const data = useStaticQuery(graphql`
    query{
      allSanityMountainBikeEvents {
        nodes {
          title
          description
          dateLocation
        }
      }
    }
  `)

  console.log(data)

  useEffect(() => {
    setEvents(data.allSanityMountainBikeEvents.nodes)
  }, [])

    return (
        <>
          <div className="community-mountain-bike-bar container-fluid"></div>
          <div className="community-mountain-bike container-fluid">
              <div className="community-mountain-bike-text row row-cols-1 g-4 px-2 mx-auto">
                  <h2 className="text-center">Mountain Bike Fellowship</h2>
                  <div className="col text-center">
                      <p>Men, come enjoy God's awesome creation along with fellowship and exercise at Michael Emery Trail, at the end of Spain off of High Desert Blvd. For more information on how you can join in, check out the announcement area in our church foyer. All skill levels welcome!</p>
                  </div>
                  <h3>Upcoming Events:</h3>
              {events && events.map((event,index) => {
                  return(
                    <div key={index} className='coffee-event-block'>
                      <p>{event.title}</p>
                      <p>{event.dateLocation}</p>
                      <p>{event.description}</p>
                    </div>
                  )
                })}

                {!events &&
                  <h1>Loading Mountain Bike Fellowships Events...</h1>
                }

                {events < 1 &&
                  <h1>Currently, No Events Scheduled</h1>
                }
              </div>
          </div>
      </>
      )
  }

  export default MountainBikeFellowship