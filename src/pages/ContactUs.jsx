import React from 'react';
import { ImLocation } from 'react-icons/im';
import { MdEmail, MdPhone } from 'react-icons/md';

function ContactUs() {
  return (
    <div className="w-full min-h-[70vh] flex justify-center mt-4 bg-gray-50 p-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-inter font-bold text-center md:text-left mb-10">Contact Us</h1>
        <div className="flex flex-col gap-8">
          {/* Address Section */}
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-amber-400">
              <ImLocation className="text-2xl" />
            </div>
            <div>
              <h3 className="font-inter font-bold text-xl">Address</h3>
              <p className="font-Montserrat text-base">
                DF Block (Newtown), Action Area I, Newtown, Kolkata, Chakpachuria, West Bengal 700156
              </p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-amber-400">
              <MdEmail className="text-2xl" />
            </div>
            <div>
              <h3 className="font-inter font-bold text-xl">Email Address</h3>
              <p className="font-Montserrat text-base">expedigo.travels@gmail.com</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-amber-400">
              <MdPhone className="text-2xl" />
            </div>
            <div>
              <h3 className="font-inter font-bold text-xl">Phone Number</h3>
              <p className="font-Montserrat text-base">+91 89533 55781</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
