import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Layout/Header.jsx'
import Footer from './Components/Layout/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App   />
    <Footer/>
  </StrictMode>
)
