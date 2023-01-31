/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/***
 * Import required dependencies.
 */
import React, { useState, useEffect }  from 'react';
import { Navigate, useLocation, Link } from "react-router-dom";
import { VerifyLogin } from '../../../services/user.service';

/***
 * Login form component.
 */
export const Login = () => {

  const location = useLocation();

  /***
   * Set Initial User State
   */
  const initialUserState = {
    userName: '',
    password: ''
  };

  /***
   * Functions to handle input changes
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const [user, setUser] = useState(initialUserState);

  const handleSubmit = () => {

    const response = VerifyLogin(user);

    console.log("RESPUESTA FRONT:", response)
    
    

    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre usuario:</label>
        <input
          type="text"
          id="userName"
          required
          value={user.userName}
          onChange={handleInputChange}
          name="userName"
        />
      </div>
      <div>
        <label>Contraseña</label>
        <input
          type="password"
          id="password"
          required
          value={user.password}
          onChange={handleInputChange}
          name="password"
        />
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
        <p>
          Don't have an Account?{" "}
          <Link to={"/register"}>
            Registrar
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Login;