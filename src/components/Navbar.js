import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  render() {
    return (
      <div id='navbar_main' className="position-fixed top-0 start-0 end-0">
        <nav className="navbar navbar-expand-md navbar-dark bg-black">
          <Link className="navbar-brand" to="#"><p className="text-secondary me-3 m-0">NewsAPI</p></Link>
          <button style={{border:'2px solid white',background:'dark'}} className="navbar-toggler" type="button" data-toggle='collapse'  data-target="#navbar_Nav" aria-controls="navbaar">
                            {/* ADDED BLACK BG AND BORDER TO THE TOGGLE BUTTON TO MAKE INVISIBLE FOR NOW,USE IT LATER. */}
            <span className="navbar-toggler-icon bg-dark"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbaar">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link id='home' className="nav-link" to="/"><p style={{fontWeight:'bold',margin:0,marginLeft:30}} className={this.props.home}>Home</p></Link>
              </li>
              <li className="nav-item">
                <Link id='business' className="nav-link" to="/business"><p style={{fontWeight:'bold',margin:0,marginLeft:30}} className=''>Business</p></Link>
              </li>
              <li className="nav-item">
                <Link id='sports' className="nav-link" to="/sports" ><p style={{fontWeight:'bold',margin:0,marginLeft:30}} className=''>Sports</p></Link>
              </li>
              <li className="nav-item">
                <Link id='science' className="nav-link" to="/science" ><p style={{fontWeight:'bold',margin:0,marginLeft:30}} className=''>Science</p></Link>
              </li>
              <li className="nav-item">
                <Link id='technology' className="nav-link" to="/technology" ><p style={{fontWeight:'bold',margin:0,marginLeft:30}}  className=''>Technology</p></Link>
              </li>
              <li className="nav-item">
                <Link id='health' className="nav-link" to="/health" ><p style={{fontWeight:'bold',margin:0,marginLeft:30}} className=''>Health</p></Link>
              </li>
              <li className="nav-item">
                <Link id='entertainment' className="nav-link" to="/Entertainment" ><p style={{fontWeight:'bold',margin:0,marginLeft:30}} className=''>Entertainment</p></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}