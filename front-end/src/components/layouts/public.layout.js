/* eslint-disable react/jsx-pascal-case */
/***
 * Import dependencies.
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


/***
 * Public layout.
 */
export default function Public_layout() {

    /***
     * Return set layout
     */
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
    )
}