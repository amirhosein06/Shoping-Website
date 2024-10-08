import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect,useState } from "react"
import axios from "axios"
import { Route,Routes } from "react-router-dom"
import Context from './components/context/context'
import HomePage from './homePage'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import SingleProduct from './components/singleProduct'
import Loading from './components/loading'
import CategoriPage from './components/categoriPage'
import AllProduct from './components/allProduct'
import About from './components/about'
import SearchProduct from './components/searchonProduct'
import Cart from './components/cart/cart'
import NotFound from './components/notFound'

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
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setcart] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        
        
      } catch (error : any) {
        console.error(error.message);
        alert("please check the conection and refresh the page")
      }
    }
    fetchData();
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(()=>{
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage === null) {
      const stringofCart = JSON.stringify(cart);
      localStorage.setItem("cart",stringofCart);
    }else{
      if (cart.length === 0) {
        const parsedStorage = JSON.parse(cartStorage);
        setcart(parsedStorage);
      }else{
        const stringofCart = JSON.stringify(cart);
        localStorage.setItem("cart",stringofCart);
      }
    }
  })
  
  if (loading) {
    return <Loading/>
  }

  return (
    <>
    <Context.Provider value={{data,cart,setcart}}>
      <Navbar />
      <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/about' Component={About} />
      <Route path='/products/:id' Component={SingleProduct} />
      <Route path='/products' Component={AllProduct} />
      <Route path='/categories/:category' Component={CategoriPage} />
      <Route path='/search/:value' Component={SearchProduct} />
      <Route path='/cart' Component={Cart} />
      <Route path='*' Component={NotFound} />
      </Routes>
      <Footer />
    </Context.Provider>
    </>
  )
}

export default App