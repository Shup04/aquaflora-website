// featuresPage.js
import React from 'react';
import Layout from '../components/layout';
import featureImage from '../images/fishPortrait.png'

import fishItem from '../images/AppImages/fishItem.png'
import fishScreen from '../images/AppImages/fishScreen.png'
import infoScreen from '../images/AppImages/infoScreen.png'
import tankScreen1 from '../images/AppImages/tankScreen1.png'
import tankScreen2 from '../images/AppImages/tankScreen2.png'
import paramChart from '../images/AppImages/paramChart.png'

const featuresData = [
  {
    title: 'Custom Tank Profiles',
    description: 'The basis of the app is the ability to create a profile for each of your tanks. Each tank can have its own name, size, image, and short description. All of your fish, reminders, and water parameters stay within each seperate tank profile for easier managment.',
    image: tankScreen1,
  },
  {
    title: 'Fish Catalogue',
    description: 'A Short description, image, and table of information uploaded from wikipedia for over 600 commonly kept fish species. Each fish listed has a link to its respective wikipedia page for more in depth information. These fish can be added to any of your tank profiles currently only for keeping track, but in the future this will be used to calculate stocking level based on filter, tank size, plant density, etc.',
    image: fishScreen,
  },
  {
    title: 'AI Chatbot',
    description: 'The custom built AI chatbot based on google gemini has been trained to specifically answer simple aquarium related questions. Due to the current nature of AI, this bot should only be used for simple questions and not for any sort of diagnosis for your fish. The messages, and responses ONLY communicate between the users device and gemini, Aquaflora does not save user data.\n\nThe chatbot is still in beta and shouldent be used as a final answer, it is very useful for any quick questions about different fish or equipment/techniques.',
    image: tankScreen2,
  },
  {
    title: 'Water Parameter Tracking',
    description: 'Users can save measures parameters for nitrate, nitrite, pH, and ammonia. If current parameters are detected to be above the safe range, you will get an alert on the respective tank profile. This is a great tool for checking to see if there was a past nutrient spike in the case that one of your fish seems sick.',
    image: paramChart,
  },
  {
    title: 'Information Center',
    description: 'A great place to go for new aquarists to quickly learn about the hobby. The information center has a list of common fish diseases, types of equipment, maintenance strategies, etc. Each of these lists has a short description, in the future, links to extra resources will be included. This is a great place to start for new aquarists to learn about the hobby and what they might be interested in keeping.',
    image: infoScreen,
  },
];

const FeaturesPage = () => {
    return (
      <Layout>
<<<<<<< HEAD
        <div className="text-center py-10">
          <h1 className="text-primaryText text-3xl font-semibold leading-snug sm:text-3xl lg:text-6xl ">Our Features</h1>
          <h1 className="text-primaryText mt-4 font-montserrat text-xl ">Aquaflora has many useful features tailored to hobbiest aquarists.</h1>
        </div>
=======
        <header className="bg-gray-100 text-center py-10">
          <h1 className="text-primaryText text-3xl font-semibold leading-snug sm:text-3xl lg:text-6xl opacity-70">Our Features</h1>
          <h1 className="text-primaryText text-3xl font-semibold leading-snug sm:text-3xl lg:text-6xl opacity-70">Our Features</h1>
          <h1 className="mt-4 font-montserrat text-xl opacity-70">Aquaflora has many useful features tailored to hobbiest aquarists.</h1>
        </header>
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
        <div className="max-w-6xl mx-auto mt-10">

            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="w-2/3 p-4">
                    <h2 style={{lineHeight:1.2}} className="text-primaryText text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[0].title}</h2>
<<<<<<< HEAD
<<<<<<< HEAD
                    <p className="mt-3 font-montserrat text-base text-primaryText sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{featuresData[0].description}</p>
=======
=======
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
                    <p className="text-lg font-montserrat opacity-70">{featuresData[0].description}</p>
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
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
                    <h2 style={{lineHeight:1.2}} className="text-primaryText text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[1].title}</h2>
<<<<<<< HEAD
<<<<<<< HEAD
                    <p className="mt-3 font-montserrat text-base text-primaryText sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{featuresData[1].description}</p>
=======
=======
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
                    <p className="text-lg font-montserrat opacity-70">{featuresData[1].description}</p>
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="w-2/3 p-4">
                    <h2 style={{lineHeight:1.2}} className="text-primaryText text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[2].title}</h2>
<<<<<<< HEAD
<<<<<<< HEAD
                    <p className="mt-3 font-montserrat text-base text-primaryText sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{featuresData[2].description}</p>
=======
=======
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
                    <p className="text-lg font-montserrat opacity-70">{featuresData[2].description}</p>
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
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
                    <h2 style={{lineHeight:1.2}} className="text-primaryText text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[3].title}</h2>
<<<<<<< HEAD
<<<<<<< HEAD
                    <p className="mt-3 font-montserrat text-base text-primaryText sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{featuresData[3].description}</p>
=======
=======
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
                    <p className="text-lg font-montserrat opacity-70">{featuresData[3].description}</p>
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="w-2/3 p-4">
                    <h2 style={{lineHeight:1.2}} className="text-primaryText text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">{featuresData[4].title}</h2>
<<<<<<< HEAD
<<<<<<< HEAD
                    <p className="mt-3 font-montserrat text-base text-primaryText sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{featuresData[4].description}</p>
=======
=======
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
                    <p className="text-lg font-montserrat opacity-70">{featuresData[4].description}</p>
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
                </div>
                <div className="mx-auto w-1/3 md:block p-4 hidden">
                    <img src={featuresData[4].image} alt='title' className="w-full h-auto rounded-lg" />
                </div>
            </div>
        </div>
      </Layout>
    );
  };

export default FeaturesPage;
