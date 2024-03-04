import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1 className="font-bold text-3xl">WenWIFhat</h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        
        {/* Twitter Link */}
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white ml-10">
          <a href="https://twitter.com/WenWifHat_Sol" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>

        {/* Telegram Link */}
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white ml-10">
          <a href="https://t.me/WENWIFHATCHAT" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </li>
      </ul>

      {/* Rest of your code */}
    </nav>
  );
};

export default Navbar;
