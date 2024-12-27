
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/Client/About'
import Contact from './Pages/Client/Contact'
import Detail from './Pages/Client/Detail'
import Favorites from './Pages/Client/Favorites'
import Header from './Pages/Client/Header'
import Home from './Pages/Client/Home'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Favorites" element={<Favorites />} />


      </Routes>
    </>
  )
}

export default App
