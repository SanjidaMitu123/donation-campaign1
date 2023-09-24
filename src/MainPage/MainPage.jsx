import { Outlet } from "react-router-dom";
import Navbar from "../assets/Components/Header/Navbar";


const MainPage = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-[50px]">
          <Navbar></Navbar>
          <Outlet> </Outlet> 
        </div>
        
    );
};

export default MainPage;