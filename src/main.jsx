import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import CallNow from './components/CallNow.jsx'
import SeeAll from './pages/SeeAll.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="" element={<Home/>}/>
    <Route path="AboutUs" element={<AboutUs/>}/>
    <Route path="ContactUs" element={<ContactUs/>}/>
    <Route path="call-now" element={<CallNow/>}/>
    <Route path="see-all" element={<SeeAll/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
