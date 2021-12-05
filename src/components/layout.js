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
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">
              <h1>Albuquerque Church</h1>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/about" class="nav-link active" aria-current="page">About</Link>
                </li>
                <li class="nav-item">
                  <Link to="/what-we-believe" class="nav-link">What We Believe</Link>
                </li>
                <li class="nav-item">
                  <Link to="/teaching" class="nav-link">Teaching</Link>
                </li>
                <li class="nav-item">
                  <Link to="/community" class="nav-link">Community</Link>
                </li>
                <li class="nav-item">
                  <Link to="/give" class="nav-link">Give</Link>
                </li>

                {/* may use this dropdown later */}
                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
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
