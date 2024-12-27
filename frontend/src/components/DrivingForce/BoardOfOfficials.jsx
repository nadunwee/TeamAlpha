import { useState, lazy, Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

const NavigationBar = lazy(() => import("../NavigationBar"));
const Footer = lazy(() => import("../Footer/Footer"));

import jayodHeadshot from "../../assets/jayodHeadshot.webp";
import manishaHeadshot from "../../assets/manishaHeadshot.webp";
import yasithHeadshot from "../../assets/yasithHeadshot.webp";
import charithHeadshot from "../../assets/charithHeadshot.webp";
import amandiHeadshot from "../../assets/amandiHeadshot.webp";
import dinuriBodHeadshot from "../../assets/dinuriBodHeadshot.webp";
import dulashaHeadshot from "../../assets/dulashaHeadshot.webp";
import tanuriHeadshot from "../../assets/tanuriHeadshot.webp";
import kavishaHeadshot from "../../assets/kavishaHeadshot.webp";
import tehanHeadshot from "../../assets/tehanHeadshot.webp";
import ranukaHeadshot from "../../assets/ranukaHeadshot.webp";
import tariniHeadshot from "../../assets/tariniHeadshot.webp";
import danushkarHeadshot from "../../assets/danushkarHeadshot.webp";
import seraHeadshot from "../../assets/seraHeadshot.webp";
import shameenaHeadshot from "../../assets/shameenaHeadshot.webp";
import geminiHeadshot from "../../assets/geminiHeadshot.webp";
import chelakaHeadshot from "../../assets/chelakaHeadshot.webp";
import lakshithaHeadshot from "../../assets/lakshiHeadshot.webp";
import theepthiHeadshot from "../../assets/theepthiHeadshot.webp";
import bishruHeadshot from "../../assets/bishruHeadshot.webp";
import thisusHeadshot from "../../assets/thisusHeadshot.webp";
import muhammedHeadshot from "../../assets/muhammedHeadshot.webp";
import kisajaHeadshot from "../../assets/kisajaHeadshot.webp";
import shanjaiHeadshot from "../../assets/shanjaiHeadshot.webp";
import minupaHeadshot from "../../assets/minupaHeadshot.webp";
import harithraHeadshot from "../../assets/harithraHeadshot.webp";
import dasuniHeadshot from "../../assets/dasuniHeadshot.webp";
import duwaragieHeadshot from "../../assets/duwaragieHeadshot.webp";
import vimethHeadshot from "../../assets/vimethHeadshot.webp";

const BoardOfOfficials = () => {
  const ITEMS_PER_PAGE = 29; // Number of items to show initially and per load
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const categories = {
    president: [
      {
        name: "Jayod",
        role: "President",
        image: jayodHeadshot,
      },
    ],
    "board members": [
      {
        name: "Manisha",
        role: "Immediate Past President",
        imageUrl: manishaHeadshot,
      },
      {
        name: "Yasith",
        role: "Vice President / SGT at arms",
        imageUrl: yasithHeadshot,
      },
      {
        name: "Vimeth",
        role: "Vice President",
        imageUrl: vimethHeadshot,
      },
      {
        name: "Charith",
        role: "Secretary",
        imageUrl: charithHeadshot,
      },
      {
        name: "Dinuri",
        role: "Assistant Secretary",
        imageUrl: dinuriBodHeadshot,
      },
      {
        name: "Amandi",
        role: "Assistant Secretary",
        imageUrl: amandiHeadshot,
      },
      {
        name: "Dulasha",
        role: "Treasurer",
        imageUrl: dulashaHeadshot,
      },
      {
        name: "Tanuri",
        role: "Editor",
        imageUrl: tanuriHeadshot,
      },
      {
        name: "Kavisha",
        role: "Editor",
        imageUrl: kavishaHeadshot,
      },
      {
        name: "Tehan",
        role: "Director - Membership Development",
        imageUrl: tehanHeadshot,
      },
      {
        name: "Ranuka",
        role: "Director - Club Service",
        imageUrl: ranukaHeadshot,
      },
      {
        name: "Tarini",
        role: "Directress - Club Service",
        imageUrl: tariniHeadshot,
      },
      {
        name: "Danushkar",
        role: "Director - Community Service",
        imageUrl: danushkarHeadshot,
      },
      {
        name: "Sarah",
        role: "Directress - Community Service",
        imageUrl: seraHeadshot,
      },
      {
        name: "Shameena",
        role: "Directress - International Service",
        imageUrl: shameenaHeadshot,
      },
      {
        name: "Gemini",
        role: "Directress - International Service",
        imageUrl: geminiHeadshot,
      },
      {
        name: "Chelaka",
        role: "Director - Professional Development",
        imageUrl: chelakaHeadshot,
      },
      {
        name: "Lakshitha",
        role: "Directress - Professional Development",
        imageUrl: lakshithaHeadshot,
      },
      {
        name: "Theeptika",
        role: "Directress - Corporate Partnerships",
        imageUrl: theepthiHeadshot,
      },
      {
        name: "Dasuni",
        role: "Directress - Finance",
        imageUrl: dasuniHeadshot,
      },
      {
        name: "Bishru",
        role: "Director - Information Technology",
        imageUrl: bishruHeadshot,
      },
      {
        name: "Thisus",
        role: "Director - Information Technology",
        imageUrl: thisusHeadshot,
      },
      {
        name: "Muhammed",
        role: "Director - Public Relations",
        imageUrl: muhammedHeadshot,
      },
      {
        name: "Shanjai",
        role: "Director - Public Relations",
        imageUrl: shanjaiHeadshot,
      },
      {
        name: "Kisaja",
        role: "Director - Sports",
        imageUrl: kisajaHeadshot,
      },
      {
        name: "Minupa",
        role: "Coordinator - Sports",
        imageUrl: minupaHeadshot,
      },
      {
        name: "Harithra",
        role: "Coordinator - PR & IT",
        imageUrl: harithraHeadshot,
      },
      {
        name: "Duwaragie",
        role: "Coordinator - PR & IT",
        imageUrl: duwaragieHeadshot,
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

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <>
      <div
        className="bg-cover bg-center py-12 sm:py-16 lg:py-24"
        style={{ backgroundColor: "#CDB898" }}
      >
        <Suspense fallback={<div>Loading Navigation Bar...</div>}>
          <NavigationBar />
        </Suspense>

        <div className="flex flex-col items-center gap-12 px-4 sm:px-8 lg:px-16">
          <p className="font-assassin text-[35px] lg:text-[80px] mt-[50px] sm:mt-[20px]">
            racsliit board of officials
          </p>

          {Object.entries(categories).map(([category, people]) => (
            <motion.div
              key={category}
              className="w-full"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* People Cards */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
                {people.slice(0, visibleItems).map((person) => (
                  <motion.div
                    key={person.name}
                    className="group relative w-64 sm:w-72 h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden shadow-lg"
                    variants={itemVariants}
                  >
                    {/* Lazy-loaded Image */}
                    <LazyLoadImage
                      src={person.image || person.imageUrl}
                      alt={person.name}
                      effect="blur" // Adds blur effect while loading
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

              {/* Load More Button */}
              {visibleItems < people.length && (
                <button
                  onClick={handleLoadMore}
                  className="mt-6 px-4 py-2 bg-black text-white rounded-md"
                >
                  Load More
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default BoardOfOfficials;
