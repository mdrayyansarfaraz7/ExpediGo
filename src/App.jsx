import './App.css'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar'


function App() {

  return (
<>
<NavBar/>
<Outlet/>
<Footer/>
</>
  )
}

export default App
