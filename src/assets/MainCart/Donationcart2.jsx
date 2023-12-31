
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Donationcart2 = ({donation}) => {

     
     
    //  console.log(donation);

      const {id,card_bg_color,text_color,picture,btn_bg_color,category,title,price} = donation || {}
    return (
        <div>
<div key={id} style={{backgroundColor:card_bg_color,color:text_color}} className="relative flex w-69 flex-col rounded-xl mt-5 bg-clip-border text-gray-700 shadow-md">
           <img
            src={picture}
            className="h-full w-full object-cover"
          />
    
        
        <div className="p-2 pt-2">
          <button
             style={{backgroundColor:btn_bg_color,color:text_color}} className="block text-white w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            {category}
          </button>
        </div>
        <div className="p-2">
          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {title}
            </p>
      
          </div>
          </div>
          <div className="p-2">
          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {price}
            </p>
      
          </div>
          </div>
          <Link to={`/donation/${id}`}>
          <div className="p-2 pt-2">
          <button
             style={{backgroundColor:btn_bg_color,color:text_color}} className="block text-white w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Show Details
          </button>
        </div>
        </Link>
      </div>
     </div>
    );
};

export default Donationcart2;