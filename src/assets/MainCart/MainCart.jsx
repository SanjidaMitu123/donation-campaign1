import Donationcart from "./Donationcart";

const MainCart = ( {donations} ) => {
    console.log(donations);
    return (
        <div >
            <div className="grid grid-cols-1  md: grid-cols-2 lg:grid-cols-4 gap-4">
                {


                    donations?.map ((donation)=>
                    ( <div key={donation.id} className="relative flex w-69 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 mt-4 h-36 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                          <img
                            src={donation.picture}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-2 pt-2">
                          <button
                            className="block bg-indigo-500 text-white w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                          >
                            {donation.category}
                          </button>
                        </div>
                        <div className="p-2">
                          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
                            <p className="block font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {donation.title}
                            </p>
                      
                          </div>
                        </div>
                      </div>
                    )
                    
                    
                    )
                    
                  
                }
            </div>
        </div>
        
    );
};

export default MainCart;