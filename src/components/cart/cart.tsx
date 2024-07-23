import { useContext,useEffect,useState } from "react";
import Context from "./../context/context";
import CartProduct from "./cartProduct";
import { NoteRemove } from "iconsax-react";

const Cart = () => {
  const context = useContext(Context);
  const [total, settotal] = useState<number>(0);

  useEffect(()=>{
    let count = 0;
    context?.cart.map((item : number)=>{
        count += Number(context?.data[item - 1].price);
    });
    settotal(count);
  });
  const checkCart = ()=>{
    context?.setcart([]);
    localStorage.clear();
    settotal(0);
  }

    return ( 
        <div className="w-full mt-2 bg-white grid md:grid-cols-4 grid-cols-1">
            <div className={`${context?.cart.length !== 0 ? "opacity-100" : "opacity-70"} h-80 fixed left-0 bottom-0 bg-white md:w-11/12 md:relative md:gap-1 md:col-start-4 md:col-end-5 border shadow rounded md:my-3 md:ml-3 py-5 px-7 text-zinc-900 flex flex-col items-center justify-between font-normal text-2xl`}>
            ORDER SUMMARY
            <div className="w-full text-lg text-zinc-700 flex justify-between items-center"><span>Total:</span> <span>${total}</span></div>
            <div className="w-full text-lg text-zinc-700 flex justify-between items-center"><span>Estimate Shipping:</span> <span>$0.00</span></div>
            <span className="w-full h-[0.10rem] bg-zinc-400 rounded-sm"></span>
            <div className="w-full text-lg text-zinc-700 flex justify-between items-center"><span>Subtotal:</span> <span className="font-semibold">${total}</span></div>
            <button disabled={context?.cart.length !== 0 ? false : true} onClick={checkCart} className="disabled:opacity-70 disabled:pointer-events-none w-full h-10 text-base text-white rounded bg-red-700">Clear</button>
            <button disabled={context?.cart.length !== 0 ? false : true} onClick={checkCart} className="disabled:opacity-70 disabled:pointer-events-none w-full h-10 text-base text-white rounded bg-zinc-900">Checkout</button>
            </div>
            {context?.cart.length !== 0 ? (
                <div className="col-span-4 md:col-span-3 row-start-1 border-t border-zinc-400">
                    {
                        context?.cart.map((item : number,index : number)=>(
                            <CartProduct product={context?.data[item - 1]} cart={context.cart} setcart={context.setcart} key={index}/>
                        ))
                    }
                </div>
            ) : (<div className="col-start-2 col-end-4 row-start-1 flex items-center justify-center h-full text-zinc-800 gap-4"><NoteRemove size={24} color="#27272a"/>No products have been added</div>)
            }
        </div>
     );
}
 
export default Cart;