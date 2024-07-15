import Navbar from "./components/navbar"
import Slides from "./components/slides"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect } from "react"
import axios from "axios"

function App() {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        console.log(response.data);
        
      } catch (error : any) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Slides />
      <Skeleton circle={false} height={50}/>
    </>
  )
}

export default App
// api : https://api.escuelajs.co/api/v1/products