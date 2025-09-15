import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
     
      href: "mailto:ihsanhealthcareutd@gmail.com",
      src:"https://img.icons8.com/material-outlined/24/FFFFFF/filled-message.png",
      width: 28,
      height: 18,
      alt: "email",
    },
    {
      href: "https://www.instagram.com/ihsanhealthcareutd/",
      src:"https://img.icons8.com/windows/32/FFFFFF/instagram.png",
      width: 28,
      height: 18,
      alt: "instagram",
    },

  ];

  const footerLinks1 = [
    { text: "About Us", link: "/mission" },
    { text: "Become a Member", link: "https://docs.google.com/forms/d/e/1FAIpQLSedaHy3BNeiAv8R5ApYcRtCuOya8ceUnb88xYNYEHVMLM5fgA/viewform"},
    { text: "Contact Us", link: "mailto:ihsanhealthcareutd@gmail.com" },
  ];

  const footerLinks2 = [
    { text: "Services", link: "/calendar" },
    { text: "Resources", link: "/resources" },
  ];

  const renderSocialLinks = () => {
    return socialLinks.map(({ href, src, width, height, alt }, index) => (
      <Link key={index} href={href} target="_blank">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className=" w-6 h-6 mr-1 cursor-pointer hover:opacity-40 transition duration-300 ease-in-out"
        />
      </Link>
    ));
  };

  const renderFooterLinks = (links) => {
    return links.map(({ text, link }, index) => (
      <Link key={index} href={link}  className="link link-hover">
        {text}
      </Link>
    ));
  };

  return (
    <footer className="w-screen relative bottom-0 px-6 pt-4 pb-3 text-[#FEFAFA] bg-main">
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-10 text-xs">
        <div className="flex flex-col my-2">
          <Link href="/">
            <Image
              src="/logo.jpg"
              width={80}
              height={11}
              alt="logo"
              className="cursor-pointer ml-3 rounded-xl h-auto w-auto"
            />
          </Link>
        </div>
        <div className="flex flex-col text-neutral-50 text-xs md:text-sm font-normal font-osans gap-1">
          {renderFooterLinks(footerLinks1)}
        </div>
        <div className="flex flex-col text-neutral-50 text-xs md:text-sm font-normal font-osans gap-1">
          {renderFooterLinks(footerLinks2)}
          <div className="flex flex-row">{renderSocialLinks()}</div>
        </div>
      </div>
      <div className="w-full border-2 border-dark-red my-2" />
      <div className="flex justify-between lg:gap-48 xl:gap-72">
        <div className="text-neutral-50 md:text-sm text-[10px] font-normal font-osans py-2">
          © 2023 UTD Healthcare Association (IHSAN) at the University of Texas at Dallas. All rights reserved. Privacy Policy
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;

