'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactMe = () => {
  const handleEmailButtonClick = () => {
    const email = 'ihsanhealthcareutd@gmail.com';
    const mailtoLink = `mailto:${email}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col items-center mx-4 my-14">
      
        <p className="text-center font-titleFont font-semibold text-xl">
          If you have any questions or would like to get in touch, please send
          us an email
        </p>

      <div className=" mt-6">
        <button
          onClick={handleEmailButtonClick}
          className="hover:bg-third/80 py-2 px-2 rounded-2xl  bg-third font-bold text-lg "
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactMe;