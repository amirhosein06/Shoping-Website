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
    data : productType[]
}

const Context = createContext<contextype | null>(null);
 
export default Context;