 import data from  '../data/data.json'
 import Headline from './Headline'
 export default function Timeline(){
return(
    <>
    <section className="text-gray-600 body-font">
      <a name="time"></a>
    <div className="flex flex-col">
    
      
    </div>
<Headline text={"Timeline"}/>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    {data.timeline.map(item=>{
      return(<>
       <div className="transition ease-in-out  hover:delay-300 hover:hover:bg-gray-200 hover:rounded-lg flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
       
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-2 title-font font-medium text-sm">
        {item.id}
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
             <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font  mb-1 text-xl">
            {item.title}
          </h2>
          <p className="leading-relaxed">
            {item.start_data}-{item.end_data}
          </p>
        </div>
      </div>
    </div>
      </>)
    })}
   
  
  </div>
</section>
</>
)
}