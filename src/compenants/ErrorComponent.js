import React from 'react';

const errorStyles = {
  textAlign: 'center',
  marginTop: '100px',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
};

const headerStyles = {
  fontSize: '3em',
  margin: '10px 0',
  color: 'red',
  textShadow: '2px 2px 4px #ff0000',
};

const paragraphStyles = {
  fontSize: '1.5em',
  color: '#555',
};

const errorIconStyles = {
  fontSize: '5em',
};

function ErrorComponent() {
  return (
    <div style={errorStyles}>
      <i className="fas fa-exclamation-circle" style={errorIconStyles}></i>
      <h1 style={headerStyles}>404 - Not Found</h1>
      <p style={paragraphStyles}>Oops! The page you're looking for does not exist.</p>
    </div>
  );
}

export default ErrorComponent;
