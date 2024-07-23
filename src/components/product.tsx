import { FC } from "react";
import { useContext } from "react";
import Context from "./context/context";

interface productType {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}
interface productprops {
    product : productType
}

const Product: FC<productprops> = ({product}) => {
  const context = useContext(Context);
  const checkCartAdd : boolean | undefined = context?.cart.includes(product.id);  
  
  const addingToCart = (event : any) : void=>{
    event.preventDefault();
    event.currentTarget.classList.remove("bg-zinc-800");
    event.currentTarget.classList.remove("hover:bg-zinc-950");
    event.currentTarget.classList.add("bg-green-700");
    event.currentTarget.innerHTML = "Aded";
    event.target.disabled = true;
    context?.setcart([...context.cart,product?.id]);
  }
  const forwardToProduct = () : void =>{
    window.location.assign(`/products/${product.id}`);
  }

    return ( 
        <div className="bg-white z-30 w-full col-span-1 row-span-1 h-full shadow-md rounded p-1 border hover:-translate-y-1 transition-transform cursor-pointer">
          <div onClick={forwardToProduct} className="bg-white w-full h-3/5 flex items-center justify-center overflow-hidden rounded shadow border">
             <img src={product.image} alt={product.title} className="w-auto h-full" />
          </div>
          <div className="flex flex-col h-2/5">
          <div onClick={forwardToProduct} className="h-2/6 pt-3 ml-2 overflow-hidden text-base text-zinc-950 whitespace-nowrap overflow-ellipsis">{product.title}</div>
            <div onClick={forwardToProduct} className="w-1/2 flex items-center pl-3 text-xl font-medium h-2/6">${product.price}</div>
            <button disabled={checkCartAdd ? true : false} onClick={addingToCart} className={`z-40 ${checkCartAdd ? "bg-green-700" : "bg-zinc-800 hover:bg-zinc-950"} transition-colors text-white w-full h-2/6 rounded`}>{checkCartAdd ? "Aded" : "Add To Cart"}</button>
          </div>
        </div>
     );
}
 
export default Product;