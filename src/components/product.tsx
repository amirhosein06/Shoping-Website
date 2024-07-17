import { FC } from "react"

interface productType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: {
      id: number,
      name: string,
      image: string
    },
    images: string[]
}
interface productprops {
    product : productType
}

const Product: FC<productprops> = ({product}) => {
    return ( 
        <div className="w-[19%] h-full shadow-md rounded p-1">
          <div className="w-full h-3/5 flex items-center justify-center overflow-hidden rounded">
             <img src={product.images[0]} alt={product.title} className="w-full h-auto" />
          </div>
          <div className="h-1/5 flex items-center text-lg ml-1 text-zinc-950">{product.title}</div>
          <div className="flex h-1/5">
            <button className="bg-zinc-800 hover:bg-zinc-900 text-white w-1/2 m-1 rounded">Add To Cart</button>
            <div className="w-1/2 flex items-center justify-center text-3xl font-medium">${product.price}</div>
          </div>
        </div>
     );
}
 
export default Product;