import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ComingSoon = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <div className="coming-soon container-fluid">
        <div className="col-8 mx-auto">
          <br/>
          <br/>
          <br/>
          <br/>
          <h1>Coming Soon...</h1>
          <p>This page isn't quite finished. Check back here soon!</p>
          <Link to="/" class="btn btn-light btn-outline btn-sm" role="button">
            Go back &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
          </Link>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        
      </div>
    </Layout>
  )
}

export default ComingSoon

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
