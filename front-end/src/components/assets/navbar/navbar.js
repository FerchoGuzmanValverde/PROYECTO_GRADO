/***
 * Import needed dependencies.
 */
import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

/*** Set images source */
//const imgs = require.context("../img/", true);

/***
 * Navbar for global layouts.
 */
export const Navbar = () => {

  /***
   * Return global Navbar
   */
  return (
    <div>
      <nav>
        <Link to='/home'>
          <p>INICIO</p>
        </Link>
        <Link to='/about'>
          <p>NOSOTROS</p>
        </Link>
        <Link to='/login'>
          <p>LOGIN</p>
        </Link>
        <Link to='/register'>
          <p>REGISTRAR</p>
        </Link>
      </nav>
    </div>
  )
}

/***
 * Navbar for global layouts.
 */
export const Dashboard_navbar = () => {

  /***
   * Return global Navbar
   */
  return (
    <div>
      <nav>
        <Link to='/dashboard'>
          <p>DASHBOARD</p>
        </Link>
        <Link to='/exams'>
          <p>EXAMENES</p>
        </Link>
        <Link to='/patients'>
          <p>PACIENTES</p>
        </Link>
        <Link to='/RECORDS'>
          <p>HISTORICOS</p>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar;