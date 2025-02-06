import Footer from './components/footer/Footer'
import cardsData from './components/hero/CardsData'
import HeroCards from './components/hero/Hero'
import HomeCard from './components/HomeCard'
import NavBar from './components/navbar/NavBar'

import './App.css'




function App() {
  
  return (
    <>
      <NavBar/>
      <HeroCards items={cardsData}/>
      <HomeCard/>
      <Footer/>
    </>
  )
}

export default App
