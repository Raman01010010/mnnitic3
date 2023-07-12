import data from '../data/data'
export default function Speaker(){
    return (
        <>
        <section  className="text-gray-400 bg-gray-900 body-font">
          <a name="raman"></a>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-white">
        Speakers
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them.
      </p>
    </div>
    <div className="flex flex justify-center items-center flex-wrap -m-4">


{data.speaker.map(item=>{
  return(<>
     <div className="hover:text-black hover:bg-cyan-300 hover:rounded-lg p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-full w-full  object-cover object-center mb-4"
            src={item.image}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-white">
              {item.name}
            </h2>
            <h3 className="text-gray-500 mb-3">{item.organization}</h3>
            <p className=" mb-4 text-center">
          
            
             
            </p>
            <span className="inline-flex">
              <a className="text-gray-700">
                <svg
                  fill="none"
                
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  height={80}
                  width={80}
                  viewBox="0 0 24 24"
                >
                  <path xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
                </svg>
              </a>
            
            </span>
          </div>
        </div>
      </div>
  </>)
})}


   
     





    </div>
  </div>
</section>
</>
    )
}