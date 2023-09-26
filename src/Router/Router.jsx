import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Home/Donation/Donation";
import Statistics from "../Pages/Home/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Pages/Details/Details";


const myRoute = createBrowserRouter([{


    path : "/",
    element : <MainPage> </MainPage>,
    errorElement : <ErrorPage></ErrorPage>,
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
            element : <Statistics></Statistics>,
            loader : ()=> fetch('/public/data.json')
        },
        {
            path : "/donation/:id",
            element : <Details></Details>,
            loader : ()=> fetch('/public/data.json')
            
        }
    ]

}]) 

export default myRoute;