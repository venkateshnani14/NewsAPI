import React, { Component, useState } from 'react'
import loading_gif from './loading_gif.gif'

let imagestyle = {
  height:'50px' ,
  width:'50px'
}
export default class Gift extends Component {
  render() {
    return (
      <div className='mt-5'>
      <img src = {loading_gif} alt = 'Loading animation' style={imagestyle}/>
      </div>
    )
  }
}









