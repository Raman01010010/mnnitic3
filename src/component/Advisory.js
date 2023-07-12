import data from '../data/data.json'
import Headline from './Headline'
function Temp(props){
    return(<>
    <section className="text-gray-400 bg-gray-900 body-font">
       
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
     {props.item.cat}
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them.
      </p>
    </div>
    <div className="flex-row flex flex-wrap flex justify-center items-center -m-4">
      

{props.item.persons.map(i=>{
    return(<>
     <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src={i.image}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">
              {i.name}
            </h2>
            <h3 className="text-gray-500 mb-3">{i.organization}</h3>
            <p className="text-gray-900 mb-4">
              
            </p>
          
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
export default function Advisory(){
    return(<>
    <Headline text={"Advisory Committee"}/>
    {data.advisory.map(item=>{
        return(<><Temp  item={item}/></>)
    })}
   </>)
}