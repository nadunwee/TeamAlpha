import React from "react";
import NavigationBar from "../NavigationBar";
import backgroundImg from "../../assets/newback.webp";

const ScavengerHunt = () => {
  return (
    <>
      <NavigationBar />
      <div className="relative h-screen">
        {/* Background Image */}
        <div
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 filter blur-md"
        ></div>

        {/* Overlay Text */}
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white bg-opacity-75 px-4 py-2 rounded sm:text-7xl font-assassin">
            please stay tuned until the big day for more secrets
          </h1>
        </div>
      </div>
    </>
  );
};

export default ScavengerHunt;
