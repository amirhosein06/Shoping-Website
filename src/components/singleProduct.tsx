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

const SingleProduct = () => {
    const routeParams = useParams();
    const context = useContext(Context);
    const productId : string | undefined = routeParams?.id;
    const targetProduct : productType | undefined = context?.data[Number(productId) - 1] ?? undefined;
    const checkCartAdd : boolean | undefined = targetProduct !== undefined ? context?.cart.includes(targetProduct.id) : undefined;  

    const addingToCart = (event : any)=>{
        event.preventDefault();
        event.currentTarget.classList.remove("bg-zinc-800");
        event.currentTarget.classList.remove("hover:bg-zinc-950");
        event.currentTarget.classList.add("bg-green-700");
        event.currentTarget.innerHTML = "Aded";
        event.target.disabled = true;
        context?.setcart([...context.cart,targetProduct?.id]);
      }

    return ( 
        <div className="w-full h-[105rem] md:h-[51rem] md:px-5 py-4 px-1">
            <div className="w-full h-[40rem] md:h-[25rem] grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 grid-rows-3">
            <div className="h-full rounded-md overflow-hidden flex items-center justify-center bg-white shadow-lg col-span-1 row-span-1"><img className="w-auto h-full" src={targetProduct?.image} alt={targetProduct?.title} /></div>
            <div className="h-full md:pl-7 flex justify-end flex-col items-start col-span-2 md:row-span-1 row-span-2">
               <a href={`/categories/${targetProduct?.category}`} className="bg-red-300 text-sm p-1 rounded-lg">{targetProduct?.category}</a>
               <h1 className="my-4 text-3xl w-full font-medium overflow-hidden whitespace-nowrap overflow-ellipsis">{targetProduct?.title}</h1>
               <p className="h-3/6 text-zinc-800">
                {targetProduct?.description}
               </p>
               <div className="flex md:gap-0 gap-3 md:items-center w-full flex-col md:flex-row">
                <h2 className="w-1/4 font-semibold text-3xl">${targetProduct?.price}</h2>
                <button disabled={checkCartAdd ? true : false} onClick={addingToCart} className={`${checkCartAdd ? "bg-green-700" : "bg-zinc-800 hover:bg-zinc-950"} transition-colors text-white w-full md:w-3/4 rounded py-4`}>{checkCartAdd ? "Aded" : "Add To Cart"}</button>
               </div>
            </div>
            </div>
            <div className="w-full py-[3rem] h-[65rem] md:h-[24rem] z-20 mb-2 mt-2 overflow-hidden">
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
            <Product product={Number(productId) - 1 < 7 ? context?.data[Number(productId) + 1] : context?.data[Number(productId) - 2]}/>
            <Product product={Number(productId) - 1 < 7 ? context?.data[Number(productId) + 2] : context?.data[Number(productId) - 3]}/>
            <Product product={Number(productId) - 1 < 7 ? context?.data[Number(productId) + 3] : context?.data[Number(productId) - 4]}/>
            <Product product={Number(productId) - 1 < 7 ? context?.data[Number(productId) + 4] : context?.data[Number(productId) - 5]}/>
            <Product product={Number(productId) - 1 < 7 ? context?.data[Number(productId) + 5] : context?.data[Number(productId) - 6]}/>
            </>
         )
        }
        </div>
        </div>
        </div>
     );
}
 
export default SingleProduct;