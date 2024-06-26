import React from 'react';

export const EmailForm = () => {
  return (
    <div className="mt-5 sm:mt-8 sm:flex justify-center w-full w-full sm:justify-start">
      <form 
        action="https://formspree.io/f/mrgnnzpg"
        method="POST"
        className="flex lg:w-3/4 w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-3 sm:w-auto w-1/2 bg-transparent border border-purple text-lg text-white rounded-l-md focus:outline-none"
          name="email"
          required
        />
        <button
          type="submit"
          className="transition-all duration-500ms hover:bg-transparent border border-purple ease-in-out hover:ease-in-out p-5 text-lg font-bold text-white bg-purple rounded-r-md hover:bg-purple-700 text-base font-medium focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
