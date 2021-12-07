import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  // const {
  //   wp: {
  //     generalSettings: { title },
  //   },
  // } = useStaticQuery(graphql`
  //   query LayoutQuery {
  //     wp {
  //       generalSettings {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header >
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <h1>Albuquerque Church</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/what-we-believe" className="nav-link">What We Believe</Link>
                </li>
                <li className="nav-item">
                  <Link to="/teaching/" className="nav-link">Teaching</Link>
                </li>
                <li className="nav-item">
                  <Link to="/community" className="nav-link">Community</Link>
                </li>
                <li className="nav-item">
                  <Link to="/give" className="nav-link">Give</Link>
                </li>

                {/* may use this dropdown later */}
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
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
