import { FC } from "react"

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
  
  const addingToCart = (event : any) : void=>{
    event.preventDefault();
    event.currentTarget.classList.remove("bg-zinc-800");
    event.currentTarget.classList.remove("hover:bg-zinc-950");
    event.currentTarget.classList.add("bg-green-700");
    event.currentTarget.innerHTML = "Aded";
    event.target.disabled = true;
  }

    return ( 
        <div className="w-full col-span-1 row-span-1 h-full shadow-md rounded p-1 border hover:-translate-y-1 transition-transform cursor-pointer">
          <div className="bg-white w-full h-3/5 flex items-center justify-center overflow-hidden rounded shadow border">
             <img src={product.image} alt={product.title} className="w-auto h-full" />
          </div>
          <div className="flex flex-col h-2/5">
          <div className="h-2/6 pt-3 ml-2 overflow-hidden text-base text-zinc-950 whitespace-nowrap overflow-ellipsis">{product.title}</div>
            <div className="w-1/2 flex items-center pl-3 text-xl font-medium h-2/6">${product.price}</div>
            <button onClick={addingToCart} className="bg-zinc-800 transition-colors hover:bg-zinc-950 text-white w-full h-2/6 rounded">Add To Cart</button>
          </div>
        </div>
     );
}
 
export default Product;