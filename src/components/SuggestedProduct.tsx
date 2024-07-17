import { useContext } from "react";
import Context from "./context/context";
import { MedalStar } from "iconsax-react";
import Product from "./product";
import SkeletoProduct from "./skletonProduct"

const SuggestedProduct = ({}) => {
    const context = useContext(Context);
    console.log(context?.data);
    
    return ( 
        <div className="w-full h-80 px-2 shadow rounded z-20 mb-10 bg-white mt-2">
        <div className="w-full h-1/5 flex items-center pl-1">
         <MedalStar size={24} color="#18181b"/>
         <h1 className="ml-3 text-xl font-normal text-zinc-800">Suggested Products</h1>
        </div>
        <div className="h-4/5 flex justify-between pb-2">
        {context?.data.length === 0 ? (
           <>
           <SkeletoProduct />
           <SkeletoProduct />
           <SkeletoProduct />
           <SkeletoProduct />
           <SkeletoProduct />
           </>
        ) : 
         context?.data[7] !== undefined && (
            <>
            <Product product={context?.data[7]}/>
            <Product product={context?.data[2]}/>
            <Product product={context?.data[24]}/>
            <Product product={context?.data[13]}/>
            <Product product={context?.data[20]}/>
            </>
         )
        }
        </div>
        </div>
     );
}
 
export default SuggestedProduct;