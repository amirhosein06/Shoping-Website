import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect,useState } from "react"
import axios from "axios"
import { Route,Routes } from "react-router-dom"
import Context from './components/context/context'
import HomePage from './homePage'

interface productType {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

function App() {
  const [data, setData] = useState<productType[]>([]);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        
        
      } catch (error : any) {
        console.error(error.message);
        alert("network eror ! pleace check the conection")
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
// api2 : https://fakestoreapi.com/docs
// api3 : https://fakestoreapi.in/docs