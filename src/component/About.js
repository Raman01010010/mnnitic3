import { Link } from 'react-router-dom'
import data from '../data/data.json'
import Headline from './Headline'
import { Element } from 'react-scroll'
export default function About(){
    return (
        <div id="about">
        <Headline text={"About"}/>
        <section className="text-gray-400 bg-gray-900 body-font">
        <a name="about"></a>
        <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {data.about.map(item=>{
        return(<>
        <div className="border-b-4 border-indigo-500 p-4 md:w-1/3 sm:mb-0 mb-6 mb-1 transition ease-in-out  hover:delay-800 hover:shadow-2xl hover:text-black hover:bg-cyan-300 hover:rounded-lg">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={item.image_url}
          />
        </div>
        <h2 className="text-xl font-medium title-font  mt-5">
          {item.heading}
        </h2>
        <p className="text-justify leading-relaxed mt-2">
         {item.body}
        </p> 
      </div>
    </>)})}
      
   </div>
    </div>
    </section>

    </div>
    
  )
}

