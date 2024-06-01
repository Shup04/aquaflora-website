// featuresPage.js
import React from 'react';
import Layout from '../components/layout';
import featureImage from '../images/fishPortrait.png'

const featuresData = [
  {
    title: 'Feature One',
    description: 'Description for feature one. Highlight the key aspects and benefits of this feature.',
    image: featureImage,
  },
  {
    title: 'Feature Two',
    description: 'Description for feature two. Highlight the key aspects and benefits of this feature.',
    image: featureImage,
  },
  {
    title: 'Feature Three',
    description: 'Description for feature three. Highlight the key aspects and benefits of this feature.',
    image: featureImage,
  },
];

const FeaturesPage = () => {
    return (
      <Layout>
        <header className="bg-gray-100 text-center py-10">
          <h1 className="text-black text-3xl font-semibold leading-snug sm:text-3xl lg:text-6xl opacity-70">Our Features</h1>
          <p className="mt-4 text-xl">Explore the amazing features that make our product stand out.</p>
        </header>
        <div className="max-w-6xl mx-auto mt-10">

            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="md:max-w-2/3 p-4">
                    <h2 className="text-black text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[0].title}</h2>
                    <p className="text-lg">{featuresData[0].description}</p>
                </div>
                <div className="mx-auto md:w-1/3 md:block p-4 hidden">
                    <img src={featuresData[0].image} alt='title' className="w-full h-auto rounded-lg" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="mx-auto md:w-1/3 md:block p-4 hidden">
                    <img src={featuresData[1].image} alt='title' className="w-full h-auto rounded-lg" />
                </div>
                <div className="md:max-w-2/3 p-4">
                    <h2 className="text-black text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[1].title}</h2>
                    <p className="text-lg">{featuresData[1].description}</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="md:max-w-2/3 p-4">
                    <h2 className="text-black text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[2].title}</h2>
                    <p className="text-lg">{featuresData[2].description}</p>
                </div>
                <div className="mx-auto md:w-1/3 md:block p-4 hidden">
                    <img src={featuresData[2].image} alt='title' className="w-full h-auto rounded-lg" />
                </div>
            </div>
        </div>
      </Layout>
    );
  };

export default FeaturesPage;
