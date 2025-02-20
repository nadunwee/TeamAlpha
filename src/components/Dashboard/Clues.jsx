import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Clues = ({ purchasedClues, handlePurchase }) => {
  const [showModal, setShowModal] = useState(false);
  const [clueModal, setClueModal] = useState(null);
  const [unlockedClues, setUnlockedClues] = useState([]); // To store unlocked clues
  const team_name = localStorage.getItem("teamName"); // Get the team name from localStorage
  const [allCompleted, setAllCompleted] = useState(false);
  const [password, setPassword] = useState("");
  const phoneNum = "0717439912";

  console.log(unlockedClues);

  // Array containing objects with both the clue text and price
  const clues = [
    {
      clue: "A veil I wear, with grace I stand \n Quiet strength at my command \n Modest, strong, a mind set free \n Can you guess the name for me?",
      price: 270,
    },
    {
      clue: "Waves of hair and specs so dark, \n A beard that leaves a lasting mark, \n A shadow moves, both strong and wise, \n Who am I? Just use your eyes!",
      price: 300,
    },
    {
      clue: "With glasses clear, my world is bright, \n A small-built figure, yet sharp in sight, \n Straight as steel, my hair does lie, \n Guess my name—just give it a try!",
      price: 330,
    },
    {
      clue: "I spy with lenses, crisp and true, \n Without them, though, I’ve lost my view! \n A single trait to help you see, \n Guess my name—who could I be",
      price: 360,
    },
    {
      clue: "Round and bright, like the morning sun, \n Short in height, but full of fun, \n Curly locks that dance with cheer, \n A fair glow that shines so clear",
      price: 420,
    },
    {
      clue: "Silky strands that dance and flow, \n An oval frame where features glow, \n A face familiar, sleek and true, \n Guess my name—who am I to you?",
      price: 390,
    },
    {
      clue: "A jaw so sharp, a face so bright, \n Fair as the moon, glowing with light, \n Though I stand small, I shine with grace, \n With wavy locks that frame my face, \n Guess my name, take a peek, \n The answer's here if you seek!",
      price: 450,
    },
    {
      clue: "I rise above, I see the ground, \n The largest giant the creed has found, \n With steps so long, my stride is wide, \n Who am I? Take a guess with pride!",
      price: 500,
    },
    {
      clue: "All Clues Completed",
      price: 800,
    },
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
    if (clueIndex === 0) {
      await handlePurchase(clue.clue, clue.price); // Pass the clue name and price to the API
    } else if (clueIndex > 0) {
      switch (password) {
        case "123":
          await handlePurchase(clues[1].clue, clues[1].price);
          break;
        case "456":
          await handlePurchase(clues[2].clue, clues[2].price);
          break;
        case "789":
          await handlePurchase(clues[3].clue, clues[3].price);
          break;
        case "101112":
          await handlePurchase(clues[4].clue, clues[4].price);
          break;
        case "131415":
          await handlePurchase(clues[5].clue, clues[5].price);
          break;
        case "161718":
          await handlePurchase(clues[6].clue, clues[6].price);
          break;
        case "42309098":
          await handlePurchase(clues[7].clue, clues[7].price);
          break;
        case "800":
          await handlePurchase(clues[8].clue, clues[8].price);
          setAllCompleted(true);
          break;
        default:
          alert("Incorrect password in switch.");
          break;
      }
    }
    setShowModal(false); // Close the modal after purchase
  };

  return (
    <div>
      <p className="mt-2 text-lg font-semibold tracking-tight text-yellow-400 text-center">
        Scavenger Hunt
      </p>
      <p className="mt-2 max-w-lg text-sm/6 text-gray-400 text-center mb-6">
        Unlock secrets to aid your journey in the game.
      </p>

      {/* Purchase Clues Button */}
      {/* <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Purchase Clues
        </button>
      </div> */}
      {!allCompleted ? (
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Purchase Clues
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 bg-green-500 text-white p-6 rounded-lg shadow-lg"
          >
            <p className="text-2xl font-bold">🎉 Congratulations! 🎉</p>
            <p className="text-3xl font-extrabold mt-4">{phoneNum}</p>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Display Purchased Clues */}
      <div className="mt-6 space-y-4 max-h-[350px] overflow-y-auto">
        {unlockedClues.length > 0 ? (
          unlockedClues.map((clue, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700"
              onClick={() => setClueModal(index)}
            >
              <p className="text-xl text-center font-semibold text-gray-100">
                Clue {index + 1}
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
              Purchase Clue {unlockedClues.length + 1}
            </p>
            {unlockedClues.length != 8 ? (
              <>
                <p className="text-gray-400 mb-6">
                  Unlock clue {unlockedClues.length + 1} for{" "}
                  {clues[unlockedClues.length].price} coins.
                </p>
                {unlockedClues.length > 0 && (
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg mb-4"
                  />
                )}

                <button
                  onClick={() => handleCluePurchase(unlockedClues.length)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Purchase Clue {unlockedClues.length + 1}
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
            <p className="text-gray-400 mb-6 whitespace-pre-line">
              {clues[clueModal].clue}
            </p>
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
