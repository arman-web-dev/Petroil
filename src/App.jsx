import './App.css'
import About from './components/about/About'
import Banner from './components/banner/Banner'
import Brand from './components/brand/Brand'
import Cart from './components/cart/Cart'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Image from './components/imgG/Image'
import Map from './components/map/Map'
import NavBar from './components/navbar/NavBar'
import Service from './components/serviceSection/Service'
import Supplier from './components/supplier/Supplier'

function App() {

  return (
  <>
  <Header/>  
  <NavBar/>
  <Banner/>
  <Supplier/>
  <Image/>
  <Service/>
  <About/>
  <Brand/>
  <Cart/>
  <Map/>
  <Contact/>
  <Footer/>
  </>
  )
}

export default App
