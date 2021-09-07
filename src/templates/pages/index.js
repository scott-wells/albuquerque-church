//src/templates/pages/index.js

import React  from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Page = ({ pageContext }) => {
  const page = pageContext.page

  return (
    <Layout>
      <SEO title={page.title} />

      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{__html: page.content}} />

    </Layout>
  )
}

export default Page


export const pageQuery = graphql`
    query getWPPage {
        wpPage {
            date
            id
            title
            content
        }
    }
`
  