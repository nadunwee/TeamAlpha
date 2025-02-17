import React, { useState, useEffect } from "react";
import axios from "axios"; // To make API requests

const Clues = ({ purchasedClues, coins, handlePurchase }) => {
  const [showModal, setShowModal] = useState(false);
  const [clueModal, setClueModal] = useState(null);
  const [unlockedClues, setUnlockedClues] = useState([]); // To store unlocked clues
  const team_name = localStorage.getItem("teamName"); // Get the team name from localStorage

  // Array containing objects with both the clue text and price
  const clues = [
    { clue: "Follow the raven to find your next treasure.", price: 100 },
    { clue: "A hidden blade lies where the sun sets.", price: 200 },
    { clue: "The key to victory is under the old oak tree.", price: 300 },
    { clue: "Seek the water’s edge for the next step.", price: 400 },
    { clue: "A whisper in the wind carries the answer.", price: 500 },
    { clue: "The forgotten ruins hold secrets of the past.", price: 600 },
    { clue: "Stars above guide the way to the hidden path.", price: 700 },
    { clue: "A warrior’s tomb hides more than just bones.", price: 800 },
    { clue: "The enemy’s fortress contains what you seek.", price: 900 },
    { clue: "Your final clue lies in the heart of the city.", price: 1000 },
  ];

  useEffect(() => {
    // Fetch unlocked clues from the API on component mount
    const fetchUnlockedClues = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/team/get-clues`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              team_name: team_name,
            }),
          }
        );
        const data = await response.json(); // Convert the response to JSON

        console.log(data); // Log the response to check its structure

        // Safely access unlocked_clues in the response
        setUnlockedClues(data?.unlocked_clues || []);
      } catch (error) {
        console.error("Failed to fetch unlocked clues:", error);
      }
    };

    fetchUnlockedClues();
  }, [team_name]);

  const handleCluePurchase = async (clueIndex) => {
    const clue = clues[clueIndex];
    await handlePurchase(clueIndex, clue.clue, clue.price); // Pass the clue name and price to the API
    setShowModal(false); // Close the modal after purchase
  };

  return (
    <div>
      <p className="mt-2 text-lg font-semibold tracking-tight text-yellow-400 text-center">
        Clues
      </p>
      <p className="mt-2 max-w-lg text-sm/6 text-gray-400 text-center mb-6">
        Unlock secrets to aid your journey in the game.
      </p>

      {/* Purchase Clues Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Purchase Clues
        </button>
      </div>

      {/* Display Purchased Clues */}
      <div className="mt-6 space-y-4">
        {unlockedClues.length > 0 ? (
          unlockedClues.map((clue, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700"
              onClick={() => setClueModal(index)}
            >
              <p className="text-xl font-semibold text-gray-100">
                Clue {index + 1}: {clue.clue_name || "No name"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No clues unlocked yet.</p>
        )}
      </div>

      {/* Modal for purchasing clues */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold text-yellow-400 mb-4">
              Purchase Clue {purchasedClues + 1}
            </p>
            {purchasedClues < 10 ? (
              <>
                <p className="text-gray-400 mb-6">
                  Unlock clue {purchasedClues + 1} for{" "}
                  {clues[purchasedClues].price} coins.
                </p>
                <button
                  onClick={() => handleCluePurchase(purchasedClues)} // Use the new function to handle purchase
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Purchase Clue {purchasedClues + 1}
                </button>
              </>
            ) : (
              <p className="text-gray-400 mb-6">
                All clues have been purchased.
              </p>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-4 ml-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for viewing a clue */}
      {clueModal !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold text-yellow-400 mb-4">
              Clue {clueModal + 1}
            </p>
            <p className="text-gray-400 mb-6">{clues[clueModal].clue}</p>
            <button
              onClick={() => setClueModal(null)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clues;
