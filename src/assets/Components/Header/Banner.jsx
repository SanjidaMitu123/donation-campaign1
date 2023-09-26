import {  useState } from "react";





const Banner = () => {

  const [searchvalue,setsearchvalue] = useState ("");
  // const [searchdata,setsearchdata] = useState ([]);

     
  const changevalue = (value) =>{
    setsearchvalue(value);

  }
    return (
        <div className="mt-[-130px] h-[450px] lg:w-[100%] sm:[100%]]">
            <div className=" hero  h-[450px] mt-6" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1353332258/photo/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-standing-against-the-wall.jpg?s=1024x1024&w=is&k=20&c=UfQbrpSOsJU2zmGwBoEHAr6rUbTR3BCBHVap6gof9eI=)'}}>
  <div className="hero-overlay bg-white bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className=" lg:text-4xl md:text-2xl sm:text-sm text-black ml-[-70px] font-bold lg:w-[600px]   ">I Grow By Helping People In Need</h1>
      <input type="text" value={searchvalue}  onChange={(event)=>{changevalue(event.target.value);}} placeholder="please write category name " className="input input-bordered w-full max-w-xs mt-7 rounded-sm " />
      <button  className="btn rounded-s text-white bg-[#FF444A]">Serach</button>
      <div>
  
      </div>
    </div>
  </div>
</div>
        
        </div>
    );
};

export default Banner;