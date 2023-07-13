import data from '../data/data.json'
import Headline from './Headline'
export default function Colaborators(){
    return(<>
      <Headline text={"Colaborators"}/>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">

    <div className="flex flex justify-center items-center flex-wrap -m-4">


{data.colaborators.map(item=>{
  return(<>
  </>)
})}

      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src="https://dummyimage.com/200x200"
          />
        
        </div>
      </div>
   




    </div>
  </div>
</section>



</>)
}