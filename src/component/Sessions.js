import data from '../data/data.json'
import Headline from './Headline'
export default function Sessions(){
    return(<>
     <Headline text={"Sessions"}/>
    <section className="text-gray-400 bg-gray-100 body-font">
  <div className="container px-5 py-24 mx-auto">
    <a name="sessions"></a>
 
    <div className="flex flex-wrap flex justify-center items-center -mx-4 -my-8">
        {data.sessions.map(item=>{
            return(<>
              <div className="m-2 text-black bg-white-300 rounded-lg py-8  lg:w-1/3 transition ease-in-out hover:delay-200 hover:bg-gray-300 hover:text-white-100">
        <div className="h-full flex items-start mr-2">
       
       
          <div className="flex-grow pl-6">
         
          <h1 className="title-font text-xl font-medium  mb-3">
          <div className="ml-auto mr-auto w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className=" pb-2 mb-2 border-b-2 border-gray-700">
             {item.s1}
            </span>
            <span className="font-medium text-lg leading-none  title-font">
              {item.s2}
            </span>
          </div>
              {item.head}
            </h1>
            <h2 className="tracking-widest text-l title-font font-medium text-indigo-400 mb-1">
              Session Chair
            </h2>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/103x103"
                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium ">
                 {item.s_chair}
                </span>
              </span>
            </a>
            <h2 className="tracking-widest text-l title-font font-medium text-indigo-400 mb-1">
              Session Co-Chair
            </h2>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/103x103"
                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium">
                  {item.s_cchair}
                </span>
              </span>
            </a>
            <h2 className="tracking-widest text-l title-font font-medium text-indigo-400 mb-1">
              Contacts
            </h2>
            <p className="leading-relaxed mb-5">
              {item.contact}
            </p>
            <h2 className="underline tracking-widest text-xl title-font font-medium text-indigo-400 mb-1">
             <a href={item.link}> View More</a>
            </h2>
          </div>
        </div>
      </div>
            </>)
        })}
    
      
    
    </div>
  </div>
</section>
</>)
}