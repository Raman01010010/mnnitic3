import data from '../data/data.json'
import Headline from './Headline'
export default function Colaborators(){
    return(<>
    <a name="collab"></a>
      <Headline text={"Colaborators"}/>
<section className="text-gray-400 bg-white body-font">
  <div className="container px-5 py-24 mx-auto">

    <div className="flex flex justify-center items-center flex-wrap -m-4">


{data.colaborators.map(item=>{
  return(<>
    <div className="p-4 rounded-lg lg:w-1/4 md:w-1/2 transition   ease-in-out hover:delay-800 hover:scale-105 hover:shadow-2xl  hover:bg-gray-200 hover:rounded-lg">
      <a href={item.link}>
      <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={item.image}
          />
        
        </div>
      </a>
       
      </div>
   
  </>)
})}

    




    </div>
  </div>
</section>



</>)
}