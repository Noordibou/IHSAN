// import React from "react";
// import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";

// const Navbar = ({ toggle }) => {
//   return (
//     <>
//       <div className="w-full h-20 bg-slate-50 sticky top-0 z-30">
//         <div className="container mx-auto px-4 h-full">
//           <div className="flex justify-between items-center h-full">
//             <Logo />
//             <button
//               type="button"
//               className="inline-flex items-center md:hidden"
//               onClick={toggle}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="40"
//                 height="40"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fill="#191919"
//                   d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
//                 />
//               </svg>
//             </button>
//             <ul className="hidden md:flex gap-x-6 text-gray-700 ">
//               <li className="relative group">
//                 <Link href="/about">
//                   <p className="cursor-pointer group-hover:text-yellow-500">
//                     About Us
//                   </p>
//                 </Link>
//                 <ul className="absolute hidden  bg-slate-50 text-gray-700 p-2 rounded-md group-hover:block">
//                   {/* Dropdown items go here */}
//                   <li>
//                     <Link href="/team">
//                       <p>Our Team</p>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/mission">
//                       <p>Our Mission</p>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <Link href="/services">
//                   <p>Services</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contacts">
//                   <p>Contacts</p>
//                 </Link>
//               </li>
//             </ul>
//             <div className="hidden md:block">
//               <Button />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navs = [
  {
    title: "About Us",
    subheaders: [
      {
        title: "Our Team",
        link: "/team", // Add the link here
      },
      {
        title: "Our Mission",
        link: "/mission", // Add the link here
      },
      "Contact Info",
    ],
  },
  {
    title: "Our Impact",
    subheaders: ["Success Stories"],
  },
  {
    title: "Get Involved",
    subheaders: ["Donate", "Volunteer"],
  },
];

const NavigationMobile = ({ navs, isOpen, toggleNavigation }) => {

  const handleLinkClick = () => {
    // Close navigation when a link is clicked
    toggleNavigation();
  };

  return (
    <>
      {navs.map(({ title, subheaders }, index) => (
        <li key={index} className="">
          <p className="text-black ">{title}</p>
          <ul className={`p-2 text-black ${isOpen ? "block" : "hidden"}`}>
            {subheaders.map((subheader, subIndex) => (
              <li key={subIndex}>
                {typeof subheader === "string" ? (
                  <p>{subheader}</p>
                ) : subheader.link ? (
                  <Link href={subheader.link}>
                    <p onClick={handleLinkClick}>{subheader.title}</p>
                  </Link>
                ) : (
                  <span>{subheader.title}</span>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
      <li>
        <Link href="/membership">
          <p
            onClick={() => {
              handleLinkClick();
            }}
            className=" mt-3 btn  bg-main text-white border-secondary border-2 rounded-2xl hover:bg-secondary hover:text-white hover:border-secondary"
          >
            Join IHSAN
          </p>
        </Link>
      </li>
    </>
  );
};


const NavigationDesktop = ({ navs }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdownOpen = (index) => {
    setDropdownOpen(index);
  };

  const handleDropdownClose = () => {
    // Delay the closing of the dropdown by 5 seconds
    setTimeout(() => {
      setDropdownOpen(null);
    }, 5000);
  };

  const handleDropdownEnter = () => {
    // Clear the timeout to prevent automatic closing when interacting with the dropdown
    clearTimeout();
  };

  const handleDropdownLeave = () => {
    // Delay the closing of the dropdown by 5 seconds after leaving the dropdown area
    setTimeout(() => {
      setDropdownOpen(null);
    }, 5000);
  };

  useEffect(() => {
    const handleWindowClick = () => {
      setDropdownOpen(null);
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <>
      {navs.map(({ title, subheaders }, index) => (
        <li
          key={index}
          className="text-xl"
          aria-label={`${title} dropdown button`}
        >
          <details
            open={dropdownOpen === index}
            onMouseEnter={() => handleDropdownOpen(index)}
            onMouseLeave={handleDropdownClose}
            onClick={handleDropdownEnter}
            onBlur={handleDropdownLeave}
          >
            <summary className="hover:underline underline-offset-4 transition decoration-core-red text-black">
              {title}
            </summary>
            <ul className="p-2 rounded-none bg-white z-10" 
                // Apply CSS transition for the fade effect
                style={{ transition: 'opacity 1s ease-in-out', opacity: dropdownOpen === index ? 1 : 0 }}>
              {subheaders.map((subheader, subIndex) => (
                <li key={subIndex}>
                  {typeof subheader === 'string' ? (
                    <p className="text-md hover:underline underline-offset-4 transition decoration-core-red text-black">
                      {subheader}
                    </p>
                  ) : subheader.link ? (
                    <Link href={subheader.link}>
                      <p className="text-md hover:underline underline-offset-4 transition decoration-core-red text-black">
                        {subheader.title}
                      </p>
                    </Link>
                  ) : (
                    <span className="text-md text-black">{subheader.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </>
  );
};


function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <div className="navbar justify-between p-0 bg-white z-50 font-mont shadow">
      <Link href="/">
        <Image
          src="/logo1.png"
          width={120}
          height={70}
          alt="IHSAN logo"
          aria-label="Logo and link to go to homepage"
          className="mx-3 w-20"
        ></Image>
      </Link>
      {/* <div className="navbar-start"> */}
      {/* </div> */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavigationDesktop navs={navs} />
        </ul>
      </div>
      <div>
        <Link href="/membership">
          <div
            className="btn ml-5 mr-3 hidden md:flex bg-main text-white border-secondary border-2 rounded-2xl hover:bg-secondary hover:text-white hover:border-secondary "
          >
            Join IHSAN
          </div>
        </Link>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMobileNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 absolute right-1 bg-white ${
              isMobileNavOpen ? "block" : "hidden"
            }`}
          >
            <NavigationMobile
              navs={navs}
              isOpen={isMobileNavOpen}
              toggleNavigation={toggleMobileNav}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
