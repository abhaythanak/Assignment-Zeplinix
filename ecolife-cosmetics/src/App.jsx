import Navbar from "./Components/Navbar/Navbar"
import './App.css'
import Hero from "./Components/Hero/Hero"
import Cards from "./Components/Cards/Cards"
import ProductAds from "./Components/ProductAds/Productads"
import Deals from "./Components/Deals/Deals"
import Offer from "./Components/Offer/Offer"
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <>
    <div className="flex items-center justify-center"><Navbar/></div>
    <Hero/>
    <Cards Title={"Best Sellers"} heading={"Add bestselling products to weekly line up"}/>
    <ProductAds/>
    <Deals/>
    <Offer/>
    <Cards Title={"New Arrivals"} heading={"Add New products to weekly line up"} />
    <Footer/>
    
      
    </>
  )
}

export default App
