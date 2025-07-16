import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.add("open");
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("open");
    }
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    closeMenu();
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => handleMenuClick("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => handleMenuClick("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
