// featureSection.js
import React from 'react';

const FeatureSection = ({ title, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-10">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      <div className="md:w-1/2 p-4">
        <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default FeatureSection;
