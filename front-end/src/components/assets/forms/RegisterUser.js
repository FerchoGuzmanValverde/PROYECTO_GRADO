/***
 * Import dependencies
 */
import React, { useState } from "react";
import { CreateUser } from "../../../services/user.service";
import md5 from "md5"

/***
 * ADD USER Component
 */
const AddUser = () => {

  /***
   * Set Initial User State
   */
  const initialUserState = {
    user: '',
    password: '',
    email: '',
    macAddress: ''
  };

  /***
   * Instantiate User State
   */
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  /***
   * Functions to handle input changes
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  /***
   * Save User Function
   */
  const saveUser = () => {
    var data = {
      userName: user.userName,
      password: user.password,
      email: md5(user.email),
      macAddress: user.macAddress
    };

    /***
     * Use of User Service to Create in DB
     */
    try {
      const response = CreateUser(data);
      setUser(response.data);
      setSubmitted(true);
    } catch (error) {
      console.log('error',error)
    }
  };

  /***
   * Reset states
   */
  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  /***
   * Render component
   */
  return (
    <div>
      {submitted ? (
        <div>
          <h4>Se creo el usuario correctamente!!</h4>
          <button onClick={newUser}>
            Registrar nuevo usuario
          </button>
        </div>
      ) : (
        <div>
          <div>
            <label>Nombre de usuario:</label>
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
            <label>Contraseña:</label>
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
            <label>E-mail:</label>
            <input 
              id="email" 
              name="email" 
              required 
              value={user.email}
              onChange={handleInputChange}
            />
          </div>

          <button onClick={saveUser}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;