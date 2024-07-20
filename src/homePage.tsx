import BrowsProduct from "./components/browsProduct"
import Categories from "./components/categories"
import FreeTransport from "./components/freeTransport"
import Slides from "./components/slides"
import SuggestedProduct from "./components/SuggestedProduct"

const HomePage = () => {
    return ( 
        <>
        <div className="w-full md:px-5">
        <Slides />
        <SuggestedProduct />
        <Categories />
        <BrowsProduct />
        <FreeTransport />
        </div>
        </>
     );
}
 
export default HomePage;