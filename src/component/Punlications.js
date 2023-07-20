import data from '../data/data.json'
import Headline from '../component/Headline'

export default function Publications(){
    return (<>
    <div style={{backgroundColor:"#0f0b01"}}>
       <Headline text={"Publication"}/>
       </div>
    <a name="topics"></a>
    {data.publications.map((item, index) => {
        return (
          <div key={index} className="my-8">
            <section className="font-sans text-gray-200 text-justify bg-white text-gray-200 body-font overflow-hidden">
              <div className="font-sans container px-5 py-24 mx-auto">
                <div className="font-sans lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="font-sans lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src={item.image}
                  />
                  <div className="font-sans lg:w-1/2 w-full lg:pl-10 text-black lg:mt-0 transition delay-200 duration-600 hover:delay-800 hover:shadow-2xl hover:text-black hover:bg-gray-200 hover:rounded-lg">
                    <h1 className="font-sans text-3xl title-font font-medium mb-1">
                      {item.head}
                    </h1>
                    <div className="font-sans flex mb-4"></div>
                    <p className="font-sans mx-2 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
      
      
  
    </>
  
    
  );
}
