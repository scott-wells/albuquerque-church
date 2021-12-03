import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header >
          NAV<br/>
          <img src="#" alt="#"/>
          <nav>
              <span>About</span>
              <span>What We Believe</span>
              <span>Teaching</span>
              <span>Community</span>
              <span>Give</span>
          </nav>
        </header>

      <main>{children}</main>

      <footer>
      FOOTER<br/>
        <nav>
            <span>About</span>
            <span>What We Believe</span>
            <span>Teaching</span>
            <span>Community</span>
            <span>Give</span>
        </nav>
        <img src="#" alt="#"/>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
