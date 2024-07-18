import { useContext } from "react";
import Context from "./context/context";
import { MedalStar } from "iconsax-react";
import Product from "./product";
import SkeletoProduct from "./skletonProduct"

const SuggestedProduct = ({}) => {
    const context = useContext(Context);
    
    return ( 
        <div className="w-full h-[64rem] md:h-[24rem] px-2 shadow rounded z-20 mb-2 bg-white mt-2 overflow-hidden">
        <div className="w-full h-[4rem] flex items-center pl-1">
         <MedalStar size={24} color="#18181b"/>
         <h1 className="ml-3 text-xl font-normal text-zinc-800">Suggested Products</h1>
        </div>
        <div className="h-[60rem] md:h-[20rem] grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-1 gap-3 pb-2">
        {context?.data.length === 0 ? (
           <>
           {Array(5).fill(null).map(()=>(
            <SkeletoProduct />
           ))}
           </>
        ) : 
         context?.data[7] !== undefined && (
            <>
            <Product product={context?.data[11]}/>
            <Product product={context?.data[2]}/>
            <Product product={context?.data[14]}/>
            <Product product={context?.data[12]}/>
            <Product product={context?.data[16]}/>
            </>
         )
        }
        </div>
        </div>
     );
}
 
export default SuggestedProduct;