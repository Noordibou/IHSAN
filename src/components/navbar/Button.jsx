import React from "react";
import Link from "next/link";

const Button = () => {
    return (
      <>
      <div className="grid place-content-center md:place-content-stretch">
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdB_jx8xHgkWbdwI5bhUUMrieFcu7a7PobW5ngwx44cYqHT0w/viewform" target="_blank">
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