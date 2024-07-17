import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect,useState } from "react"
import axios from "axios"
import { Route,Routes } from "react-router-dom"
import Context from './components/context/context'
import HomePage from './homePage'

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

function App() {
  const [data, setData] = useState<productType[]>([]);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setData(response.data);
        
      } catch (error : any) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <Context.Provider value={{data}}>
      <Routes>
      <Route path='/' Component={HomePage} />
      </Routes>
    </Context.Provider>
    </>
  )
}

export default App
// api : https://api.escuelajs.co/api/v1/products