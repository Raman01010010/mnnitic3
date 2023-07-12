import data from '../data/data.json'
export default function Colaborators(){
    return(<>
   <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Master Cleanse Reliac Heirloom
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">

{data.colaborators.map(item=>{
    return(<>
     <div className="lg:w-1/3 sm:w-1/2  p-4">
        <div className="flex relative h-80 w-80">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={item.image}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-white mb-3">
              {item.name}
            </h1>
            <a href={item.link}>Click Here for more</a>
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