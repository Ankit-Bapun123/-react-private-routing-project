import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and high-performance websites.',
  },
  {
    title: 'App Development',
    description: 'Crafting mobile apps for Android and iOS.',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and experiences.',
  },
];

const Service = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-semibold mb-2 text-blue-600">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
