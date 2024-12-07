import { motion } from "framer-motion";
import NavigationBar from "../NavigationBar";
import jayodHeadshot from "../../assets/jayodHeadshot.jpg";
import manishaHeadshot from "../../assets/manishaHeadshot.jpg";
import yasithHeadshot from "../../assets/yasithHeadshot.jpg";
import charithHeadshot from "../../assets/charithHeadshot.jpg";
import amandiHeadshot from "../../assets/amandiHeadshot.jpg";
import dinuriBodHeadshot from "../../assets/dinuriBodHeadshot.jpg";
import dulashaHeadshot from "../../assets/dulashaHeadshot.jpg";
import tanuriHeadshot from "../../assets/tanuriHeadshot.jpg";
import kavishaHeadshot from "../../assets/kavishaHeadshot.jpg";
import tehanHeadshot from "../../assets/tehanHeadshot.jpg";
import ranukaHeadshot from "../../assets/ranukaHeadshot.jpg";
import tariniHeadshot from "../../assets/tariniHeadshot.jpg";
import sheniseHeadshot from "../../assets/sheniseHeadshot.jpg";
import danushkarHeadshot from "../../assets/danushkarHeadshot.jpg";
import seraHeadshot from "../../assets/seraHeadshot.jpg";
import shameenaHeadshot from "../../assets/shameenaHeadshot.jpg";
import geminiHeadshot from "../../assets/geminiHeadshot.jpg";
import chelakaHeadshot from "../../assets/chelakaHeadshot.jpg";
import lakshithaHeadshot from "../../assets/lakshiHeadshot.jpg";
import theepthiHeadshot from "../../assets/theepthiHeadshot.jpg";
import bishruHeadshot from "../../assets/bishruHeadshot.jpg";
import thisusHeadshot from "../../assets/thisusHeadshot.jpg";
import muhammedHeadshot from "../../assets/muhammedHeadshot.jpg";
import kisajaHeadshot from "../../assets/kisajaHeadshot.jpg";
import shanjaiHeadshot from "../../assets/shanjaiHeadshot.jpg";
import minupaHeadshot from "../../assets/minupaHeadshot.jpg";
import harithraHeadshot from "../../assets/harithraHeadshot.jpg";
import dasuniHeadshot from "../../assets/dasuniHeadshot.jpg";
import duwaragieHeadshot from "../../assets/duwaragieHeadshot.jpg";
import vimethHeadshot from "../../assets/vimethHeadshot.jpg";
import Footer from "../Footer/Footer";

const BoardOfOfficials = () => {
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

  return (
    <>
      <div
        className="bg-cover bg-center py-12 sm:py-16 lg:py-24"
        style={{ backgroundColor: "#CDB898" }} // Replace with the actual image path
      >
        <NavigationBar />
        <div className="flex flex-col items-center gap-12 px-4 sm:px-8 lg:px-16">
          <p className="font-assassin text-[35px] lg:text-[80px] mt-[50px] sm:mt-[50px] mb-[10px]">
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
      <Footer />
    </>
  );
};

export default BoardOfOfficials;
