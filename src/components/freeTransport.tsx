import { Car } from "iconsax-react";

const FreeTransport = () => {

    return ( 
        <div className="bg-red-500 w-full h-40 px-2 shadow rounded z-20 mb-2 mt-2 flex items-center">
            <Car size={84} color="#fff" className="w-1/6"/>
            <div className="w-5/6 pl-3">
                <h1 className="text-white md:text-4xl font-semibold mb-2">Free Transport !</h1>
                <h5 className="text-white md:text-2xl">For the first purchase from this store</h5>
            </div>
        </div>
     );
}
 
export default FreeTransport;