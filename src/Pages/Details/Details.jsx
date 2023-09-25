import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const Details = () => {


    const [donatedetails,setdonatedetails] = useState ({});
 
    const {id} = useParams();

    const donate = useLoaderData();
   

    useEffect(()=>{
            const finddetails = donate?.find((donate1)=> donate1.id == id)


            setdonatedetails(finddetails);


    },[id,donate])

  
     
    const {title,picture,price,card_bg_color,text_color,btn_bg_color,description} = donatedetails || {}

    const adddonation = () =>{

        const donationlist = [] ;
    
        const donatelist = JSON.parse(localStorage.getItem('list'))
    
        if (!donatelist){
             
            donationlist.push(donatedetails)
            localStorage.setItem('list',JSON.stringify(donationlist))
            return toast('Thankyou for Donation');
            
        }
        else{
            donationlist.push(...donatelist,donatedetails)
            localStorage.setItem('list',JSON.stringify(donationlist))
            return toast('Thankyou for Donation');

        }
    
       }


    return (
 <div>
      <div  style={{backgroundColor:card_bg_color,color:text_color}} className="relative flex w-69 flex-col rounded-xl mt-5 bg-clip-border text-gray-700 shadow-md">
    
        <div  className="relative  h-[400px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            className="h-full w-full object-cover relative"
          />
        </div>
        <div className="p-2 pt-2 h-10 hover:bg-white">
          <button onClick={adddonation}
             style={{backgroundColor:btn_bg_color,color:text_color}} className="block absolute ml-60 mt-2 mb-2 text-white w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
           Donation ${price}
          </button>
        </div>
        <div className="p-2 mb-2">
          <div className=" mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block ml-60 mt-2 text-5xl font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {title}
            </p>
      
          </div>
        </div>
        <div className="p-2">
          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block text-black font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {description}
            </p>
      
          </div>
        </div>
       
      </div>
    
        
 </div>
     
    );
};

export default Details;