import React from 'react';
import Icons from "../Assets/Icons.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-500">
        <div className="flex items-center pt-4 md:pt-0">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">NFT Marketplace</h1>
            <p className="pt-4 text-gray-500">NFT marketplace UI created <br /> with Anima for Figma.</p>
            <p className="pt-4 text-gray-500">Join our community</p>
            <img src={Icons} alt="Icons" className="mt-4" />
          </div>
        </div>
        <div className="pt-4 md:pt-0">
          <h3 className="text-xl font-bold mb-2">Explore</h3>
          <h3 className="text-gray-500 mt-4">Marketplace</h3>
          <h3 className="text-gray-500 mt-4">Rankings</h3>
          <h3 className="text-gray-500 mt-4">Connect a Wallet</h3>
        </div>
        <div className="pt-4 md:pt-0">
          <h3 className="text-xl font-bold mb-2">Join Our Weekly Digest</h3>
          <p className="pt-4 text-gray-500 pb-4">Get exclusive promotions & updates <br />
          straight to your inbox.</p>
          <button className="rounded-full bg-purple-600 px-4 py-2 md:ml-auto">Subscribe</button>
        </div>
      </div>
      <div className="border-gray-500 mt-4">
        <p className="text-gray-500 mt-4">Copyright NFT Market. Use this template freely.</p>
      </div>
    </footer>
  );
};

export default Footer;


