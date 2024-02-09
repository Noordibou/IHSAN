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
    <div className="flex flex-col items-center mx-4 my-8">
      <h3 className="text-xl font-semibold uppercase tracking-[10px] text-textBright pb-8">
        Contact Us
      </h3>
        <p className="text-center">
          If you have any questions or would like to get in touch, please send
          us an email
        </p>

      <div className=" mt-6">
        <button
          onClick={handleEmailButtonClick}
          className="hover:bg-blue-700 py-2 px-2 rounded-md text-black bg-blue-400 font-bold text-lg "
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default ContactMe;