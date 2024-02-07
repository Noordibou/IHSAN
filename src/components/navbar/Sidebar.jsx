import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";

const Sidebar = ({ isOpen, toggle }) => {
  const [isAboutUsDropdownVisible, setAboutUsDropdownVisibility] = useState(false);

  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-slate-50 grid pt-[120px] left-0 z-40"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li className="relative group">
            <div className="flex ">
            <p
              className="cursor-pointer ml-4 group-hover:text-yellow-500"
              onClick={() => setAboutUsDropdownVisibility(!isAboutUsDropdownVisible)}
            >
              About Us
            </p>
            <span className="py-2">
              {isAboutUsDropdownVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 14l5-5 5 5z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 10l5 5 5-5z"
                  />
                </svg>
              )}
            </span>
            </div>
            {isAboutUsDropdownVisible && (
              <ul className="ml-4 ">
                {/* Dropdown items go here */}
                <li>
                  <Link href="/team" onClick={toggle}>
                    <p>Our Team</p>
                  </Link>
                </li>
                <li>
                  <Link href="/mission" onClick={toggle}>
                    <p>Our Mission</p>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/services" onClick={toggle}>
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}>
              <p>Contacts</p>
            </Link>
          </li>
          <li className="my-4">
          <Button />
          </li>
        </ul>
        
      </div>
    </>
  );
};

export default Sidebar;
