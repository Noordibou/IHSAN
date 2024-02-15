"use client";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <DesktopNav toggle={toggle} />
    </>
  );
};

export default Navbar;