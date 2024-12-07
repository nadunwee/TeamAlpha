import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import mobileNav from "../assets/mobileNav.png"; // Ensure correct path to the image
import alphaLogo from "../assets/alphaLogo.png";

// Navigation links with Members dropdown
const navigation = [
  { name: "home", href: "/" },
  { name: "about us", href: "/about-us" },
  {
    name: "driving force", // The new Members dropdown
    subLinks: [
      { name: "racsliit board of officials", href: "/board-of-officials" },
      { name: "team alpha oc", href: "/driving-force" },
    ],
  },
  { name: "scavenger hunt", href: "/scavenger-hunt" },
  { name: "faq", href: "/faq" },
  { name: "contact us", href: "/contact-us" },
];

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [membersMenuOpen, setMembersMenuOpen] = useState(false); // Manage dropdown state for mobile
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
          {navigation.map((item) =>
            item.subLinks ? (
              <div key={item.name} className="relative group mt-[-29px]">
                <button className={`${navClass} text-[24px]`}>
                  {item.name}
                </button>
                {/* Hover menu for desktop */}
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="absolute left-0 hidden mt-0 space-y-2 bg-white text-black font-semibold p-4 rounded-lg shadow-lg group-hover:block w-[230px]"
                >
                  {item.subLinks.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block text-[20px] py-1 hover:text-gray-700"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </motion.div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={`${navClass} text-[24px]`}
              >
                {item.name}
              </a>
            )
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://tripetto.app/run/3QUIZ3HBI8"
            className="text-[30px] font-semibold text-black font-assassin"
            target="_blank"
            rel="noopener noreferrer"
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
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">team alpha</span>
                  <img alt="" src={alphaLogo} className="h-8 w-auto" />
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
                    {navigation.map((item) =>
                      item.subLinks ? (
                        <div key={item.name}>
                          <button
                            onClick={() => setMembersMenuOpen(!membersMenuOpen)} // Toggle dropdown visibility
                            className="block text-base font-semibold text-gray-300 font-assassin text-[31px]"
                          >
                            {item.name}
                          </button>
                          {/* Mobile dropdown with animation */}
                          <AnimatePresence>
                            {membersMenuOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-2 pl-6 pt-2 overflow-hidden"
                              >
                                {item.subLinks.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block text-[16px] py-1 text-gray-300 hover:bg-gray-700 font-assassin rounded-lg px-3"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-gray-700 font-assassin text-[31px]"
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                  <div className="py-6">
                    <a
                      href="https://tripetto.app/run/3QUIZ3HBI8"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-300 hover:bg-gray-700 font-assassin text-[31px]"
                      target="_blank"
                      rel="noopener noreferrer"
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
