import React from 'react'
import Conferencetopic from './Conferencetopic'
import Conference from './Conference'
import './Conf.css'
function Confe() {
  return (
    <div>
        <div style={{backgroundColor:"#f2bcb8"}}>
       <h1 style={{fontSize:"50px" , marginLeft:"40%",marginTop:"50px",color:"#5e06097"}}>Conferences Topic</h1>
       </div>
       <div className='xyz'> 
      {
        Conferencetopic.map((element)=>{
           return(
            <Conference
            src = {element.src}
            topicname = {element.name}
            attributes = {element.content}
            />
           )
        })
      }
      </div>
    </div>
  )
}

export default Confe
