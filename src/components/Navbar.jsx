import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);
  const [showMobileProductsDropdown, setShowMobileProductsDropdown] = useState(false);
  const [showMobileTemplateDropdown, setShowMobileTemplateDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };

  const toggleTemplateDropdown = () => {
    setShowTemplateDropdown(!showTemplateDropdown);
  };

  const toggleMobileProductsDropdown = () => {
    setShowMobileProductsDropdown(!showMobileProductsDropdown);
  };

  const toggleMobileTemplateDropdown = () => {
    setShowMobileTemplateDropdown(!showMobileTemplateDropdown);
  };

  return (
    <div className="flex items-center h-24 max-w-[1240px] mx-auto px-4 text-black relative font-manrope">
     
      <h1 className="text-2xl font-bold text-right md:text-left md:mr-auto font-manrope text-black-700">AR SHAKIR</h1>

      
      <div onClick={handleNav} className="md:hidden z-10 absolute top-6 right-7">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

     
      <ul className="hidden md:flex justify-center flex-grow items-center">
        <li className="p-4 relative" onClick={toggleProductsDropdown}>
          Products <AiOutlineDown className="inline-block ml-1" />
          {showProductsDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-md rounded">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 1</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 2</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 3</a>
            </div>
          )}
        </li>
        <li className="p-4 relative" onClick={toggleTemplateDropdown}>
          Template <AiOutlineDown className="inline-block ml-1" />
          {showTemplateDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-md rounded">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Template 1</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Template 2</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Template 3</a>
            </div>
          )}
        </li>
        <li className="p-4">Blog</li>
        <li className="p-4">Pricing</li>
      </ul>


      <div className="hidden md:flex items-center space-x-4">
        <li className='p-4 list-none'>Sign In</li>
        <button className='bg-[#F57059] text-white px-4 py-2 rounded'>Start Free</button>
      </div>


      <div
        className={
          nav
            ? "fixed top-0 left-0 h-full w-[60%] bg-gray-300 shadow-xl z-20 duration-500 md:hidden"
            : "fixed top-0 left-[-100%] h-full w-[60%] bg-gray-300 shadow-xl z-20 duration-500 md:hidden"
        }
      >
        <div className='absolute top-6 right-7' onClick={handleNav}>
          <AiOutlineClose size={20} />
        </div>
        <h1 className="text-2xl font-bold m-4">AR SHAKIR</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-900 relative">
            <div onClick={toggleMobileProductsDropdown} className="flex items-center justify-between">
              Products <AiOutlineDown className="inline-block ml-1" />
            </div>
            {showMobileProductsDropdown && (
              <div className="ml-4 mt-2">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 3</a>
              </div>
            )}
          </li>
          <li className="p-4 border-b border-gray-900 relative">
            <div onClick={toggleMobileTemplateDropdown} className="flex items-center justify-between">
              Template <AiOutlineDown className="inline-block ml-1" />
            </div>
            {showMobileTemplateDropdown && (
              <div className="ml-4 mt-2">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Template 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Template 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Template 3</a>
              </div>
            )}
          </li>
          <li className="p-4 border-b border-gray-900">Blog</li>
          <li className="p-4 border-b border-gray-900">Pricing</li>
        </ul>

        <div className='p-4'>
          <li className='list-none uppercase p-4'>Sign In</li>
          <button className='bg-[#F57059] text-white px-6 py-2 rounded uppercase'>Start Free</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
