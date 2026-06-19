import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 md:h-20 backdrop-blur-md bg-white/5 z-50">
        <nav className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />

            <h1 className="text-xl md:text-3xl font-bold">
              <span className="text-red-500">Om</span>
              <span className="text-green-500">Dhakal</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a
              href="#"
              className="text-orange-400 hover:text-green-300 transition"
            >
              Home
            </a>

            <a
              href="#"
              className="text-orange-400 hover:text-green-300 transition"
            >
              About
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-orange-400"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-black/40 backdrop-blur-md flex flex-col items-center gap-4 py-6 md:hidden z-40">
          <a
            href="#"
            className="text-orange-400 hover:text-green-300 text-xl"
          >
            Home
          </a>

          <a
            href="#"
            className="text-orange-400 hover:text-green-300 text-xl"
          >
            About
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;