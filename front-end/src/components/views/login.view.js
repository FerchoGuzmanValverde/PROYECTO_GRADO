/* eslint-disable react/jsx-pascal-case */
/***
 * Import needed dependencies.
 */
import React from 'react'

/***
 * Import components.
 */
import LoginForm from '../assets/forms/Login'

/***
 * Import styles.
 */


/***
 * Login view component.
 */
export default function Login_view () {
  return (
    <div>
      
      <h2>INGRESAR AL SISTEMA</h2>
      
      <p>INGRESE SUS DATOS:</p>
      <div>
        <LoginForm />
      </div>
    
    </div>
  );
}