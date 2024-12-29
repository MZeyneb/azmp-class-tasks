import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../layouts/Admin-header'
import "../Admin/index.css"

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader/>
      <Outlet/>
      
    </div>
  )
}

export default AdminLayout
