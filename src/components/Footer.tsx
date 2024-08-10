import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer style={{
      textAlign: 'center',
      color: 'rgb(125, 127, 131)', 
      fontFamily: '"Inter", "Inter Placeholder", sans-serif', 
      fontSize: '14px', 
      lineHeight: '24px',
      padding: '10px', 
      backgroundColor: '#000', 
      width: '100%', 
      boxSizing: 'border-box',
      position: 'relative',  
      marginTop: '50px' 
    }}>
      <p style={{ margin: 0 }}>© {currentYear} Pedro Aquino</p>
    </footer>
  );
};

export default Footer;
