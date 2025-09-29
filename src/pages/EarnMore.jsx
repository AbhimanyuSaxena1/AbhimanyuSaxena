import React from 'react';

const EarnMore = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4">
      <h1 className="font-[PhatBoy] text-4xl md:text-6xl text-blue-900 mb-6">Earn More</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-2xl text-center">
        Discover how you can earn more rewards, exclusive content, and special offers with PlayStation 5. Stay tuned for upcoming events and opportunities to maximize your gaming experience!
      </p>
      <a href="https://www.playstation.com/en-in/ps5/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-3 bg-blue-700 text-white rounded-full font-bold shadow-lg hover:bg-blue-900 transition-colors">Official PS5 Site</a>
    </div>
  );
};

export default EarnMore;
