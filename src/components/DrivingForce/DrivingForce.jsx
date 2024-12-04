import React from "react";
import { motion } from "framer-motion";
import NavigationBar from "../NavigationBar";
import DrivingForceBack from "../../assets/DrivingForceBack.png";
import lakshiImg from "../../assets/lakshiImg.png";

const DrivingForce = () => {
  const categories = {
    Directors: [
      {
        name: "Lakshitha",
        role: "Professional Development",
        image: lakshiImg,
      },
      {
        name: "Chelaka",
        role: "Professional Development",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    "Co-Chairs": [
      {
        name: "Miyuni",
        role: "",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Shenise",
        role: "",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    Finance: [
      {
        name: "Senadi",
        role: "Coordinator",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    "CP (Coporate Partnership)": [
      {
        name: "Sarah",
        role: "Coordinator",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Dinadi",
        role: "Member",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    RND: [
      {
        name: "Rishini",
        role: "Coordinator",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Manith",
        role: "Member",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Dinuri",
        role: "Member",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    "PR & IT": [
      {
        name: "Savini",
        role: "Coordinator",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Hashini",
        role: "Member",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Aftha",
        role: "Member",
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
        name: "Iman",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Sanduni",
        role: "PR & IT",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    Logistics: [
      {
        name: "Ijas",
        role: "Coordinator",
        imageUrl:
          "https://images.unsplash.com/photo-1502767089025-ed319e8c0c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Udeep",
        role: "Member",
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
      style={{ backgroundColor: "#CDB898" }} // Replace with the actual image path
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
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center mt-6 sm:mt-0"
              variants={itemVariants}
            >
              {category}
            </motion.h2>
            {/* People Cards */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
              {people.map((person) => (
                <motion.div
                  key={person.name}
                  className="group relative w-64 sm:w-72 h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden shadow-lg"
                  variants={itemVariants}
                >
                  {/* Image */}
                  <img
                    src={person.image || person.imageUrl}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm sm:text-base lg:text-2xl font-semibold text-center">
                      {person.name}
                    </span>
                    <span className="text-white text-xs sm:text-sm lg:text-base text-center">
                      {person.role}
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
