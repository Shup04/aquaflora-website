// featuresPage.js
import React from 'react';
import Layout from '../components/layout';
import featureImage from '../images/fishPortrait.png'

const featuresData = [
  {
    title: 'Custom Tank Profiles',
    description: 'The basis of the app is the ability to create a profile for each of your tanks. Each tank can have its own name, size, image, and short description. All of your fish, reminders, and water parameters stay within each seperate tank profile for easier managment.',
    image: featureImage,
  },
  {
    title: 'Fish Catalogue',
    description: 'A Short description, image, and table of information uploaded from wikipedia for over 600 commonly kept fish species. Each fish listed has a link to its respective wikipedia page for more in depth information. These fish can be added to any of your tank profiles currently only for keeping track, but in the future this will be used to calculate stocking level based on filter, tank size, plant density, etc.',
    image: featureImage,
  },
  {
    title: 'AI Chatbot',
    description: 'The custom built AI chatbot based on google gemini has been trained to specifically answer simple aquarium related questions. Due to the current nature of AI, this bot should only be used for simple questions and not for any sort of diagnosis for your fish. The messages, and responses ONLY communicate between the users device and gemini, Aquaflora does not save user data.\n\nThe chatbot is still in beta and shouldent be used as a final answer, it is very useful for any quick questions about different fish or equipment/techniques.',
    image: featureImage,
  },
  {
    title: 'Water Parameter Tracking',
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
                <div className="w-2/3 p-4">
                    <h2 style={{lineHeight:1.2}} className="text-black text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[0].title}</h2>
                    <p className="text-lg opacity-70">{featuresData[0].description}</p>
                </div>
                <div className="mx-auto w-1/3 md:block p-4 hidden">
                    <img src={featuresData[0].image} alt='title' className="w-full h-auto rounded-lg" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="mx-auto w-1/3 md:block p-4 hidden">
                    <img src={featuresData[1].image} alt='title' className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-2/3 p-4">
                    <h2 style={{lineHeight:1.2}} className="text-black text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[1].title}</h2>
                    <p className="text-lg opacity-70">{featuresData[1].description}</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="w-2/3 p-4">
                    <h2 style={{lineHeight:1.2}} className="text-black text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[2].title}</h2>
                    <p className="text-lg opacity-70">{featuresData[2].description}</p>
                </div>
                <div className="mx-auto w-1/3 md:block p-4 hidden">
                    <img src={featuresData[2].image} alt='title' className="w-full h-auto rounded-lg" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="mx-auto w-1/3 md:block p-4 hidden">
                    <img src={featuresData[3].image} alt='title' className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-2/3 p-4">
                    <h2 style={{lineHeight:1.2}} className="text-black text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[1].title}</h2>
                    <p className="text-lg opacity-70">{featuresData[3].description}</p>
                </div>
            </div>
        </div>
      </Layout>
    );
  };

export default FeaturesPage;
