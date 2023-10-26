import React from 'react';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: 'darkgray',
    color: 'white',
    padding: '20px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Tu Compañía. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;