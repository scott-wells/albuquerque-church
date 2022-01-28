import React from "react"

const MountainBikeFellowship = ({ events }) => {

    return (
        <>
          <div className="community-mountain-bike-bar container-fluid"></div>
          <div className="community-mountain-bike container-fluid">
              <div className="community-mountain-bike-text row row-cols-1 g-4 px-2 mx-auto">
                  <h2 className="text-center">Mountain Bike Fellowship</h2>
                  <div className="col text-center">
                      <p>Men, come enjoy God's awesome creation along with fellowship and exercise at Michael Emery Trail, at the end of Spain off of High Desert Blvd. For more information on how you can join in, check out the announcement area in our church foyer. All skill levels welcome!</p>
                  </div>
              </div>
          </div>
      </>
      )
  }

  export default MountainBikeFellowship

  export const query = graphql`
  query allEvents {
    events: allSanityMountainBikeEvents(
      sort: {
        fields: [_createdAt]
        order: [DESC, ASC]
      }
    ) {
      nodes {
        dateLocation
        description
        title
      }
      }
    }
  `