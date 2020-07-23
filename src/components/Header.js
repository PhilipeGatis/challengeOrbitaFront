import React from 'react';
import MenuIcon from './MenuIcon';

const Header = () => {
  return (
    <header className="container flex items-center h-16 bg-green-500 absolute z-10">
      <div className="justify-center pl-10">
        <MenuIcon />
      </div>
      <div className="flex-1" />
    </header>
  );
};

export default Header;
