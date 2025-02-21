import React, { useEffect, useState } from "react";

const YourTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const team_name = localStorage.getItem("teamName");

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/team/get-member`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              team_name,
            }),
          }
        );
        const data = await response.json();

        console.log(data);

        if (data.team_members) {
          setTeamMembers(data.team_members);
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
      <div className="absolute inset-px rounded-lg bg-gray-700"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-gray-800 shadow-md p-6">
        <p className="text-lg font-semibold tracking-tight text-yellow-500 text-center">
          Your Team
        </p>
        <div className="mt-4 space-y-4 overflow-y-auto max-h-[14rem] pr-2 scrollbar-thin scrollbar-thumb-gray-500">
          {teamMembers.length > 0 ? (
            teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-600 p-4 rounded-lg shadow-sm"
              >
                <div>
                  <p className="text-gray-100 font-medium">{member.name}</p>
                  <p className="text-gray-300 text-sm">{member.position}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No team members found</p>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
    </div>
  );
};

export default YourTeam;
