import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialMedia: React.FC = () => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        gap: '1rem', 
        backgroundColor: '#000', 
        padding: '10px', 
        borderRadius: '20px', 
        justifyContent: "center", 
        flexWrap: 'wrap' // allows items to wrap to the next line on smaller screens
      }}>
      <a 
        href="https://github.com/paquino11" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0.5rem', 
          color: 'white', 
          textDecoration: 'none',
          backgroundColor: '#202020',
          padding: '5px 10px',
          borderRadius: '20px',
          width: 'calc(100% - 2rem)', 
          maxWidth: '200px', 
          height: '50px', 
          boxSizing: 'border-box',
          flex: '1 1 auto'
        }}>
        <SocialIcon url="www.github.com" href="https://github.com/paquino11" bgColor="#202020" fgColor="white" style={{ width: '30px', height: '30px' }}/>
        <span style={{ whiteSpace: 'nowrap' }}>@paquino11</span>
      </a>
      <a 
        href="https://www.youtube.com/@aquinotriestocode" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0.5rem', 
          color: 'white', 
          textDecoration: 'none',
          backgroundColor: '#202020',
          padding: '5px 10px',
          borderRadius: '20px',
          width: 'calc(100% - 2rem)', 
          maxWidth: '200px', 
          height: '50px',
          boxSizing: 'border-box',
          flex: '1 1 auto'
        }}>
        <SocialIcon url="www.youtube.com" href="https://www.youtube.com/@aquinotriestocode" bgColor="#202020" fgColor="red" style={{ width: '30px', height: '30px' }}/>
        <span style={{ whiteSpace: 'nowrap' }}>@aquinotriestocode</span>
      </a>
      <a 
        href="https://www.instagram.com/pedro_aquino11" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0.5rem', 
          color: 'white', 
          textDecoration: 'none',
          backgroundColor: '#202020',
          padding: '5px 10px',
          borderRadius: '20px',
          width: 'calc(100% - 2rem)',
          maxWidth: '200px', 
          height: '50px',
          boxSizing: 'border-box',
          flex: '1 1 auto' 
        }}>
        <SocialIcon url="www.instagram.com" href="https://www.instagram.com/pedro_aquino11/" bgColor="#202020" fgColor="#bc2a8d" style={{ width: '30px', height: '30px' }}/>

        <span style={{ whiteSpace: 'nowrap' }}>@pedro_aquino11</span>
      </a>
      <a 
        href="https://x.com/pedro_aquino_" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0.5rem', 
          color: 'white', 
          textDecoration: 'none',
          backgroundColor: '#202020',
          padding: '5px 10px',
          borderRadius: '20px',
          width: 'calc(100% - 2rem)',
          maxWidth: '200px',
          height: '50px',
          boxSizing: 'border-box',
          flex: '1 1 auto'
        }}>
        <SocialIcon url="www.x.com" href="https://x.com/pedro_aquino_" bgColor="#202020" fgColor="black" style={{ width: '30px', height: '30px' }}/>
        <span style={{ whiteSpace: 'nowrap' }}>@pedro_aquino_</span>
      </a>
      <a 
        href="https://www.linkedin.com/in/pedrofmaquino/" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0.5rem', 
          color: 'white', 
          textDecoration: 'none',
          backgroundColor: '#202020',
          padding: '5px 10px',
          borderRadius: '20px',
          width: 'calc(100% - 2rem)',
          maxWidth: '200px',
          height: '50px',
          boxSizing: 'border-box',
          flex: '1 1 auto'
        }}>
        <SocialIcon url="www.linkedin.com" href="https://www.linkedin.com/in/pedrofmaquino/" bgColor="#202020" fgColor="#0077B5" style={{ width: '30px', height: '30px' }}/>
        <span style={{ whiteSpace: 'nowrap' }}>@pedrofmaquino</span>
      </a>
    </div>
  );
};

export default SocialMedia;
