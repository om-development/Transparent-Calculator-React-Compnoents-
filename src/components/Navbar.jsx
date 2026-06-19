import React, { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 bg-transparent backdrop-blur-sm w-full h-24 md:h-30 lg:h-40 z-50 mb-5">
      <div className="px-2 w-full sm:px-3 md:px-4 lg:px-5 h-full">
        <nav className="w-full h-full flex justify-between px-1 md:px-4 lg:px-15 items-center">
          <div className="flex space-x-1 justify-center items-center cursor-pointer">
            <img src="/logo.png" alt="LOGO" className="h-20 w-20 md:h-25 md:w-25" />
            <span className="text-2xl md:text-3xl font-medium md:font-bold">
              <span className="text-red-500">Om</span>
              <span className="text-green-600">Dhakal</span>
            </span>
          </div>
          {isOpen && ( <div className="flex z-20 flex-col items-center py-2 space-y-3 md:hidden">
    <a href="#" className="text-2xl text-orange-400 hover:text-green-300 hover:font-bold">Home</a>
    <a href="#" className="text-2xl text-orange-400 hover:text-green-300 hover:font-bold">About</a>
  </div>)}
          
            <a
              href="#"
              className=" hidden md:block text-2xl text-orange-400 hover:text-green-300 hover:font-bold"
            >
              Home
            </a>
            <a
              href="#"
              className=" hidden md:block text-2xl text-orange-400 hover:text-green-300 hover:font-bold"
            >
              About
            </a>
        
          <div className=" md:hidden justify-between items-center flex ">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-2xl text-orange-400 hover:text-green-300 hover:font-bold md:hidden"
            >
              Menu
            </button>
          </div>
        </nav>
       
      </div>
    </div>
  );
};

export default Navbar;
