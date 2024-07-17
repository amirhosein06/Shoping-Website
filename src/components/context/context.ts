import { createContext } from 'react';

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

interface contextype {
    data : productType[]
}

const Context = createContext<contextype | null>(null);
 
export default Context;