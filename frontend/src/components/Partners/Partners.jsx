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
    alt: "visaka moters",
  },
  {
    src: princeJewel,
    alt: "prince jewel",
  },
  {
    src: sgm,
    alt: "sgm",
  },
  {
    src: meegasSewana,
    alt: "meegas sewana",
  },
  {
    src: viskamIndustries,
    alt: "viskam industries",
  },
  {
    src: sandasiriFlorist,
    alt: "sandasiri florist",
  },
  {
    src: chandrikaHotel,
    alt: "chandrika hotel",
  },
  {
    src: SusanthaPathinana,
    alt: "susantha pathinan",
  },
  {
    src: ShanthaGems,
    alt: "shantha gems",
  },
  {
    src: lecson,
    alt: "lecson",
  },
];

const photographyPartner = [{ src: tushanPrinting, alt: "tushan printing" }];

const associatePartners = [{ src: cargills, alt: "cargills" }];

const Partners = () => {
  const repeatedLogos = [...bannerLogos, ...bannerLogos, ...bannerLogos];

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

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 mb-12">
          <h2 className="text-center text-[25px] font-semibold text-gray-900">
            Our Printing Partner
          </h2>
          <div className="mt-10 overflow-hidden">
            <motion.div
              className="flex justify-center items-center"
              style={{ width: "100%", display: "flex" }}
            >
              {photographyPartner.map((logo, index) => (
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

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
          <h2 className="text-center text-[25px] font-semibold text-gray-900">
            Our Complimentary Partners
          </h2>
          <div className="mt-10 overflow-hidden relative">
            <motion.div
              className="flex space-x-8"
              initial={{ x: 0 }}
              animate={{ x: `-${bannerLogos.length * 158}px` }}
              transition={{
                duration: 20,
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
