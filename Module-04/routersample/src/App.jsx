import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/404';
import { AdminAbout } from './pages/admin/AdminAbout';
import { Dashboard } from './pages/admin/Dashboard';
import { Aboute } from './pages/user/Aboute';
import { Home } from './pages/user/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<Aboute />} />
        </Route>
        <Route path='/admin/' element={<Dashboard />}>
          <Route path='adminabout' element={<AdminAbout />} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}
