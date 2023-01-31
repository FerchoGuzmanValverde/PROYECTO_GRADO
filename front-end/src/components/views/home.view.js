/***
 * Import needed dependencies.
 */
import React from 'react'
/***
 * Import styles.
 */


/** Set images object. */
const imgs = require.context('../assets/img/', true);

/***
 * Home view component.
 */
export default function Home_view() {
  return (
    <div className="hero">  
      <div className="hero__title">Breast Cancer AI</div>

      <img src={imgs('./ia_01.png')} alt="Avatar" class="cube"/>
      <img src={imgs('./ia_02.png')} alt="Avatar" class="cube"/>
      <img src={imgs('./ia_03.png')} alt="Avatar" class="cube"/>
      <img src={imgs('./ia_04.png')} alt="Avatar" class="cube"/>
      <img src={imgs('./ia_05.png')} alt="Avatar" class="cube"/>
      <img src={imgs('./ia_06.png')} alt="Avatar" class="cube"/>
    </div>
  );
}