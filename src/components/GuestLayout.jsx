import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/contextProvider';

function GuestLayout() {
  const { token } = useStateContext();
  if (token) {
    return  <Navigate to='/' />
  }


  return (
    <div>
      <div>
        Guest
      </div>
        <Outlet/>
    </div>
  )
}

export default GuestLayout
