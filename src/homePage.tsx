import Navbar from "./components/navbar"
import Slides from "./components/slides"
import SuggestedProduct from "./components/SuggestedProduct"

const HomePage = () => {
    return ( 
        <>
        <Navbar />
        <div className="w-full md:px-5">
        <Slides />
        <SuggestedProduct />
        </div>
        </>
     );
}
 
export default HomePage;