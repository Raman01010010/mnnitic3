import React from 'react'
import Commite from './Commite'
import Comdata from './Comdata.json'
function Com() {
  return (
    <div>




<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Our Team
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them.
      </p>
    </div>
    <div className="flex flex-wrap -m-2">



      


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
  </div>
</section>







    </div>
  )
}

export default Com
