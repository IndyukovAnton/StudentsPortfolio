import React from 'react';
import "../assets/css/components/header.css"


type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="header">
      <div className="container">
        {children}
      </div>
    </header>
  );
};

export default Header;
