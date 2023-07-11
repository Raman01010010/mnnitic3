import React from 'react'
function About1(props) {
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

export default About1
