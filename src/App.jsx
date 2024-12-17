import './App.css'
import Advertisement from './components/Advertisement'
import Customised from './components/Customised'
import Explore from './components/Explore'
import ExploreInternational from './components/ExploreInternational'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import TopDestinations from './components/TopDestinations'

function App() {

  return (
<>
<NavBar/>
<Hero/>
<Explore/>
<TopDestinations/>
<Customised/>
<ExploreInternational/>
<Advertisement/>
<Footer/>
</>
  )
}

export default App
