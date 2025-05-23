import React, { useState } from 'react';
import { Element } from 'react-scroll';
import FadeInOnScroll from '../components/FadeInOnScroll';  // Adjust path as needed

const AboutMe = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Optional: handle form submit (prevent default page reload)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here (e.g., send data to API)
    console.log({ name, email, message });
  };

  return (
    <div className="w-full text-white px-6 py-12 pt-28 flex flex-col lg:flex-row gap-10 items-start justify-between">

      {/* About Section */}
      <FadeInOnScroll direction="left" delay={0} className="lg:w-1/2 space-y-6">
        <Element name="about" className="relative pt-[70px] -mt-[70px]">
          <h2 className="text-3xl font-bold">
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-gray-300">
            I’m a dedicated Frontend Developer with a deep passion for creating beautiful, responsive, and user-friendly web interfaces. I specialize in technologies like React, Tailwind CSS, and modern JavaScript, and I love building seamless user experiences with attention to detail and smooth animations. I'm always exploring new trends and tools in frontend development to keep my skills sharp and deliver high-quality, scalable websites.


          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#1e0c2a] p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-purple-400">11+</h3>
              <p className="text-sm text-gray-300">Projects</p>
            </div>
            <div className="bg-[#1e0c2a] p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-purple-400">2+</h3>
              <p className="text-sm text-gray-300">years of experience</p>
            </div>
            <div className="bg-[#1e0c2a] p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-purple-400">30+</h3>
              <p className="text-sm text-gray-300">happy clients</p>
            </div>
          </div>
        </Element>
      </FadeInOnScroll>

      {/* Contact Section */}
      <FadeInOnScroll direction="right" delay={0.3} className="lg:w-1/2 space-y-6 w-full">
        <Element name="contact" className="relative pt-[70px] -mt-[70px]">
          <h3 className="text-xl font-semibold">Let’s connect!</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name ..."
              className="p-3 rounded-md bg-white text-black focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email ..."
              className="p-3 rounded-md bg-white text-black focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows="4"
              placeholder="Your Message ..."
              className="p-3 rounded-md bg-white text-black focus:outline-none resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 text-white font-semibold py-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </Element>
      </FadeInOnScroll>

    </div>
  );
};

export default AboutMe;
