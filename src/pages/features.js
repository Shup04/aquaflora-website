// featuresPage.js
import React from 'react';
import FeatureSection from '../components/featureSection'
import Layout from '../components/layout';

const featuresData = [
  {
    title: 'Feature One',
    description: 'Description for feature one. Highlight the key aspects and benefits of this feature.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4THL3Qr6SfLCdBuAXX3L9FC5DbN8WUVwJw&s',
  },
  {
    title: 'Feature Two',
    description: 'Description for feature two. Highlight the key aspects and benefits of this feature.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4THL3Qr6SfLCdBuAXX3L9FC5DbN8WUVwJw&s',
  },
  {
    title: 'Feature Three',
    description: 'Description for feature three. Highlight the key aspects and benefits of this feature.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4THL3Qr6SfLCdBuAXX3L9FC5DbN8WUVwJw&s',
  },
];

const FeaturesPage = () => {
    return (
      <Layout>
        <header className="bg-gray-100 text-center py-10">
          <h1 className="text-4xl font-bold">Our Features</h1>
          <p className="mt-4 text-xl">Explore the amazing features that make our product stand out.</p>
        </header>
        <div className="px-4 py-10">
            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold mb-4">{featuresData[0].title}</h2>
                    <p className="text-lg">{featuresData[0].description}</p>
                </div>
                <div className="md:w-1/2 p-4">
                    <img src={featuresData[0].image} alt='title' className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold mb-4">{featuresData[1].title}</h2>
                    <p className="text-lg">{featuresData[1].description}</p>
                </div>
                <div className="md:w-1/2 p-4">
                    <img src={featuresData[1].image} alt='title' className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold mb-4">{featuresData[2].title}</h2>
                    <p className="text-lg">{featuresData[2].description}</p>
                </div>
                <div className="md:w-1/2 p-4">
                    <img src={featuresData[2].image} alt='title' className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
      </Layout>
    );
  };

export default FeaturesPage;
