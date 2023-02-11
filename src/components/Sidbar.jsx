import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/", icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div className="navlinks">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="navlink"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="icon" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className={`sidebar ${mobileMenuOpen ? 'open' : 'close'}`}>
        <img src={logo} alt="logo" className="logo" />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="menu_sidebar">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="menu_icon"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="menu_icon"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
