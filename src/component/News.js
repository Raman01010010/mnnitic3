import notification from '../data/notification.json'
import Test from './Test'
export default function News(){
    return(<>
    <section className="bg-cyan-200 rounded-lg text-gray-600 body-font">
      
    <div className="bg-cyan-200 flex flex-col">
        <div className="h-1 bg-cyan-200  rounded overflow-hidden">
          <div className="w-full h-full bg-indigo-500" />
        </div>
        <div className="flex-wrap sm:flex-row flex-col py-6 mb-4">
          <h1 className="ml-auto mr-auto sm:w-2/5 text-gray-800 font-medium title-font text-2xl mb-2 sm:mb-0  ">
            Notifications
            
          </h1>
         
        </div>
        
      </div>
  <div className="container px-5 pb-12 mx-auto">
    
    <div className="ml-auto mr-auto flex flex-wrap -m-2">
{notification.map(item=>{
    return(<>

     <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="transition ease-in-out hover:scale-110 hover:delay-300 hover:shadow-2xl hover:text-white hover:bg-sky-950 hover:rounded-lg h-full bg-gray-900 flex  border-gray-200 border p-4 rounded-lg">
          <div className="text-left flex-grow">
            <h2 className="text-gray-300 text-xl text-center title-font font-medium">
             {item.new?<img  src="https://img.icons8.com/?size=2x&id=gYUwOUXlHung&format=gif"/>:""}
             {item.head}
           
            </h2>
           
            <p className="text-gray-300">{item.description}</p>  
            <div class="text-center">  <button class="bg-gray-200 text-black rounded-lg p-1">{item.link_name}</button></div>
          
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