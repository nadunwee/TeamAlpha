import React from "react";
import { motion } from "framer-motion";
import NavigationBar from "../NavigationBar";
import DrivingForceBack from "../../assets/DrivingForceBack.png";

const DrivingForce = () => {
  const categories = {
    Directors: [
      {
        name: "Chelaka",
        role: "Director",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Lakshi",
        role: "Director",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    "Co-Chairs": [
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    "CP (Coporate Partnership)": [
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    RND: [
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    "PR & IT": [
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Nadun",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    Deligates: [
      {
        name: "Ranudi",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Ranudi",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Ranudi",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    Finance: [
      {
        name: "Ranudi",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    Logistics: [
      {
        name: "Ranudi",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Ranudi",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Ranudi",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      className="bg-cover bg-center py-12 sm:py-16 lg:py-24"
      style={{ backgroundImage: `url(${DrivingForceBack})` }} // Replace with the actual image path
    >
      <NavigationBar />
      <div className="flex flex-col items-center gap-12 px-4 sm:px-8 lg:px-16">
        {Object.entries(categories).map(([category, people]) => (
          <motion.div
            key={category}
            className="w-full"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Category Title */}
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center"
              variants={itemVariants}
            >
              {category}
            </motion.h2>
            {/* People Cards */}
            <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {people.map((person) => (
                <motion.div
                  key={person.name}
                  className="group relative w-full h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden shadow-lg"
                  variants={itemVariants}
                >
                  {/* Image */}
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="w-full h-full object-cover "
                  />
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm sm:text-base lg:text-lg font-semibold">
                      {person.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DrivingForce;
