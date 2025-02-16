import React from "react";

const GamesAvailable = () => {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] bg-gradient-to-r from-gray-700 to-gray-900 shadow-2xl">
      <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
        <p className="mt-2 text-lg font-semibold tracking-tight text-yellow-400 text-center">
          Assassin's Creed Games
        </p>
        <p className="mt-2 max-w-lg text-sm/6 text-gray-400 text-center mb-6">
          Immerse yourself in the world of ancient warriors. Earn rewards for
          your efforts and conquer the battlefield.
        </p>

        {/* Section with game name and coins */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-xl font-semibold text-gray-100 mb-2">
            Assassin's Creed Valhalla
          </p>
          <p className="text-lg text-gray-400">
            Coins: <span className="text-green-500">500</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GamesAvailable;
