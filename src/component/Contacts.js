export default function Contacts(){
    return(
        <>
    <section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
       Reaching Us
      </h1>
  
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </div>
        <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
          Contact Us
        </h2>
        <p className="leading-relaxed text-base mb-4">
      
          Motilal Nehru National Institute of Technology Allahabad
Prayagraj - 211004, INDIA

Telephone No.: 91-0532-2545404, 2545407 

Fax No.: 91-0532-2545341

Email: secretary@mnnit.ac.in
        </p>
       
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </div>
        <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
         Visit Us
        </h2>
        <p className="leading-relaxed text-base mb-4">
        Motilal Nehru National Institute of Technology (MNNIT)
Teliarganj, Prayagraj (Allahabad),
Uttar Pradesh 211004
India
        </p>
       
      </div>
      
    </div>

  </div>
</section>


</>
    )
}