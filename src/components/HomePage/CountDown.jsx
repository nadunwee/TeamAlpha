import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-02-12T00:00:00Z");
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setCountdown("Event started!");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-[#CDB898] rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-white uppercase tracking-wide border-b-4 border-white pb-2 font-assassin">
        Until the Brotherhood
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {countdown.split(" ").map((time, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-14 h-14 bg-white text-black rounded-md shadow-md text-lg font-bold sm:w-16 sm:h-16 xs:w-12 xs:h-12"
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountDown;
