import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar.js'
import News from './components/News';
import Gift from './components/gift';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";


// 
export default class App extends Component {
  render() {
    return (
      <>
        <createBrowserRouter>
          <div className='bg-dark'>
            <Navbar />
            <div style={{height:'40px',width:'100%'}} className='d-flex justify-content-center my-3 align-items-center'>
              <p className='display-5 text-primary mt-4 mb-3 fw-bold mx-auto'>Trending</p>
            </div>

            <Routes>
              <Route path='/' element={<News key='home' category='general' />} />
              <Route path='/business' element={<News key='business' category='business' />} />
              <Route path='/sports' element={<News key='sports' category='sports' />} />
              <Route path='/science' element={<News key='science' category='science' />} />
              <Route path='/technology' element={<News key='technology' category='technology' />} />
              <Route path='/health' element={<News key='health' category='health' />} />
              <Route path='/entertainment' element={<News key='entertainment' category='entertainment' />} />
            </Routes>
            {/* <News/> */}
          </div>
        </createBrowserRouter>
        
      </>
    )
  }
}