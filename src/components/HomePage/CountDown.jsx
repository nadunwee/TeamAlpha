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

      setCountdown(
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
      );
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return <div>{countdown}</div>;
};

export default CountDown;
