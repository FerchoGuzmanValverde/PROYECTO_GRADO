/***
 * Import needed dependencies.
 */
import React from "react";
import './footer.css';

/***
 * Footer component for global layouts.
 */
export const Footer = () => {
  return (
    <div className="container_footer">
      <i className="fa fa-facebook-official w3-hover-opacity"></i>
      <i className="fa fa-instagram w3-hover-opacity"></i>
      <i className="fa fa-twitter w3-hover-opacity"></i>
      <p className="w3-medium">Impulsado por <a href="http://www.univalle.edu/" target="__blank" className="w3-hover-text-green">UNIVALLE</a></p>
    </div>
  );
}


/***
 * Footer component for oncologist layouts.
 */
export const Footer_oncologist = () => {
  return (
    <div className="container_footer">
      <p class="w3-medium">Impulsado por <a href="http://www.univalle.edu/" target="__blank" class="w3-hover-text-green">UNIVALLE</a></p>
    </div>
  );
}

/***
 * Footer component for system layouts.
 */
 export const Footer_system = () => {
  return (
    <div className="container_footer">
      <p class="w3-medium">Impulsado por <a href="http://www.univalle.edu/" target="__blank" class="w3-hover-text-green">UNIVALLE</a></p>
    </div>
  );
}

export default Footer;