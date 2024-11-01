import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/contextProvider'

function DefaultLayout() {
  const { user, token } = useStateContext();
  if (!token) {
    return  <Navigate to='/login' />
  }

  const onLogout = (e) => {
    e.preventDefault();
  }

  return (
    <div id='defaultLayout'>
      <div className='content' >
        <header>
          <div className="">
            header
          </div>
          <div className="">
            {user.name}
            {/* <a href="#" onClick={onLogout} className='btn-logout'> Logout </a> */}
          </div>
        </header>
        Default
      </div>
      <Outlet/>
    </div>
  )
}

export default DefaultLayout