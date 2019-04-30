//This is the Header component of the application
import React from 'react';
import habari from '../assets/habari.png';

const logoName = "HAB.aRI" 

const Header = () => {
  return(
    <header>
      <section className="logoSection">
        <p>{logoName}</p>
        <img src={habari} alt="logo" className="logo" height="70px"/>       
      </section>
    </header>
  )
}

export default Header;