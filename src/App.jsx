import './App.css'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar'
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
<>
<ScrollToTop />
<NavBar/>
<Outlet/>
<Footer/>
</>
  )
}

export default App
