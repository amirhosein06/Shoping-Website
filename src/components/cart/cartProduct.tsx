import { FC } from "react";
import { Trash } from "iconsax-react";

interface productType {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}
interface productprops {
    product : productType,
    setcart: any,
    cart: number[]
}

const CartProduct: FC<productprops> = ({product,setcart,cart}) => {
    
    const removeProduct = ()=>{
        const filteredArray = cart.filter(u => u !== product.id);
        setcart(filteredArray);
        localStorage.clear();
        const stringofCart = JSON.stringify(filteredArray);
        localStorage.setItem("cart",stringofCart);
    }

    return ( 
    <div className="w-full h-40 p-3 flex justify-between items-center border-b border-zinc-400">
        <div className="flex w-5/6 h-full">
        <div className="bg-white shadow-md rounded w-1/2 min-w-1/2 md:w-1/6 h-full flex items-center justify-center overflow-hidden"><img src={product.image} alt={product.title} className="w-auto h-full"/></div>
        <div className="flex flex-col justify-between py-5 pl-5 w-1/2 md:w-5/6">
        <div className="md:text-xl whitespace-nowrap overflow-ellipsis overflow-hidden w-full h-1/2">{product.title}</div>
        <h3 className="font-medium md:text-2xl">${product.price}</h3>
        </div>
        </div>
        <button onClick={removeProduct} className="hover:bg-zinc-300 rounded-full size-10 transition-colors flex items-center justify-center"><Trash size={24} color="#FF8A65"/></button>
    </div> 
    );
}
 
export default CartProduct;