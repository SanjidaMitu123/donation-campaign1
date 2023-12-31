import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
// import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";


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
            swal('Thankyou for Donation');
            
        }
        else{


            const similer = donatelist.find(donatedetails => donatedetails.id == id )
             if(!similer){

           
            donationlist.push(...donatelist,donatedetails)
            localStorage.setItem('list',JSON.stringify(donationlist))
            swal ('Thankyou for Donation');
            }
        else{
            swal ('you can donate one div once')
            }
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
        <div className="p-2 mt-[-55px] pt-2  h-14 hover:bg-[#0B0B0B80] relative">
          <button onClick={adddonation}
              className="block absolute ml-60 bg-[#FF444A] mt-2 mb-2 text-white w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
           Donation ${price}
          </button>
        </div>
        <div className="p-2 mb-2">
          <div className=" mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block ml-60 mt-2 text-5xl text-black font-sans ml-[-15px] font-medium leading-relaxed text-blue-gray-900 antialiased">
            {title}
            </p>
      
          </div>
        </div>
        <div className="p-2">
          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {description}
            </p>
      
          </div>
        </div>
       
      </div>
    
        
 </div>
     
    );
};

export default Details;