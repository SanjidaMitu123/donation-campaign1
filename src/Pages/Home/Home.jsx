import { useLoaderData } from "react-router-dom";
import Banner from "../../assets/Components/Header/Banner";
import MainCart from "../../assets/MainCart/MainCart";

const Home = () => {


     const donations = useLoaderData();
     console.log(donations);



    return (
        <div>
           <Banner donations={donations} ></Banner>  
           <MainCart donations={donations}></MainCart>
        </div>
    );
};

export default Home;