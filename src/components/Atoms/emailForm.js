import React from 'react';

export const EmailForm = () => {
  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <h2 className="text-3xl font-bold text-white mb-6">Subscribe to our Newsletter</h2>
      <form className="flex w-full max-w-md ">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-3 text-lg text-black rounded-l-md focus:outline-none"
          required
        />
        <button
          type="submit"
          className="p-3 text-lg font-bold text-white bg-purple rounded-r-md hover:bg-purple-700 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
