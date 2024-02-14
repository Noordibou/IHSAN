import React from "react";
import Link from "next/link";

const Button = () => {
    return (
      <>
      <div className="grid place-content-center md:place-content-stretch">
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdB_jx8xHgkWbdwI5bhUUMrieFcu7a7PobW5ngwx44cYqHT0w/viewform" target="_blank">
      <div
        className="btn md:w-[60%] ml-5 mr-3 md:flex md:bg-main bg-third text-white border-third border-2 rounded-2xl hover:bg-third hover:text-white hover:border-secondary "
      >
        Join IHSAN
      </div>
    </Link>
    </div>
    </>
    );
  };
  
  export default Button;