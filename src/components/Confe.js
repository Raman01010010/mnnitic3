import React from 'react'
import Conferencetopic from './Conferencetopic'
import Conference from './Conference'
import Headline from '../component/Headline'
function Confe() {
  return (
    <div>
      <a name="confe"></a>
        <div style={{backgroundColor:"#0f0b01"}}>
       <Headline text={"Conference Topics"}/>
       </div>
       <div style={{color: "#6e0f17",backgroundColor: "white"}}> 
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
