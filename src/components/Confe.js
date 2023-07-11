import React from 'react'
import Conferencetopic from './Conferencetopic'
import Conference from './Conference'
import './Conf.css'
function Confe() {
  return (
    <div>
       <h1 style={{fontSize:"50px" , marginTop:"50px",color:"#5e06097",backgroundColor:"#8c8ed1"}}>Conferences Topic</h1>
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
