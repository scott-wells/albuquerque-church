import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

const MountainBikeFellowship = () => {
  const [events, setEvents] = useState(null);

  const data = useStaticQuery(graphql`
    query{
      allSanityMountainBikeEvents {
        nodes {
          title
          releaseDate
          time
          location
          description
        }
      }
    }
  `)

  useEffect(() => {
    setEvents(data.allSanityMountainBikeEvents.nodes)
  }, [])

    return (
        <>
          <div className="community-mountain-bike-bar container-fluid"></div>
          <div className="community-mountain-bike container-fluid">
              <div className="community-mountain-bike-text row row-cols-1 g-4 px-2 mx-auto">
                  <h2 className="text-center">Mountain Bike Fellowship</h2>
                  <div className="text-center col col-sm-10 col-md-8 mx-auto mb-5">
                    <p>Men, come enjoy God's awesome creation along with fellowship and exercise at Michael Emery Trail, at the end of Spain off of High Desert Blvd. For more information on how you can join in, check out the announcement area in our church foyer. All skill levels welcome!</p>
                    <br/>
                    <hr/>
                    <br/>
                  </div>

              <h3 className='text-center'>Upcoming Events:</h3>
              {events &&
                events.map((event,index) => {
                  let formattedDate = event.releaseDate.split('-');
                  return(
                    <div key={index} className='event-block col col-sm-10 col-md-8 mx-auto p-4 mb-5'>
                      <h4 className='event-block-title'>{event.title} - {`${formattedDate[1]}-${formattedDate[2]}-${formattedDate[0]}`}</h4>
                      <br/>
                      <div style={{display: `inline-flex`}}>
                        <p>{event.time} - </p>
                        <p>{event.location}</p>
                      </div>
                      <p>{event.description}</p>
                    </div>
                  )
                })}

                {!events &&
                  <h1>Loading Mountain Bike Fellowship Events...</h1>
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