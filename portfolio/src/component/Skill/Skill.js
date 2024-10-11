import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Bootstrap' },
    { name: 'Tailwind CSS' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'MySql' },
    { name: 'MongoDB' },
    { name: 'Node.js' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          <span className='border-b-4 border-gray-800'>My Skills</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
