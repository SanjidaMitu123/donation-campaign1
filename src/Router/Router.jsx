import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Home/Donation/Donation";
import Statistics from "../Pages/Home/Statistics/Statistics";


const myRoute = createBrowserRouter([{


    path : "/",
    element : <MainPage> </MainPage>,
    children : [
        {
            path : "/",
            element : <Home> </Home>,
            loader : ()=> fetch('/public/data.json')
        },
        {
            path : "/donation",
            element : <Donation> </Donation>
        }
        ,
        {
            path : "/statistics",
            element : <Statistics></Statistics>
        }
    ]

}]) 

export default myRoute;