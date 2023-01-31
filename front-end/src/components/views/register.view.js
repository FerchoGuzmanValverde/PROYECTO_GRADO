/* eslint-disable react/jsx-pascal-case */
/***
 * Import needed dependencies.
 */
import React from 'react'
/***
 * Import components.
 */
import RegisterUserForm from '../assets/forms/RegisterUser'
/***
 * Import styles.
 */


/***
 * Register new oncologist view component.
 */
export default function Register_view() {
  return (
    <div>
      <h2>REGISTRAR EN EL SISTEMA</h2>
      <p>INGRESE SUS DATOS:</p>
      <div>
        <RegisterUserForm />
      </div>
    </div>
  );
}