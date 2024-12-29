import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from '../../layouts/Client-header'

const ClientLayout = () => {
  return (
    <div>
      <ClientHeader/>
      <Outlet/>
      
    </div>
  )
}

export default ClientLayout
