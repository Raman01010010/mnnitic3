export default function Headline(props) {
  return (
    <>
      <div className="bg-gray-200 flex flex-col">
       
        <div className="flex-wrap sm:flex-row flex-col py-6 mb-4">
          <h1 className="ml-auto mr-auto sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0  ">
            {props.text}
          </h1>
         
        </div>
        
      </div>
    </>
  );
}
