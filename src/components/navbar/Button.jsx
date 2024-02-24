import React from "react";
import Link from "next/link";

const Button = () => {
    return (
      <>
      <div className="grid place-content-center md:place-content-stretch">
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSedaHy3BNeiAv8R5ApYcRtCuOya8ceUnb88xYNYEHVMLM5fgA/viewform" target="_blank">
      <div
        className="btn md:w-[60%] ml-5 mr-3 md:flex text-white border-2 md:rounded-2xl rounded-full md:hover:bg-third hover:border-third hover:text-white  bg-gradient-to-r from-main md:to-main to-third border-bodyColor md:bg-main"
      >
        Join IHSAN
      </div>
    </Link>
    </div>
    </>
    );
  };
  
  export default Button;