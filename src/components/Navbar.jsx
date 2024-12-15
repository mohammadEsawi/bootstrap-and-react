import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg text-white backgroundNav " >
  <div className="container-fluid">
    <a className="navbar-brand text-white fw-bold me-10" href="#">Start Bootstrap
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse me-10" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link  text-white" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">CONTACT</a>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>

  )
}
