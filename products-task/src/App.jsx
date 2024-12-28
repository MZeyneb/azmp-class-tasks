import { Route, Routes } from 'react-router-dom'
import ClientHeader from './layouts/Client-header'
import './App.css'
import Products from './pages/Client/Products'
import Favorites from './pages/Client/Favorites'
import Contact from './pages/Client/Contact'
import Home from './pages/Client/Home'
import NotFound from './pages/Client/NotFound'

function App() {

  return (
    <>
    
    <ClientHeader/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Favorites' element={<Favorites/>}/>
      <Route path='/Products' element={<Products/>}/>
      {/* <Route path="/Products/:id" element={<ProductsDetails/>} /> */}
      <Route path='*' element={<NotFound/>}/>

    </Routes>

    </>
  )
}

export default App
