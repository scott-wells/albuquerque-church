import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

// import Bio from "../components/bio" -- not needed?
import Layout from "../components/layout"
import HomeHero from "../components/home-hero"
import Ministries from "../components/ministries"
import Seo from "../components/seo"

const IndexPage = () => {

  return (
    <Layout isHomePage>
      <Seo title="Albuquerque Church" />
      <HomeHero />
      <Ministries />
        {/* About */}
        {/* Scripture */}
        {/* Covid */}
        {/* Footer??? */}
      
    </Layout>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
//     allWpPost(
//       sort: { fields: [date], order: DESC }
//       limit: $postsPerPage
//       skip: $offset
//     ) {
//       nodes {
//         excerpt
//         uri
//         date(formatString: "MMMM DD, YYYY")
//         title
//         excerpt
//       }
//     }
//   }
// `
