export default function Headline(props){
    return(<>
     <div className="bg-gray-900 flex flex-col">
      <div className="h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500" />
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
         {props.text}
        </h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
          
        </p>
      </div>
    </div></>)
}