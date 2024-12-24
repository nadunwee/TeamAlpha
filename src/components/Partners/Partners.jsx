import React from "react";
import { motion } from "framer-motion";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer/Footer";
import viskamMorters from "../../assets/partners/Viskam_Motors_Service_Centre.jpeg";
import princeJewel from "../../assets/partners/prince_jewel_house.png";
import sgm from "../../assets/partners/sgm.jpeg";
import meegasSewana from "../../assets/partners/meegas_sewana_resort.png";
import viskamIndustries from "../../assets/partners/viskam_industries.jpeg";
import sandasiriFlorist from "../../assets/partners/sandasiri_florist.jpeg";
import tushanPrinting from "../../assets/partners/tushanPtohography.jpeg";
import cargills from "../../assets/partners/cargills.png";
import chandrikaHotel from "../../assets/partners/chandrikaHotel.jpeg";
import SusanthaPathinana from "../../assets/partners/Susantha_pathinana.jpeg";
import ShanthaGems from "../../assets/partners/Shantha_gems.jpeg";
import lecson from "../../assets/partners/lecson.png";

const titlePartner = [
  {
    src: viskamMorters,
    alt: "Viskam Motors Service Centre",
  },
];

const bannerLogos = [
  {
    src: viskamMorters,
    alt: "Transistor",
  },
  {
    src: princeJewel,
    alt: "Reform",
  },
  {
    src: sgm,
    alt: "SavvyCal",
  },
  {
    src: meegasSewana,
    alt: "Statamic",
  },
  {
    src: viskamIndustries,
    alt: "Statamic",
  },
  {
    src: sandasiriFlorist,
    alt: "Statamic",
  },
  {
    src: chandrikaHotel,
    alt: "Statamic",
  },
  {
    src: SusanthaPathinana,
    alt: "Statamic",
  },
  {
    src: ShanthaGems,
    alt: "Statamic",
  },
  {
    src: lecson,
    alt: "dsflj",
  },
];

const photographyPartner = [
  { src: tushanPrinting, alt: "photography partner" },
];

const associatePartners = [{ src: cargills, alt: "" }];

const Partners = () => {
  // Create repeated logos for seamless scrolling
  const repeatedLogos = [...bannerLogos, ...bannerLogos];

  return (
    <>
      <div
        className="bg-cover bg-center py-8 sm:py-16 lg:py-24"
        style={{ backgroundColor: "#CDB898" }}
      >
        <NavigationBar />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
          <h2 className="text-center text-[25px] font-semibold text-gray-900">
            Our Associate Partners
          </h2>
          <div className="mt-10 overflow-hidden">
            <motion.div
              className="flex justify-center items-center"
              style={{ width: "100%", display: "flex" }}
            >
              {associatePartners.length > 0 ? (
                associatePartners.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-36 w-auto object-contain"
                    width={158}
                    height={48}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No Printing Partner Found.
                </p>
              )}
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
          <h2 className="text-center text-[25px] font-semibold text-gray-900">
            Our Printing Partner
          </h2>
          <div className="mt-10 overflow-hidden">
            <motion.div
              className="flex justify-center items-center"
              style={{ width: "100%", display: "flex" }}
            >
              {photographyPartner.length > 0 ? (
                photographyPartner.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-24 w-auto object-contain"
                    width={158}
                    height={48}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No Printing Partner Found.
                </p>
              )}
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
          <h2 className="text-center text-[25px] font-semibold text-gray-900">
            Our Complimentry Partners
          </h2>
          <div className="mt-10 overflow-hidden relative">
            <motion.div
              className="flex space-x-8"
              initial={{ x: 0 }}
              animate={{ x: `-${bannerLogos.length * 158}px` }} // Scroll width for one set
              transition={{
                duration: 20, // Adjust scroll speed
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                width: `${repeatedLogos.length * 158}px`, // Ensure enough width for smooth looping
              }}
            >
              {repeatedLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-24 w-auto object-contain"
                  width={158}
                  height={48}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partners;
