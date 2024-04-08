
import React from 'react';

const Footer = () => {
  return (
    // rgb(15, 12, 49)#081b29 
      <div style={{ backgroundColor: 'rgb(15, 12, 49) ',
        padding:'2rem 0',
        textAlign: 'center',
        color: 'white',
        fontSize:"1.5rem"
        }}>
        <p>© {new Date().getFullYear()} Devolped with love by Hassan . All rights reserved.</p>
      </div>
    
  );
};

export default Footer;


