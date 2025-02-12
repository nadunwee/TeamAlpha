import React, { useState } from "react";

const AdminDashboard = () => {
  const [teamName, setTeamName] = useState("");
  const [coins, setCoins] = useState("");
  const [operation, setOperation] = useState("addition");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ teamName, coins, operation });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="bg-gray-900 py-6 sm:py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-lg">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 shadow-2xl p-4 sm:p-8">
            <h1 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6 text-center">
              Team Coins Management
            </h1>

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
                />
              </div>

              <div>
                <label
                  htmlFor="coins"
                  className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Coins Amount
                </label>
                <input
                  id="coins"
                  type="number"
                  value={coins}
                  onChange={(e) => setCoins(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-600 border border-gray-500 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder-gray-400 text-sm sm:text-base outline-none"
                  placeholder="Enter coins amount"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="operation"
                  className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Operation
                </label>
                <select
                  id="operation"
                  value={operation}
                  onChange={(e) => setOperation(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-600 border border-gray-500 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-white text-sm sm:text-base outline-none"
                >
                  <option className="bg-gray-700" value="addition">
                    Addition
                  </option>
                  <option className="bg-gray-700" value="deduction">
                    Deduction
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                >
                  Submit
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
