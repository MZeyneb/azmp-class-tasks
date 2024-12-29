import React from 'react'
import { NavLink } from "react-router-dom"
import "../Admin-header/index.css"
const AdminHeader = () => {
  return (
    <>
    <nav className='adm'>
        <h1>Admin</h1>
        <ul>
            <li><NavLink to={"/Admin"} end>Dashboard</NavLink></li>
            <li><NavLink to={"Products"} end>Products</NavLink></li>
            <li><NavLink to={"Add"} end>Add Product</NavLink></li>

        </ul>
    </nav>
    </>
  )
}

export default AdminHeader