// import React from 'react'
// import './Conf.css'
// function Conference(props) {
//   return (
//     <div>
//       <div className="card">
//         <img  style = {{height:"200px"}}src = {props.src} />
//       <h1 style={{fontSize:"20px"}}> {props.topicname} </h1>
//   <div className="container">
//     <h4>
//       <b>{props.attributes}</b>
//     </h4>

//   </div>
//  </div>

//     </div>
//   )
// }

// export default Conference
import React from 'react'

function Conference(props) {
  return (
    <div >
     <section className="text-gray-800 body-font overflow-hidden">
  <div className="container py-4 mx-auto">
    <div className="lg:w-4/5 border-2 border-sky-500 hover:bg-gray-300  p-4 rounded-lg  mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={props.src}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 transition delay-200 duration-600 ease-in-out hover:delay-800 hover:shadow-2xl   hover:rounded-lg">
       
        <h1 className=" text-3xl title-font font-medium mb-1">
          {props.topicname}
        </h1>
        <div className="flex mb-4">
        </div>
        <p className="leading-relaxed text-justify">
          {props.attributes}
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Conference


