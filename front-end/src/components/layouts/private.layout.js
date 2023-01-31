/***
 * Import needed dependencies.
 */
import React from 'react'
import { Outlet } from 'react-router-dom'

/***
 * Import navbar and footer.
 */
import Navbar from '../assets/navbar/navbar.js'
import Footer from '../assets/footer/footer.js'

/***
 * Import styles.
 */


/** Set images object. */
//const imgs = require.context('../assets/img/', true);

/***
 * About view component.
 */
export default function About_view() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Outlet />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}