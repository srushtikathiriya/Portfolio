import React from 'react';
import MyImg from "../asset/srushti.jpg";

const About = () => {
  return (
    <div className='relative bg-gray-200 min-h-screen flex justify-center items-center'>
      <section id="about-section" className="w-full h-auto flex flex-col md:flex-row justify-between items-center py-20 px-6 md:px-[12%]">
        <div className="about-left mb-10 md:mb-0 md:mr-10 flex justify-center md:justify-start">
          <img src={MyImg} alt="About Img" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full translate-y-12" />
        </div>

        <div className="about-right w-full md:w-[54%] text-center md:text-left">
          <h1 className="text-yellow-500 text-3xl md:text-4xl mb-3 md:mb-1">
            <span className='border-b-4 border-yellow-500'>About Me</span>
          </h1>
          <p className="text-gray-700 leading-7 text-sm md:text-base font-mono mt-5">
            I am an IT student with a passion for web development, specializing in MERN stack technologies. 
            I enjoy creating dynamic and responsive web applications, and I'm always eager to learn new technologies and improve my skills.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
