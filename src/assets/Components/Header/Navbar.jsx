import { NavLink } from "react-router-dom";
import Logo from "./logo";


const Navbar = () => {
    return (
        <div>
            <nav className="lg:flex justify-between items-center relative ">
                <Logo></Logo>
                <ul className=" flex gap-6 mr-6  ">
                    <li>
                      
                      

                        <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                         >
                          Home
                       </NavLink>
                       </li>
                       <li>
                       <NavLink
                         to="/donation"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                         >
                          Donation
                       </NavLink>
                    </li>
                    <li>
                       <NavLink
                         to="/statistics"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                         >
                          Statistics
                       </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;