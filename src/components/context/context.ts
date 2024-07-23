import { createContext } from 'react';

interface productType {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

interface contextype {
    data : productType[],
    cart: number[],
    setcart: any
}

const Context = createContext<contextype | null>(null);
 
export default Context;