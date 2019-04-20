import React from 'react';

const logoName = "HAB.aRI" 

const Footer = () => {
  return(
    <footer>
      <section className="logoSection">
        <p>{logoName}</p>
        <img src={habari} alt="logo" className="logo" height="70px"/>       
      </section>
    </footer>
  )
}

export default Footer;