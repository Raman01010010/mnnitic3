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
     <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={props.src}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
       
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {props.topicname}
        </h1>
        <div className="flex mb-4">
        </div>
        <p className="leading-relaxed">
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


