import { useContext } from "react";
import Context from "./context/context";
import Product from "./product";
import SkeletoProduct from "./skletonProduct";

interface productType {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

const AllProduct = () => {
    const context = useContext(Context);

    return ( 
        <div>
        <div className="w-full h-14 flex items-center pl-7 text-xl font-normal bg-white mt-3 ">All Products</div> 
        <div className="w-full grid grid-cols-2 md:grid-cols-5 bg-white p-4 gap-3 *:h-80 *:md:h-96">
        {
            context?.data.length === 0 ? (
                <>
                <SkeletoProduct />
                <SkeletoProduct />
                <SkeletoProduct />
                <SkeletoProduct />
                <SkeletoProduct />
                </>
            ) : context?.data.map((item : productType)=>(
                <Product product={item}/>
            ))
        }
       </div> 
    </div>
     );
}
 
export default AllProduct;