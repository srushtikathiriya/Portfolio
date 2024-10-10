import React from 'react';
import Resume from "../asset/srushti_kathiriya_mern_stack.pdf";

function Home() {
    const handleLinkClick = (event) => {
        event.preventDefault();
        window.open(event.target.href, '_blank', 'noopener,noreferrer');
      };
    return (
        <div className="relative flex justify-center items-center h-screen bg-gray-100">
            <section className="intro text-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-4xl font-extrabold mb-3 text-gray-800">
                    Hi, I'm <span className="text-yellow-500">Srushti Kathiriya</span>
                </h2>
                <p className="text-lg text-gray-600 mb-5">IT Student | MERN Stack Developer</p>
                <div>
                    <a
                        href={Resume}
                        target="_blank"
                        download
                        onClick={handleLinkClick}
                        className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-full shadow hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
                        role="button">
                        Download CV
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Home;
