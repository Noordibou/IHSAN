'use client';
import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Logo from "./Logo";

const DesktopNav = ({ toggle }) => {
  const navs = [
    {
      title: "About Us",
      subheaders: [
        { title: "Our Team", link: "/team" },
        { title: "Our Mission", link: "/mission" },
        { title: "Contact Us", link: "mailto:ihsanhealthcareutd@gmail.com" },
      ],
    },
    {
      title: "Services",
      subheaders: [
        { title: "Social Events", link: "/events/social" },
        { title: "Workshops", link: "/events/workshops" },
        { title: "Volunteering", link: "/events/volunteering" },
      ],
    },
    {
      title: "Calendar",
      subheaders: [
        { title: "All Upcoming Events", link: "/calendar" },
      ],
    },
    {
      title: "More",
      subheaders: [
        { title: "Resources", link: "/resources" },
        { title: "Donate", link: "/donate" }, // Add the link for Donate
      ],
    },
  ];


  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="navbar justify-between p-1 bg-bodyColor px-2 z-30 shadow font-body">
        <Logo />
        <button
          type="button"
          className="inline-flex items-center md:hidden pr-2"
          onClick={toggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={34}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <ul className="hidden md:flex gap-x-8 text-black z-30">
          {navs.map((navItem, index) => (
            <motion.li
              key={index}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <p className="cursor-pointer group-hover:text-third md:text-xl lg:text-2xl font-title">
                {navItem.title}
              </p>
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="absolute hidden bg-bodyColor text-black p-2 rounded-md group-hover:block border"
              >
                {navItem.subheaders.map((subheader, subIndex) => (
                  <motion.li
                    key={subIndex}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.5, delay: subIndex * 0.1 + 0.4 }}
                  >
                    <Link href={subheader.link}>
                      <p className="hover:underline underline-offset-4 decoration-2 decoration-third text-black mx-2 mb-2 whitespace-nowrap font-body">
                        {subheader.title}
                      </p>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSedaHy3BNeiAv8R5ApYcRtCuOya8ceUnb88xYNYEHVMLM5fgA/viewform"
            target="_blank"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: navs.length * 0.1 + 0.2 }}
              className="btn ml-5 md:flex bg-main text-white border-third border-2 rounded-2xl hover:bg-third hover:text-white hover:border-main font-subTitle"
            >
              Join IHSAN
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
