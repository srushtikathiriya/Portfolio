import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 font-mono">
      <section className="flex flex-col relative py-5">
        <div className="font-montserrat my-10 text-center">
          <h3 id="co-title" className="text-3xl font-bold text-red-600 uppercase mb-5"><span className='border-b-4 border-red-600'>Contact Me</span></h3>
        </div>

        <div className="flex flex-col md:flex-row justify-between self-center leading-relaxed h-auto w-[90%] md:w-[70%] bg-gray-50 bg-opacity-700 mx-auto mb-40 rounded-lg shadow-lg">
          <div className="font-montserrat p-10 md:p-20">
            <h3 id="form-title" className="text-lg uppercase font-bold mb-6">Send me a message</h3>
            <form action="https://formspree.io/f/xlderkyl" method="post">
              <fieldset className="border-none">
                <div className="w-full border-b  mb-4">
                  <input name="name" type="text" id="name" placeholder="Your Name" className="font-montserrat  outline-none bg-transparent border-none text-sm leading-8 pb-2 w-full" required />
                </div>
                <div className="w-full border-b mb-4">
                  <input name="email" type="email" id="email" placeholder="Your Email" className="font-montserrat  outline-none bg-transparent border-none text-sm leading-8 pb-2 w-full" required />
                </div>
                <div className="w-full border-b mb-4">
                  <input name="Subject" type="text" id="subject" placeholder="Subject" className="font-montserrat  outline-none bg-transparent border-none text-sm leading-8 pb-2 w-full" required />
                </div>
                <div className="w-full border-b mb-4">
                  <textarea name="message" type="text" id="message" placeholder="Your Message" className="font-montserrat  outline-none bg-transparent border-none text-sm leading-8 pb-2 w-full" required></textarea>
                </div>
              </fieldset>
              <input id="form-btn" type="submit" value="Send" className="flex justify-center px-10 py-4 rounded-md mt-8 border-none text-white text-sm font-bold uppercase w-full h-15 bg-red-600 hover:bg-red-700 transition duration-300" />
            </form>
          </div>

          <div className="flex flex-col items-center justify-center p-10 md:p-20 bg-gray-300 bg-opacity-50 rounded-r-lg">
            <h3 className="font-montserrat text-lg text-red-600 mb-3 font-bold">Email Me At</h3>
            <a href="mailto:srushtikathiriya2003@gmail.com" className="font-montserrat text-gray-600 text-base  leading-12 mb-6 hover:translate-y-[-2.5%] hover:text-gray-400 transition-all duration-300">srushtikathiriya2003@gmail.com</a>
            <h3 className="font-montserrat text-lg text-red-600 mb-3 font-bold">Find Me On</h3>
            <div className="flex space-x-4 text-2xl text-gray-600 cursor-pointer hover:scale-110 hover:text-gray-400 transition-all duration-300">
              <a href="https://www.linkedin.com/in/srushti-kathiriya/" target="_blank" ><FaLinkedin /></a>
              <a href="https://github.com/" target="_blank"><FaGithub /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
