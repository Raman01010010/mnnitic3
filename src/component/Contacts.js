export default function Contacts(){
    return(
        <>
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
  
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
     
      <div className="flex flex-col mb-10 lg:items-start items-center">
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
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">
            Contact Us
          </h2>
          <p className="leading-relaxed text-base">
          Motilal Nehru National Institute of Technology Allahabad
Prayagraj - 211004, INDIA

Telephone No.: 91-0532-2545404, 2545407 

Fax No.: 91-0532-2545341

Email: secretary@mnnit.ac.in


          </p>
        
        </div>
      </div>
    </div>
  </div>
</section>

</>
    )
}