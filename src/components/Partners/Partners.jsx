import React from "react";
import { motion } from "framer-motion";
import NavigationBar from "../NavigationBar";

const logos = [
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    alt: "Transistor",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    alt: "Reform",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    alt: "SavvyCal",
  },
];

const bannerLogos = [
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    alt: "Transistor",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    alt: "Reform",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    alt: "SavvyCal",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
  },
];

const Partners = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <NavigationBar />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-900">
          Our Title Partners
        </h2>
        <div className="mt-10 overflow-hidden">
          <motion.div className="flex space-x-8 justify-center w-[calc(158px*8)] mx-auto">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain"
                width={158}
                height={48}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
        <h2 className="text-center text-lg font-semibold text-gray-900">
          Our Banner Partners
        </h2>
        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex space-x-8 w-[calc(158px*8)]"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...bannerLogos, ...bannerLogos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain"
                width={158}
                height={48}
              />
            ))}
          </motion.div>
        </div>
        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex space-x-8 w-[calc(158px*8)]"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...bannerLogos, ...bannerLogos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain"
                width={158}
                height={48}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
