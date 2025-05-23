import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: J.Doe and Social Icons */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-6 md:mb-0">
          <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="font-semibold text-xl md:text-2xl lg:text-3xl text-gray-300 cursor-pointer"
        >
          Basit Ali
        </Link>
          <div className="flex space-x-6">
            {/* GitHub Icon */}
            <a href="https://github.com/Basit-Ali-Buriro/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
               <span className="text-2xl sm:text-3xl lg:text-4xl text-[#A855F7] hover:text-white transition duration-300 transform hover:scale-125 cursor-pointer"><FaGithub /></span>
            </a>
            {/* Instagram Icon */}
            <a href="https://instagram.com/itx.basit.buriro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
               <span className="text-2xl sm:text-3xl lg:text-4xl text-[#A855F7] hover:text-white transition duration-300 transform hover:scale-125 cursor-pointer"><FaInstagram /></span>
            </a>
          </div>
        </div>

        {/* Right Section: Copyright */}
        <div className="text-gray-400 text-lg">
          &copy; {new Date().getFullYear()} J.Doe
        </div>
      </div>
    </footer>
  );
};

export default Footer;
