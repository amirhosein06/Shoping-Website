import { useContext } from "react";
import Context from "./context/context";
import SkeletoProduct from "./skletonProduct";
import Product from "./product";
import { Category2,ArrowRight } from "iconsax-react";

const BrowsProduct = () => {
    const context = useContext(Context);

    return ( 
        <div className="w-full h-[104rem] md:h-[44rem] px-2 shadow rounded z-20 mb-2 bg-white mt-2 overflow-hidden">
         <div className="w-full h-[4rem] flex items-center justify-between pl-1">
         <div className="flex items-center">
         <Category2 size={24} color="#18181b"/>
         <h1 className="ml-3 text-xl font-normal text-zinc-800">browse to products</h1>
         </div>
         <a href="/products" className="bg-zinc-900 w-4/12 md:w-2/12 h-2/3 gap-1 md:gap-3 text-white rounded justify-center flex items-center">See More  <ArrowRight size={20} color="#fff"/></a>
        </div>
        <div className="h-[100rem] md:h-[40rem] grid grid-cols-2 md:grid-cols-5 gap-3 grid-rows-5 md:grid-rows-2 pb-2">
        {context?.data.length === 0 ? (
           <>
            {Array(10).fill(null).map(()=>(
            <SkeletoProduct />
           ))}
           </>
        ) : 
         context?.data[7] !== undefined && (
            <>
            {[0,1,2,3,4,5,6,7,8,9].map((index : number)=>(
             <Product product={context?.data[index]}/>
           ))}
            </>
         )
        }
        </div>
        </div>
     );
}
 
export default BrowsProduct;