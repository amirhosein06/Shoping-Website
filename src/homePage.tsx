import BrowsProduct from "./components/browsProduct"
import Categories from "./components/categories"
import Footer from "./components/footer"
import FreeTransport from "./components/freeTransport"
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
        <Categories />
        <BrowsProduct />
        <FreeTransport />
        </div>
        <Footer />
        </>
     );
}
 
export default HomePage;