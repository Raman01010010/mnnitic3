import React from 'react'

function Commite(props) {
  return (
    <div>
      <section  className="text-gray-600 body-font">
  <div  className="container px-5 py-24 mx-auto">
    <div  className="flex flex-col text-center w-full mb-20">
    </div>
    <div  className="flex flex-wrap -m-2">
      <div  className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/80x80"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              {props.name}
            </h2>
            <p className="text-gray-500">{props.degre}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Commite
