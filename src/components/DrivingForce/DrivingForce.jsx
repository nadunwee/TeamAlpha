import React from "react";
import { motion } from "framer-motion";
import NavigationBar from "../NavigationBar";

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
    <div className="bg-white py-24 sm:py-32">
      <NavigationBar />
      <div className="flex flex-col items-center gap-12">
        {Object.entries(categories).map(([category, people]) => (
          <motion.div
            key={category}
            className="w-full text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Category Title */}
            <motion.h2
              className="text-2xl font-bold mb-8"
              variants={itemVariants}
            >
              {category}
            </motion.h2>
            {/* People Cards */}
            <div className="flex justify-center gap-8">
              {people.map((person) => (
                <motion.div
                  key={person.name}
                  className="group relative w-40 h-40 rounded-lg overflow-hidden shadow-lg"
                  variants={itemVariants}
                >
                  {/* Image */}
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">
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
