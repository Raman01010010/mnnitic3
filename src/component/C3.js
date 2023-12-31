
import C2 from "./C2"
import Test from "./Test"
import data from '../data/data.json'
export default function C3(){
    return (<>
    <section className=" bg-white-800 text-gray-600 body-font">
  <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <Test/>
     <C2/>
    
    </div>
    <div className="lg:flex-grow ml-4 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font font-sans sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
      {data.title.title}

      </h1>
    
      <p className="text-gray-600 mb-8 leading-relaxed">
      {data.title.date}<br/> {data.title.venue}

      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Register Now
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button>
      </div>
    </div>
  
  </div>
</section>
</>)
}