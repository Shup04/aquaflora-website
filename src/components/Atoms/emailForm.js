import React from 'react';

export const EmailForm = () => {
  return (
    <div className="mt-5 sm:mt-8 sm:flex justify-center sm:justify-start">
      <form className="flex w-3/4 ">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-3 bg-transparent border border-purple text-lg text-white rounded-l-md focus:outline-none"
          required
        />
        <button
          type="submit"
          className="transition-all duration-500ms hover:bg-transparent border border-purple ease-in-out hover:ease-in-out p-3 text-lg font-bold text-white bg-purple rounded-r-md hover:bg-purple-700 text-base font-medium focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
