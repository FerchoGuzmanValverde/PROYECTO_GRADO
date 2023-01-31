/***
 * Import dependencies
 */
import React, { useState } from "react";
import { GetUserWithID } from "../../services/user.service";

/***
 * ADD USER Component
 */
const Dashboard = () => {

  /***
   * Set Initial User State
   */
  const initialUserState = {
    idUser: null,
    userName: '',
    password: '',
    email: '',
    macAddress: '',
    status: null,
    creationDateTime: '',
    updateDateTime: ''
  };

  /***
   * Instantiate User State
   */
  const [user, setUser] = useState(initialUserState);

  /***
   * Get User
   */
  const GetUser = () => {

    /***
     * Use of User Service to Get User
     */
    try {
      const idUser = '2';
      const response = GetUserWithID(idUser);
      setUser(response.data);
    } catch (error) {
      console.log('error',error)
    }
  };

  GetUser();

  /***
   * Render component
   */
  return (
    <div>
      <div>
        <table>
       <thead>
       <tr>
              <th>correo</th>
              <th>password</th>
            </tr>
       </thead>
           <tbody>
            <tr key={user.idUser}>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
           </tbody>
        </table>
        <button>Add</button>
    </div>
    </div>
  );
};

export default Dashboard;