import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

// import Bio from "../components/bio" -- not needed?
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import Ministries from "../components/home/ministries"
import About from "../components/home/about"
import Scripture from "../components/home/scripture"
import Covid from "../components/home/covid"
import Seo from "../components/seo"

const IndexPage = () => {

  return (
    <Layout isHomePage>
      <Seo title="Albuquerque Church" />
      <Hero />
      <Ministries />
      <About />
      <Scripture />
      <Covid />
    </Layout>
  )
}

export default IndexPage
