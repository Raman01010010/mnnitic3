import React from 'react'
import './Conf.css'
function Conference(props) {
  return (
    <div>
      <div className="card">
        <img  style = {{height:"200px"}}src = {props.src} />
      <h1 style={{fontSize:"20px"}}> {props.topicname} </h1>
  <div className="container">
    <h4>
      <b>{props.attributes}</b>
    </h4>

  </div>
 </div>

    </div>
  )
}

export default Conference
