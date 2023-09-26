
import { useEffect, useState } from "react"
import { Chart } from "react-google-charts"


const Statistics = () => {

  const [donationlistview,setdonationlistview] = useState ([])
  const [nodata,setnodata] = useState ("")
  const [totald,settotald] = useState (0)
   console.log(donationlistview)
   console.log(nodata)
   
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
 
   const data = [
    ["Task", "Hours per Day"],
    ["Total Donation", 1200],
    ["My Donation"  , 550 ],
  
  ];
  
   const options = {
    title: "Statistic",
  };
  
  
    return (
      <div><h1 className="text-2xl text-center">My Total Donation : $ {totald} </h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"700px"}
        height={"700px"}
      />
      </div>
    );
  }

export default Statistics;

