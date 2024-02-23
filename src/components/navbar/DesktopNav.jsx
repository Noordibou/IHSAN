import React from "react";
import Link from "next/link";
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
      title: "More",
      subheaders: [
        { title: "Resources", link: "/resources" },
        { title: "Donate", link: "/donate" }, // Add the link for Donate
      ],
    },
  ];

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
        <ul className="hidden md:flex  gap-x-8 text-black z-30">
          {navs.map((navItem, index) => (
            <li key={index} className="relative group">
              <p className="cursor-pointer group-hover:text-third md:text-xl lg:text-2xl font-title">
                {navItem.title}
              </p>
              <ul className="absolute hidden bg-bodyColor text-black p-2 rounded-md group-hover:block border ">
                {navItem.subheaders.map((subheader, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subheader.link}>
                      <p className="hover:underline underline-offset-4 decoration-2 decoration-third text-black mx-2 mb-2 whitespace-nowrap font-body">
                        {subheader.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdB_jx8xHgkWbdwI5bhUUMrieFcu7a7PobW5ngwx44cYqHT0w/viewform" target="_blank">
            <div className="btn ml-5 md:flex bg-main text-white border-third border-2 rounded-2xl hover:bg-third hover:text-white hover:border-main font-subTitle">
              Join IHSAN
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
