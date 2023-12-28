import React from 'react';
import Storefront from "../Assets/Storefront.png";

const Navbar = () => {
  return (
    <header className="border border-gray-800 flex flex-col md:flex-row items-center bg-gray-800 text-white p-4">
      <div className="flex items-center mb-4 md:mb-0">
        <img src={Storefront} alt="Storefront" className="mr-2" />
        <div>
          <h1>NFT Marketplace</h1>        
        </div>
      </div>
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-start">
        <h1 className="flex md:pl-14">Marketplace</h1>
        <h1 className="flex md:pl-14">Rankings</h1>
        <h1 className="flex md:pl-14">Connect a Wall</h1>
      </div>
      <button className="rounded-full bg-purple-600 px-4 py-2 mt-4 md:mt-0 md:ml-auto">Sign Up</button>
    </header>
  );
};

export default Navbar;

