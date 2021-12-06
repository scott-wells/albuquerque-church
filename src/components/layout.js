import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
// images
import logoSmall from "../images/logo_sm_01.jpg"

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
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-2 py-4">
          <div class="container-fluid">
            <Link to="/">
              <h1 className="navbar-logo">Albuquerque Church</h1>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
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


                {/* another navbar possiblity */}
                {/* <div class="container">
                  <header class="d-flex justify-content-center py-3">
                    <ul class="nav nav-pills">
                      <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                      <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                      <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                      <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                    </ul>
                  </header>
                </div> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer class="row row-cols-1 row-cols-sm-3 g-4 px-3 text-center">
        
        <Link to="/">
          <img class="footer-logo" src={logoSmall} alt="albuquerque church logo" title="Albuquerque Church" />
        </Link>
        <p>&copy; {new Date().getFullYear()}</p>
        
        <ul class="nav">
          <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
          <li class="nav-item"><Link to="/what-we-believe" class="nav-link">What We Believe</Link></li>
          <li class="nav-item"><Link to="/teaching" class="nav-link">Teaching</Link></li>
          <li class="nav-item"><Link to="/community" class="nav-link">Community</Link></li>
          <li class="nav-item"><Link to="/give" class="nav-link">Give</Link></li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
