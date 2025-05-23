import React, {useRef, useEffect} from 'react';
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiRedux } from 'react-icons/si'
import FadeInOnScroll from '../components/FadeInOnScroll';

function Skills() {

  return (
     
     <div className='px-6 md:px-10 py-20 w-full flex items-center justify-center flex-col gap-4 md:gap-6'>
       <FadeInOnScroll direction="down" delay={.5}>
  <span className='text-white text-xl sm:text-3xl lg:text-4xl text-center w-full font-semibold'>
    My Skills
  </span>

       </FadeInOnScroll>
<FadeInOnScroll direction="up" delay={.8} >
  <div className='grid grid-cols-5 gap-4 md:gap-6 text-white text-center'>
    <span className='text-3xl sm:text-4xl lg:text-5xl text-orange-600'><FaHtml5 /></span>
    <span className='text-3xl sm:text-4xl lg:text-5xl text-blue-600'><FaCss3Alt /></span>
    <span className='text-3xl sm:text-4xl lg:text-5xl text-yellow-600'><IoLogoJavascript /></span>
    <span className='text-3xl sm:text-4xl lg:text-5xl text-blue-600'><FaReact /></span>
    <span className='text-3xl sm:text-4xl lg:text-5xl text-purple-600'><SiRedux /></span>
    <span className='text-3xl sm:text-4xl lg:text-5xl text-blue-600'><RiTailwindCssFill /></span>
    <span className='text-3xl sm:text-4xl lg:text-5xl text-orange-600'><FaGitAlt /></span>
    <span className='text-3xl sm:text-4xl lg:text-5xl text-white'><FaGithub /></span>
    <span className='text-3xl sm:text-4xl lg:text-5xl text-green-400'><FaNodeJs /></span>
    <span className='text-3xl sm:text-4xl lg:text-5xl text-purple-600'><FaBootstrap /></span>
  </div>
  </FadeInOnScroll>
</div>

  )
}

export default Skills