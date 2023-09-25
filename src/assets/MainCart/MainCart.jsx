

import Donationcart from "./Donationcart";

// eslint-disable-next-line react/prop-types
const MainCart = ( {donations} ) => {
    console.log(donations);
    return (
        <div >
            <div className="grid grid-cols-1  md: grid-cols-2 lg:grid-cols-4 gap-4">
                {

                    // eslint-disable-next-line react/prop-types
                    donations?.map ((donation)=> <Donationcart key={donation.id} donation={donation}></Donationcart>
                  
                    
                    
                    )
                    
                  
                }
            </div>
        </div>
        
    );
};

export default MainCart;