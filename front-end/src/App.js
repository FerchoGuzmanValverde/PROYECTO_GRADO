/**
 * Import dependencies
 */
import React from 'react';
import { Route, Routes } from 'react-router-dom';


/**
 * Import layouts
 */
import AuthenticateLayout from './components/layouts/authenticate.layout';
import PublicLayout from './components/layouts/public.layout';
import PrivateLayout from './components/layouts/private.layout';

/**
 * Import views
 */
import Home from './components/views/home.view';
import About from './components/views/about.view';
import Login from './components/views/login.view';
import Register from './components/views/register.view';
import Dashboard from './components/views/dashboard.view';
import Exams from './components/views/exams.view';
import Patients from './components/views/patients.view';
import Records from './components/views/records.view';
import NotFound from './components/views/notfound.view'

/**
 * Import Styles
 */
import './App.css';


function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />} >
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route element={<PrivateLayout />} >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/records' element={<Records />} />
        <Route path='/patients' element={<Patients />} />
      </Route>
      <Route element={<AuthenticateLayout />} >
        
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
