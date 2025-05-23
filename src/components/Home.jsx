import React from 'react';
import profile from '../assets/profpic.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import FadeInOnScroll from '../components/FadeInOnScroll';
import { Element } from 'react-scroll';
import TypingText from "../components/TypingText";

function Home() {
  return (
    <Element name="home">
      <div className='w-full min-h-screen h-full text-white flex flex-col px-5 md:flex-row items-center justify-center py-28'>

        {/* Left Side: Text */}
        <div className='md:flex-col md:px-6 w-full sm:w-1/2'>

          <div className='flex flex-col md:gap-2 sm:gap-1'>
            <FadeInOnScroll direction="up" delay={0.7}>
              <TypingText
                words={["Responsive Developer", "Frontend Developer", "React Enthusiast", "Open Source Contributor"]}
                typingSpeed={140}
                deletingSpeed={100}
                pauseTime={1200}
                cursor="|"
                textColor='#9CA3AF'
                className="text-xl sm:text-2xl lg:text-3xl font-semibold"
              />

              <p className='text-3xl lg:text-5xl'>
                Hey, I am <br />
                <span className='text-[#A855F7]'>Basit Ali</span>
              </p>
            </FadeInOnScroll>
            {/* 👇 Animate Paragraph from Top */}
            <FadeInOnScroll direction="up" delay={1}>
              <p className='text-lg sm:text-xl lg:text-2xl'>
                I am a passionate Frontend Developer having expertise in various frontend technologies
              </p>
            </FadeInOnScroll>
          </div>

          {/* 👇 Animate Button & Icons from Bottom with delay */}
          <FadeInOnScroll direction="up" delay={1.6}>
            <div className='flex items-center gap-5 sm:gap-4 md:gap-3 w-full md:w-full px-3 py-5'>
              <a
                href="public/Basit Ali Resume.pdf"
                download="public/Basit Ali Resume.pdf"
                aria-label="Download CV">
                <button
                  className='font-semibold rounded-xl px-5 py-3 border-2 border-[#A855F7] cursor-pointer'
                  aria-label="Download CV"
                >
                  Download CV
                </button>
              </a>

              <a href="https://github.com/Basit-Ali-Buriro/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-2xl sm:text-3xl lg:text-4xl text-[#A855F7] hover:text-white transition duration-300 transform hover:scale-125 cursor-pointer"
              >
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/Basit-Alee" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl sm:text-3xl lg:text-4xl text-[#A855F7] hover:text-white transition duration-300 transform hover:scale-125 cursor-pointer"
              >
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/itx.basit.buriro" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-2xl sm:text-3xl lg:text-4xl text-[#A855F7] hover:text-white transition duration-300 transform hover:scale-125 cursor-pointer"
              >
                <FaInstagram />
              </a>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Right Side: Image - Animate from Bottom with slight delay */}
        <FadeInOnScroll direction="up" delay={0.8} className='items-center justify-center'>
          <div className="w-full sm:w-1/2 flex justify-center items-center py-5 h-full">
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={profile}
                alt="Basit Ali Profile"
                className="max-w-[400px] w-full sm:w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </FadeInOnScroll>

      </div>
    </Element>
  );
}

export default Home;
