import { useState } from 'react'
import './App.css'
import { BASE_URL } from './services/constants.js'
import Recipes from './components/Products'
import Cards from './components/Products/Cards'

function App() {

  return (
    <>
    <Recipes/>
    <Cards/>
    </>
  )
}

export default App
