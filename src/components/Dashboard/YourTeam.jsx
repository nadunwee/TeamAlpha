import React from "react";

const YourTeam = () => {
  return (
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
                <p className="text-gray-100 font-medium">{member.name}</p>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
    </div>
  );
};

export default YourTeam;
