import React from 'react';

export const EmailForm = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold text-white mb-6">Subscribe to our Newsletter</h2>
      <form 
        action="https://formspree.io/f/mrgnnzpg"
        method="POST"
        className="flex flex-col items-center w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 text-lg text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          className="w-full p-3 text-lg font-bold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

