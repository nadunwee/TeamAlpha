import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/newback.webp";

const Dashboard = () => {
  const navigate = useNavigate();
  const [teamData, setTeamData] = useState(null); // To store fetched team data
  const [errors, setErrors] = useState(null); // To handle errors

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
        } else {
          setErrors(data.error || "Something went wrong.");
        }
      } catch (error) {
        setErrors("An unexpected error occurred. Please try again.");
        console.error("Error:", error.message);
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
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] bg-gradient-to-r from-gray-700 to-gray-900 shadow-2xl">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-semibold tracking-tight text-yellow-400 text-center">
                    Assassin's Creed Games
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 text-center mb-6">
                    Immerse yourself in the world of ancient warriors. Earn
                    rewards for your efforts and conquer the battlefield.
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

            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gray-700"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-gray-800 shadow-md p-6">
                <p className="text-lg font-semibold tracking-tight text-yellow-500 text-center">
                  Your Team
                </p>
                <div className="mt-4 space-y-4 overflow-y-auto max-h-[14rem] pr-2 scrollbar-thin scrollbar-thumb-gray-500">
                  {[
                    { name: "Ezio Auditore", role: "Assassin" },
                    { name: "Altaïr Ibn-La'Ahad", role: "Mentor" },
                    { name: "Edward Kenway", role: "Pirate Assassin" },
                    { name: "Kassandra", role: "Mercenary" },
                    { name: "Bayek of Siwa", role: "Medjay" },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-600 p-4 rounded-lg shadow-sm"
                    >
                      <div>
                        <p className="text-gray-100 font-medium">
                          {member.name}
                        </p>
                        <p className="text-gray-300 text-sm">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>

            <div className="relative lg:row-span-2 h-full">
              <div className="absolute inset-px rounded-lg bg-gray-700 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-gray-800 shadow-md p-6">
                  <p className="text-lg font-semibold tracking-tight text-yellow-400 text-center">
                    Transaction History
                  </p>
                  <div className="mt-4 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500">
                    {[
                      {
                        title: "Coins Earned",
                        desc: "Completed Challenge #23",
                        amount: "+50 ALP",
                        color: "text-green-500",
                      },
                      {
                        title: "Coins Spent",
                        desc: "Unlocked New Game Mode",
                        amount: "-30 ALP",
                        color: "text-red-600",
                      },
                      {
                        title: "Bonus Reward",
                        desc: "Top 5 Team Ranking",
                        amount: "+100 ALP",
                        color: "text-green-500",
                      },
                      {
                        title: "Coins Deducted",
                        desc: "Penalty for Late Submission",
                        amount: "-20 ALP",
                        color: "text-red-600",
                      },
                      {
                        title: "Referral Bonus",
                        desc: "Invited a new user",
                        amount: "+40 ALP",
                        color: "text-green-500",
                      },
                      {
                        title: "Coins Spent",
                        desc: "Purchased Item #12",
                        amount: "-15 ALP",
                        color: "text-red-600",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-600 p-4 rounded-lg shadow-sm mb-2 last:mb-0"
                      >
                        <div>
                          <p className="text-gray-100 font-medium">
                            {item.title}
                          </p>
                          <p className="text-gray-300 text-sm">{item.desc}</p>
                        </div>
                        <span className={`font-semibold ${item.color}`}>
                          {item.amount}
                        </span>
                      </div>
                    ))}
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
