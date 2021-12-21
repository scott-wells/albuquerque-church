import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import logo from "../images/logo_02.jpeg"

const Layout = ({ isHomePage, children }) => {

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header >

      {/* nav mobile */}
        <nav className="navbar navbar-expand-md navbar-light d-block d-sm-none py-4">
          <div className="container-fluid">
              <Link to="/" className="navbar-logo-font">
              {/* <img class="img-fluid" src={logo} alt="albuquerque church logo" title="Albuquerque Church"/> */}
                <h1>Albuquerque Church</h1>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse container-fluid" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/what-we-believe" className="nav-link">What We Believe</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/teaching" className="nav-link">Teaching</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/coming-soon" className="nav-link">Community</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/coming-soon" className="nav-link">Give</Link>
                  </li>
                </ul>
            </div>
          </div>
        </nav>

        {/* nav desktop */}
        <nav className="navbar navbar-expand-md navbar-light d-none d-sm-block p-4">

          <div className="d-flex justify-content-between">
            <div className="col-9 col-md-5">
              <Link to="/" className="navbar-logo-font">
                {/* <img class="img-fluid d-block d-md-none" src={logo} alt="albuquerque church logo" title="Albuquerque Church"/> */}
                <h1>Albuquerque Church</h1>
              </Link>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse container-fluid justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/what-we-believe" className="nav-link">What We Believe</Link>
                </li>
                <li className="nav-item">
                  <Link to="/teaching" className="nav-link">Teaching</Link>
                </li>
                <li className="nav-item">
                  <Link to="/coming-soon" className="nav-link">Community</Link>
                </li>
                <li className="nav-item">
                  <Link to="/coming-soon" className="nav-link">Give</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      {/* footer mobile */}
      <footer className=" container-fluid text-center py-4 px-3 d-block d-md-none">
        <div className="col-10 mx-auto">
          <ul className="nav justify-content-center border-bottom pb-4 mb-4">
            <li class="nav-item"><Link to="/" className="nav-link px-2">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link px-2">About</Link></li>
            <li className="nav-item"><Link to="/what-we-believe" className="nav-link px-2">What We Believe</Link></li>
            <li className="nav-item"><Link to="/teaching" className="nav-link px-2">Teaching</Link></li>
            <li className="nav-item"><Link to="/community" className="nav-link px-2">Community</Link></li>
            <li className="nav-item"><Link to="/give" className="nav-link px-2">Give</Link></li>
          </ul>
          <br/>
          <p><strong>Join Us Sundays at 10 AM</strong>
            <br/>5528 Eubank Blvd. Suite 2,
            <br/> Albuquerque, NM 87111</p>
          <p>(505) 990-7000</p>
          <a href="mailto:elders@albuquerque.church"><p>elders@albuquerque.church</p></a>
          <br/>
          <Link to="/">
            <img className="img-fluid py-3 p-md-0" src={logo} alt="albuquerque church logo" title="Albuquerque Church"/>
          </Link>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>

      {/* footer desktop */}
      <footer className=" container-fluid py-5 d-none d-md-block">
        <div className="col-10 mx-auto">
          <ul className="nav justify-content-center border-bottom pb-4 mb-4">
            <li class="nav-item"><Link to="/" className="nav-link px-2">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link px-2">About</Link></li>
            <li className="nav-item"><Link to="/what-we-believe" className="nav-link px-2">What We Believe</Link></li>
            <li className="nav-item"><Link to="/teaching" className="nav-link px-2">Teaching</Link></li>
            <li className="nav-item"><Link to="/community" className="nav-link px-2">Community</Link></li>
            <li className="nav-item"><Link to="/give" className="nav-link px-2">Give</Link></li>
          </ul>
          <div className="d-flex">
            <div className="col-6">
              <Link to="/">
                <img className="img-fluid py-3 p-md-0" src={logo} alt="albuquerque church logo" title="Albuquerque Church"/>
              </Link>

              <p>&copy; {new Date().getFullYear()}</p>
            </div>
            <div className="col d-flex flex-column justify-content-center text-end">
            <br/>
            <p><strong>Join Us Sundays at 10 AM</strong>
              <br/>5528 Eubank Blvd. Suite 2,
              <br/> Albuquerque, NM 87111
              <br/>(505) 990-7000</p>
              <a href="mailto:elders@albuquerque.church"><p>elders@albuquerque.church</p></a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Layout
