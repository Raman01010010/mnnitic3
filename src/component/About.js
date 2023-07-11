import data from '../data/data.json'
export default function About(){
    return (
        <>
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500" />
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
          About Us
        </h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
          
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
     

    


{data.about.map(item=>{
    return(<>

<div className="border-b-4 border-indigo-500 p-4 md:w-1/3 sm:mb-0 mb-6 mb-1 hover:shadow-2xl hover:text-black hover:bg-cyan-300 hover:rounded-lg">
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


    </>)
})}

    






      
    </div>
  </div>
</section>
</>
    )
}