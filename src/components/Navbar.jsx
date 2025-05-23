import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';
import { IoMdClose } from 'react-icons/io'; // Close icon

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-50 px-10 py-8 bg-opacity-70 backdrop-blur-md text-white flex items-center justify-between">
        {/* Name clickable to Home */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="font-semibold text-xl md:text-2xl lg:text-3xl text-gray-300 cursor-pointer"
        >
          Basit Ali
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-5 items-center">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-[#A855F7] transition"
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-[#A855F7] transition"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-[#A855F7] transition"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="text-2xl cursor-pointer sm:hidden" onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1e0c2a] z-50 transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="text-white text-3xl focus:outline-none"
            aria-label="Close Menu"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-6 p-6 text-white text-lg">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-purple-500 transition"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-purple-500 transition"
            onClick={toggleSidebar}
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-purple-500 transition"
            onClick={toggleSidebar}
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-purple-500 transition"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
