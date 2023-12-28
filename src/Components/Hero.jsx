import React from 'react';
import HeroImage from '../Assets/hero-image.jpg';

const Hero = () => {
  return (
    <div className="border border-gray-800 grid grid-cols-1 md:grid-cols-2 bg-gray-800 text-white">
      <div className="hidden md:block">
        <img src={HeroImage} alt="Hero" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col p-4 items-center justify-evenly">
        <h1 className="text-4xl font-extrabold">Create Account</h1>
        <p className="text-center">Welcome! Enter Your Details and Start <br />
          Creating, Collecting And Selling NFTs</p>
        <input type="text" placeholder="Username" className="rounded-full p-2 px-4 md:px-16 my-1" />
        <input type="email" placeholder="Email Address" className="rounded-full p-2 px-4 md:px-16 my-1" />
        <input type="password" placeholder="Password" className="rounded-full p-2 px-4 md:px-16 my-1" />
        <input type="password" placeholder="Confirm Password" className="rounded-full p-2 px-4 md:px-16 my-1" />
        <button className="rounded-full bg-purple-600 text-white p-2 px-4 md:px-16 my-2">Create Account</button>
      </div>
    </div>
  );
};

export default Hero;




