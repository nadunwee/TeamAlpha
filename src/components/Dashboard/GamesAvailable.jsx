import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Clues from "./Clues";

const gamesList = [
  { name: "Communication", cost: 60, maxCoins: 140 },
  { name: "Conflict Resolution", cost: 80, maxCoins: 170 },
  { name: "Trust", cost: 110, maxCoins: 200 },
  { name: "Problem Solving", cost: 100, maxCoins: 150 },
  { name: "Team building", cost: 70, maxCoins: 120 },
  { name: "Rafting", cost: 140, maxCoins: 250 },
  { name: "Ariel Rope ", cost: 140, maxCoins: 250 },
];

const GamesAvailable = ({ coins }) => {
  const [isGames, setIsGames] = useState(true);
  const [purchasedClues, setPurchasedClues] = useState(0);
  const gamesContainerRef = useRef(null);

  useEffect(() => {
    if (gamesContainerRef.current) {
      gamesContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isGames]);

  const handlePurchase = async (clueName, cluePrice) => {
    console.log(clueName, clueName);

    if (coins >= cluePrice) {
      await unlockClueAPI(cluePrice, clueName);
      setPurchasedClues(purchasedClues + 1);
    } else {
      alert("You don't have enough coins to purchase this clue.");
    }
  };

  const unlockClueAPI = async (cluePrice, clueName) => {
    const team_name = localStorage.getItem("teamName");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/team/unlock-clue`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            team_name,
            clue_name: clueName,
            coins_spent: cluePrice,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        const transactionResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/transaction/create-transaction`,
          {
            team_name,
            coins_amount: parseInt(cluePrice),
            game_name: clueName,
            operation: "debit",
          }
        );
        if (transactionResponse.status === 201) {
          console.log("Transaction successful:", transactionResponse.data);
          window.location.reload();
        } else {
          alert("Transaction failed.");
        }
      } else {
        alert("Failed to unlock clue.");
      }
    } catch (error) {
      alert("Error unlocking clue or creating transaction.");
      console.error(error);
    }
  };

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] bg-gradient-to-r from-gray-700 to-gray-900 shadow-2xl">
      <div className="px-8 pt-10 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
        <div className="flex justify-center items-center mb-4 gap-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={!isGames}
              onChange={() => setIsGames(!isGames)}
            />
            <div className="w-44 h-12 bg-gray-600 rounded-full flex items-center px-4 peer-checked:bg-yellow-500 transition-all duration-300 relative overflow-hidden">
              <span
                className={`font-[15px] text-white absolute left-14 transition-all duration-300 ${
                  isGames ? "opacity-100" : "opacity-0"
                }`}
              >
                Show Clues
              </span>
              <div
                className={`w-10 h-10 bg-white rounded-full shadow-md absolute transition-transform duration-300 transform ${
                  isGames ? "translate-x-[-10px]" : "translate-x-[116.4px]"
                }`}
              ></div>
              <span
                className={`font-[15px] text-black absolute right-14 transition-all duration-300 ${
                  !isGames ? "opacity-100" : "opacity-0"
                }`}
              >
                Show Games
              </span>
            </div>
          </label>
        </div>

        {isGames ? (
          <>
            <p className="mt-2 text-lg font-semibold tracking-tight text-yellow-400 text-center">
              Games for the Day
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 text-center mb-6">
              Immerse yourself in the world of ancient warriors. Earn rewards
              for your efforts and conquer the battlefield.
            </p>
            <div
              ref={gamesContainerRef}
              className="mt-6 space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
            >
              {gamesList.map((game, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <p className="text-xl font-semibold text-gray-100 mb-2">
                    {game.name}
                  </p>
                  <p className="text-lg text-gray-400">
                    Game Cost: <span className="text-red-500">{game.cost}</span>
                  </p>
                  <p className="text-lg text-gray-400">
                    Max Earned Coins:{" "}
                    <span className="text-blue-500">{game.maxCoins}</span>
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <Clues
            purchasedClues={purchasedClues}
            handlePurchase={handlePurchase}
          />
        )}
      </div>
    </div>
  );
};

export default GamesAvailable;
