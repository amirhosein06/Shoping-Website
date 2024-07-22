import { useParams } from "react-router-dom";
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

const SearchProduct = () => {
    const routeParams = useParams();  
    const context = useContext(Context);
    const searchValue : string | undefined = routeParams.value?.toLowerCase();
    const filteredData : productType[] | undefined = context?.data.filter(u => u.title.toLowerCase().includes(searchValue ? searchValue : ""));

    return ( 
           <div>
        <div className="w-full h-14 flex items-center pl-7 text-xl font-normal bg-white mt-3 ">"{routeParams.value}"</div> 
        <div className="w-full grid grid-cols-2 md:grid-cols-5 bg-white p-4 gap-3 *:h-80 *:md:h-96">
        {
            filteredData === undefined ? (
                <>
                <SkeletoProduct />
                <SkeletoProduct />
                <SkeletoProduct />
                <SkeletoProduct />
                <SkeletoProduct />
                </>
            ) : filteredData.map((item : productType)=>(
                <Product product={item}/>
            ))
        }
       </div> 
    </div>
     );
}
 
export default SearchProduct;