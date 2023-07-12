import React from 'react'
import Conferencetopic from './Conferencetopic'
import Conference from './Conference'
function Confe() {
  return (
    <div className='my-3'>
        <div style={{backgroundColor:"#0f0b01"}}>
       <h1 style={{fontSize:"50px" , marginLeft:"33%",marginTop:"50px",color:"#ebe9e6"}}>Conferences Topic</h1>
       </div>
       <div style={{color: "#6e0f17",backgroundColor: "#d7d1f2"}}> 
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
