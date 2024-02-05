import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div class="container-fluid">
      <Link class="navbar-brand" href="/">{props.title}</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        {/* <div class='d-flex'>
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}/>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}/>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}/>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}/>
        </div> */}
        <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input class="form-check-input" onClick={()=>{props.toggleMode(null)}}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label class="form-check-label" for="flexSwitchCheckDefault">Toggle Mode</label>
        </div>
        {/* <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired}

Navbar.defaultProps = {
    title : 'set title here',
    aboutText: 'about text here'
};