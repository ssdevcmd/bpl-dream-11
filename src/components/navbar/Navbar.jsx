import React from 'react';
import dollarimg from '../../assets/dollar 1.png';
import logoimg from '../../assets/logo.png';

const Navbar = ({ coin }) => {
  return (


    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="flex-1">
        <a href="/" className="flex-start items-center gap-2 btn btn-ghost text-xl font-bold p-1 hover:bg-transparent">
          <img src={logoimg} alt="BPL Dream 11 Logo" className="w-15 h-15 object-contain" />
          <span>BPL Dream 11</span>
        </a>
      </div>
      <div className="flex-none">
        <button className="flex justify-between items-center gap-2 font-bold text-xl">
          {coin} Coins
          <img src={dollarimg} alt="Coins" className="w-6 h-6 ml-1" />
        </button>
      </div>

    </div>
  );
};

export default Navbar;