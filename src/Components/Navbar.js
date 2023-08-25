import React from 'react'
import PropTypes from 'prop-types'

// Used bootstrap for Navbar
// Now THIS is a Component That can be used Multiple Times in Multiple Projects
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.togglemode} bg-${props.togglemode}`}>
  <div className="container-fluid">
    
    {/* Navbar title prop */}
    <a className="navbar-brand" href="/">{props.title}</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">

          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
      </ul>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="Search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.togglemode ==='light'? 'dark' : 'light'} my-3`} >
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleThemeProp} id="flexSwitchCheckDefault" />
            <label className="form-check-label"> {props.btnTheme}</label>
        </div>
        
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Enter Title here",
    aboutText: "Enter About Here"
}
