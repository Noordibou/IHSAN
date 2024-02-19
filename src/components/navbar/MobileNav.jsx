import React from "react";
import Link from "next/link";
import Image from "next/image";

const MobileNav = ({ isOpen, toggle }) => {
  const navs = [
    {
      title: "About Us",
      subheaders: [
        { title: "Our Team", link: "/team" },
        { title: "Our Mission", link: "/mission" },
        { title: "Contact Us", link: "mailto:ihsanhealthcareutd@gmail.com" }
      ]
    },
    {
      title: "Services",
      subheaders: [
        { title: "Social Events", link: "/events/social" },
        { title: "Workshops", link: "/events/workshops" },
        { title: "Volunteering", link: "/events/volunteering" }
      ]
    },
    {
      title: "More",
      subheaders: [
        { title: "Resources", link: "/resources" },
        { title: "Donate", link: "/donate" } // Add the link for Donate
      ]
    }
  ];

  const socialLinks = [
    {
     
      href: "mailto:ihsanhealthcareutd@gmail.com",
      src:"https://img.icons8.com/material-outlined/48/1A1A1A/new-post.png",
      width: 48,
      height: 48,
      alt: "email",
    },
    {
      href: "https://www.instagram.com/ihsanhealthcareutd/",
      src:"https://img.icons8.com/sf-regular/48/1A1A1A/instagram-new.png",
      width: 48,
      height: 48,
      alt: "instagram",
    },

  ];

  const renderSocialLinks = () => {
    return socialLinks.map(({ href, src, width, height, alt }, index) => (
      <Link key={index} href={href} target="_blank">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="mt-2 w-10 h-10 mr-1 cursor-pointer  hover:opacity-40 transition duration-300 ease-in-out"
        />
      </Link>
    ));
  };

  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-bodyColor grid pt-[120px] left-0 z-50"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={38}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          {navs.map((navItem, index) => (
            <li key={index} className="pb-6 text-center">
              <p className="font-semibold font-title text-xl ">{navItem.title}</p>
              <ul className="pl-4">
                {navItem.subheaders.map((subheader, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subheader.link} onClick={toggle}>
                      <p className="font-body text-lg hover:underline underline-offset-4 decoration-2 decoration-third text-black">{subheader.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        <Link href="/membership">
            <div className="font-body btn ml-5 text-white rounded-full border-bodyColor bg-gradient-to-r from-main to-third hover:border-third border-4">
              Join IHSAN
            </div>
          </Link>
          <div className="flex flex-row justify-center pl-8 ">{renderSocialLinks()}</div>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
