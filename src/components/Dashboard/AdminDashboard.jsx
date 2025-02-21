import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure to install axios
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [teamName, setTeamName] = useState("");
  const [coins, setCoins] = useState("");
  const [gameName, setGameName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [updatedCoins, setUpdatedCoins] = useState(null); // Store updated coins
  const [operation, setOperation] = useState("credit");
  const navigate = useNavigate();

  // Check localStorage for ID on component mount
  useEffect(() => {
    const id = localStorage.getItem("id");
    const name = localStorage.getItem("teamName");

    if (name !== "Admin Access" || !id) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Create the transaction
      const transactionResponse = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/transaction/create-transaction`,
        {
          team_name: teamName,
          coins_amount: parseInt(coins),
          game_name: gameName,
          operation: operation,
        }
      );

      if (transactionResponse.status === 201) {
        // Update the team's coins

        const updateResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/team/update-coins`,
          {
            team_name: teamName,
            coins: parseInt(coins),
            operation: operation,
          }
        );

        if (updateResponse.status === 200) {
          setSuccess(true);
          setUpdatedCoins(updateResponse.data.coins);
          setUpdatedCoins(updateResponse.data.coins);
        }
      }

      // Reset form
      setTeamName("");
      setCoins("");
      setGameName("");
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "An error occurred while creating the transaction"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="bg-gray-900 py-6 sm:py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-lg">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 shadow-2xl p-4 sm:p-8">
            <h1 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6 text-center">
              Team Coins Management
            </h1>

            {error && (
              <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-300 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-300 text-sm">
                Transaction created successfully! New Coins: {updatedCoins}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="teamName"
                  className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Team Name
                </label>
                <input
                  id="teamName"
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-600 border border-gray-500 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder-gray-400 text-sm sm:text-base outline-none"
                  placeholder="Enter team name"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label
                  htmlFor="coins"
                  className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Enter Alphonics Amount
                </label>
                <input
                  id="coins"
                  type="number"
                  value={coins}
                  onChange={(e) => setCoins(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-600 border border-gray-500 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder-gray-400 text-sm sm:text-base outline-none"
                  placeholder="Enter amount"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label
                  htmlFor="gameName"
                  className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Game Category
                </label>
                <input
                  id="gameName"
                  type="text"
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-600 border border-gray-500 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder-gray-400 text-sm sm:text-base outline-none"
                  placeholder="Enter transaction name"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label
                  htmlFor="operation"
                  className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Operation Type
                </label>
                <select
                  id="operation"
                  value={operation}
                  onChange={(e) => setOperation(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-600 border border-gray-500 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder-gray-400 text-sm sm:text-base outline-none"
                  required
                  disabled={isLoading}
                >
                  <option value="credit">Credit (Add Coins)</option>
                  <option value="debit">Debit (Remove Coins)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-colors shadow-md text-sm sm:text-base ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Creating Transaction..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
