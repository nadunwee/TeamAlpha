import React from "react";
import racSliitLogo from "../../assets/racsliitLogo.png";

const Footer = () => {
  return (
    <div className="flex justify-around bg-creedGray text-gray-100">
      <div>
        <img src={racSliitLogo} alt="" />
        <div>
          As a dynamic gathering of young change-makers, we're here to channel
          our energy into impactful projects, ignite inspiration, and redefine
          what's possible. Join us in sculpting a future that's not just about
          us, but for us all.
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
