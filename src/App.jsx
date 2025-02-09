import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import PageHeader from './pageHeader/PageHeader'
import ContactUs from './pages/contact-us/contact'
import ServiceCard from './pages/services/ServiceCard'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import HomeRoute from './pages/Home/HomeRoute'
import AboutUs from './pages/aboutus/AboutUs'




function App() {
  
  return (
    
    <Router>
      <Navbar/> {/*this will dynamicly change per page */}
     <div className="content">
      <Routes>
     <Route path='/' element={<HomeRoute/>} />
     <Route path='/contact' element={<ContactUs/>} />
     <Route path='/services' element={<ServiceCard/>} />
     <Route path='/about' element={<AboutUs/>} />

      </Routes>
      
     </div>
     <Footer/>
    </Router>

  )
}

export default App
