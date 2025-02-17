import React, { useEffect, useState } from "react";
import axios from "axios";
import Clues from "./Clues";

const GamesAvailable = () => {
  const [isGames, setIsGames] = useState(true);
  const [purchasedClues, setPurchasedClues] = useState(0);
  const [coins, setCoins] = useState(500); // Example starting coin value

  const handlePurchase = async (clueIndex, clueName, cluePrice) => {
    if (coins >= cluePrice) {
      setCoins(coins - cluePrice); // Deduct coins
      // Call the API to unlock the clue here
      await unlockClueAPI(cluePrice, clueName);
      setPurchasedClues(purchasedClues + 1); // Update purchased clues count
    } else {
      alert("You don't have enough coins to purchase this clue.");
    }
  };

  const unlockClueAPI = async (cluePrice, clueName) => {
    const team_name = localStorage.getItem("teamName"); // Get the team name from localStorage

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/team/unlock-clue`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            team_name: team_name,
            clue_name: clueName,
            coins_spent: cluePrice,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        // Create a transaction after unlocking the clue
        const transactionResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/transaction/create-transaction`,
          {
            team_name: team_name,
            coins_amount: parseInt(cluePrice),
            game_name: clueName,
            operation: "debit",
          }
        );

        if (transactionResponse.status === 201) {
          console.log("Transaction successful:", transactionResponse.data);
          window.location.reload(); // Reload the page to update the state
        } else {
          alert("Transaction failed.");
          console.log("Transaction failed:", transactionResponse.status);
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
      <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
        {/* Toggle Button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsGames(!isGames)}
            className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600"
          >
            {isGames ? "Show Clues" : "Show Games"}
          </button>
        </div>

        {isGames ? (
          <>
            <p className="mt-2 text-lg font-semibold tracking-tight text-yellow-400 text-center">
              Assassin's Creed Games
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 text-center mb-6">
              Immerse yourself in the world of ancient warriors. Earn rewards
              for your efforts and conquer the battlefield.
            </p>
            <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-xl font-semibold text-gray-100 mb-2">
                Assassin's Creed Valhalla
              </p>
              <p className="text-lg text-gray-400">
                Game Cost: <span className="text-red-500">100</span>
              </p>
              <p className="text-lg text-gray-400">
                Max Earned Coins: <span className="text-blue-500">200</span>
              </p>
            </div>
          </>
        ) : (
          <Clues
            purchasedClues={purchasedClues}
            coins={coins}
            handlePurchase={handlePurchase}
          />
        )}
      </div>
    </div>
  );
};

export default GamesAvailable;
