import React from "react";
import racSliitLogo from "../../assets/racsliitLogo2.png";

const Footer = () => {
  return (
    <div className="bg-creedGray text-gray-100 py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4 md:px-10 gap-20">
        {/* Logo and Description */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left flex-1 mb-6 md:mb-0">
          <img
            src={racSliitLogo}
            alt="RAC SLIIT Logo"
            className="w-24 mb-4 md:w-40"
          />
          <p className="text-sm leading-relaxed text-gray-300 w-full ">
            As a dynamic gathering of young change-makers, we're here to channel
            our energy into impactful projects, ignite inspiration, and redefine
            what's possible. Join us in sculpting a future that's not just about
            us, but for us all.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 mb-6 md:mb-0">
          <h3 className="mb-4 text-lg font-bold uppercase tracking-wide">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: contact@racsliit.com</li>
            <li>Phone: +94 123 456 789</li>
            <li>Address: SLIIT Campus, Malabe, Sri Lanka</li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
          <h3 className="mb-4 text-lg font-bold uppercase tracking-wide">
            Team Alpha Location
          </h3>
          <div className="overflow-hidden rounded-lg shadow-lg w-full max-w-sm md:max-w-none">
            <iframe
              title="SLIIT Malabe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5007.341148775509!2d80.09709571147627!3d6.951096318015822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3aa94075b451f%3A0x4bef995c18351c3d!2sChe%20Adventure%20Park!5e1!3m2!1sen!2sin!4v1733369006177!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen={true}
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} RACSLIIT. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
