import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import mobileNav from "../assets/mobileNav.png"; // Ensure correct path to the image

// Navigation links
const navigation = [
  { name: "home", href: "/" },
  { name: "about us", href: "/about-us" },
  { name: "driving force", href: "/driving-force" },
  { name: "board of officials", href: "/board-of-officials" },
  { name: "contact us", href: "/contact-us" },
  { name: "faq", href: "/faq" },
];

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Determine the navigation link styles based on the current path
  let navClass = "text-sm font-semibold text-gray-300";
  if (location.pathname === "/") {
    navClass = "text-[30px] font-semibold text-black";
  } else {
    navClass = "text-[30px] font-semibold text-black";
  }

  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-black font-assassin text-4xl">
              Team Alpha
            </span>
            {/* <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            /> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 font-assassin text-6xl">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${navClass} text-[30px]`} // Add text-2xl here
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://tripetto.app/run/3QUIZ3HBI8"
            className="text-[30px] font-semibold text-black font-assassin"
            target="_blank" // This will open the link in a new tab
            rel="noopener noreferrer" // This is for security purposes, especially with _blank
          >
            register <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50 " />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              style={{
                backgroundImage: `url(${mobileNav})`, // Apply the image URL directly
                backgroundSize: "cover", // Ensures the image covers the container
                backgroundPosition: "center", // Keeps the image centered
              }}
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">team alpha</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-300"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-gray-700 font-assassin text-[31px]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="https://tripetto.app/run/3QUIZ3HBI8"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-300 hover:bg-gray-700 font-assassin text-[31px]"
                      target="_blank" // This will open the link in a new tab
                      rel="noopener noreferrer" // This is for security purposes, especially with _blank
                    >
                      register
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavigationBar;
