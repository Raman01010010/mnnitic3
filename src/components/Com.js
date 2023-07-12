import React from 'react'
import Commite from './Commite'
import Comdata from './Comdata.json'
function Com() {
  return (
    <div>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">TECHNICAL PROGRAM COMMITTEE
</h1>
       
       {
        Comdata.map((element)=>{
            
            return(
                <Commite
                name = {element.name}
                degre = {element.degree}
                />
            )
            
        })
       }

    </div>
  )
}

export default Com
