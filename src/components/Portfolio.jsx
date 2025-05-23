import React from 'react';
import youtubeclone from '../../public/youtube.png'
import Ecommerce from '../../public/E-commer.png'
import { Element } from 'react-scroll';
import FadeInOnScroll from '../components/FadeInOnScroll';
import { FaGithub } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <Element name="portfolio" className="w-full min-h-screen p-8 md:p-10 lg:p-16">
      
      {/* Title fades in from top to bottom */}
      <FadeInOnScroll direction="down" delay={0}>
        <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold'>
          Portfolio
        </h2>
      </FadeInOnScroll>

      {/* Project 1 fades in from left */}
      <FadeInOnScroll direction="left" delay={0.5}>
        <div className='w-full mt-10 flex flex-col md:flex-row items-center justify-center gap-6'>
          {/* Image Side */}
          <div className='w-full md:w-1/2 md:order-1'>
            <img src={youtubeclone} alt="Project 1" className="w-full object-cover rounded-xl" />
          </div>

          {/* Description Side */}
          <div className='w-full md:w-1/2 bg-[#190b1f] text-white rounded-xl px-4 py-6 flex flex-col gap-3 md:order-2'>
            <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>
              Project #1
            </h3>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
              Created a YouTube Clone using React, Tailwind CSS, and the YouTube Data API.
            </p>
            <div className="mt-3 flex items-center gap-2 sm:gap-3">
             
              <a
                href="https://github.com/Basit-Ali-Buriro/Youtube-Clone-Using-api."
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl lg:text-4xl text-white hover:text-[#A855F7] transition duration-300"
                aria-label="GitHub Repository"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Project 2 fades in from right with extra delay */}
      <FadeInOnScroll direction="right" delay={1}>
        <div className='w-full mt-10 flex flex-col-reverse md:flex-row items-center justify-center gap-6'>
          {/* Description Side */}
          <div className='w-full md:w-1/2 bg-[#190b1f] text-white rounded-xl px-4 py-6 flex flex-col gap-3 md:order-1'>
            <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>
              Project #2
            </h3>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
              Created an E-commerce website using Fake Store API, React, Redux, and other frontend technologies.
            </p>
            <div className="mt-3 flex items-center gap-2 sm:gap-3">
              <a href="https://e-commerce-psi-rose.vercel.app/">
              <button className="border-2 border-white px-3 sm:px-4 py-2 rounded-lg text-white hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
                View Project
              </button>
              </a>
              <a
                href="https://github.com/Basit-Ali-Buriro/E-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl lg:text-4xl text-white hover:text-[#A855F7] transition duration-300"
                aria-label="GitHub Repository"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className='w-full md:w-1/2 md:order-2'>
            <img src={Ecommerce} alt="Project 2" className="w-full object-cover rounded-xl" />
          </div>
        </div>
      </FadeInOnScroll>

    </Element>
  );
}
