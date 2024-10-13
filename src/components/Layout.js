import React from 'react';
import Navbar from './ReusableComponents/Navbar'; 
import Footer from './ReusableComponents/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
