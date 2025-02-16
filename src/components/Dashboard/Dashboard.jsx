import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/newback.webp";
import GamesAvailable from "./GamesAvailable";
import YourTeam from "./YourTeam";

const Dashboard = () => {
  const navigate = useNavigate();
  const [teamData, setTeamData] = useState(null); // To store fetched team data
  const [errors, setErrors] = useState(null); // To handle errors
  const [transactions, setTransactions] = useState([]); // To store transactions

  console.log(transactions);

  useEffect(() => {
    const id = localStorage.getItem("id"); // Get the team ID from localStorage

    // If there's no ID in localStorage, redirect to login
    if (!id) {
      navigate("/login");
      return;
    }

    // Fetch team data
    const fetchTeamData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/team/get-team`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }), // Send the team ID in the body
          }
        );

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          setTeamData(data); // Set the fetched data to state
          fetchTransactions(data.team_name);
        } else {
          setErrors(data.error || "Something went wrong.");
        }
      } catch (error) {
        setErrors("An unexpected error occurred. Please try again.");
        console.error("Error:", error.message);
      }
    };

    const fetchTransactions = async (team_name) => {
      console.log(team_name);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/transaction/get-transactions`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ team_name }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          setTransactions(data);
        } else {
          setErrors(data.error || "Failed to fetch transactions.");
        }
      } catch (error) {
        setErrors("An error occurred while fetching transactions.");
      }
    };

    fetchTeamData();
  }, [navigate]);

  // Render loading, error or the team data
  if (!teamData) {
    if (errors) {
      return <div className="text-red-500 text-center">Error: {errors}</div>;
    }
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div className="relative bg-gray-800 text-white">
      <div className="bg-gray-900 py-24 sm:py-10">
        <div
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 filter blur-md"
        ></div>
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-700 lg:rounded-l-[2rem]"></div>
              <GamesAvailable />

              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gradient-to-r from-red-600 to-black shadow-lg max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-gray-900 max-lg:rounded-t-[calc(2rem+1px)] p-6">
                <p className="text-lg font-semibold tracking-tight text-gray-100 max-lg:text-center">
                  Coins Available
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-block w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                    💰
                  </span>
                  <p className="text-3xl font-bold text-gray-100">
                    {teamData.coins} ALP
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-md ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>

            <YourTeam />

            <div className="relative lg:row-span-2 h-full">
              <div className="absolute inset-px rounded-lg bg-gray-700 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-gray-800 shadow-md p-6">
                  <p className="text-lg font-semibold tracking-tight text-yellow-400 text-center">
                    Transaction History
                  </p>

                  {/* Scrollable Transaction List */}
                  <div className="mt-4 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500 max-h-[550px]">
                    {transactions.length > 0 ? (
                      transactions.map((item, index) => {
                        const amount = parseFloat(item.coins_amount) || 0;
                        const isPositive =
                          item.operation === "credit" ||
                          item.operation === "bonus";

                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-gray-600 p-4 rounded-lg shadow-sm mb-2 last:mb-0"
                          >
                            <div>
                              <p className="text-gray-100 font-medium">
                                {item.game_name || "Unknown Game"}
                              </p>
                              <p className="text-gray-300 text-sm">
                                {item.operation === "credit" && "Coins Earned"}
                                {item.operation === "debit" && "Coins Spent"}
                                {item.operation === "bonus" &&
                                  "Bonus Coins Received"}
                              </p>
                            </div>
                            <span
                              className={`font-semibold ${
                                isPositive ? "text-green-500" : "text-red-600"
                              }`}
                            >
                              {isPositive ? `+${amount} ALP` : `-${amount} ALP`}
                            </span>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-gray-300 text-center">
                        No transactions found.
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
