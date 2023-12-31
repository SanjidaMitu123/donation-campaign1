import { useEffect, useState } from "react";
import Donationcart from "../../../assets/MainCart/Donationcart";


const Donation = () => {

    const [donationlistview,setdonationlistview] = useState ([])
    const [nodata,setnodata] = useState ("")
    const [showall,setshowall] =useState(false)

    const [totald,settotald] = useState (0)

    useEffect(()=>{
        const donatelist = JSON.parse(localStorage.getItem('list'))
        if(donatelist){
            setdonationlistview(donatelist)

            const total = donatelist.reduce((preValue,currentValue)=> preValue + currentValue.price,0)
            settotald(total)
        }
        else{
            
            setnodata('Please Donate')
        }
    },[])

    console.log(donationlistview)
    return (
        <div>

            
           { nodata ? <p className="h-[80vh] flex justify-center items-center text-5xl">{nodata}</p> :
           
            <div>
                  <h1 className="text-xl text-center font-bold">Your Total Donation ${totald}</h1>
                <div className="grid grid-cols-2 gap-16 ">
                    {
                        showall? donationlistview.map((donation) => (
                <Donationcart key={donation.id} donation={donation} ></Donationcart>))
                :
                donationlistview.slice(0,4).map((donation) => (
                    <Donationcart key={donation.id} donation={donation} ></Donationcart>))

                    }
               
                </div>
              
              
              { donationlistview.length > 3 &&
                <button onClick={()=>setshowall(!showall)} className="px-5 p-2 mt-4 bg-[#009444] text-white block mx-auto rounded-md"> 
                { showall ? "Show Less": "Show All"} 
                </button>
              }

            </div>
           
           
           
           }
        </div>
    );
};

export default Donation;