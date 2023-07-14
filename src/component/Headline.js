export default function Headline(props) {
  return (
    <>
      <div className="bg-gray-900 flex flex-col">
        <div className="h-1 bg-gray-800 rounded overflow-hidden">
          <div className="w-full h-full bg-indigo-500" />
        </div>
        <div className="flex-wrap sm:flex-row flex-col py-6 mb-4">
          <h1 className="ml-auto mr-auto sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0  ">
            {props.text}
          </h1>
         
        </div>
        
      </div>
    </>
  );
}
