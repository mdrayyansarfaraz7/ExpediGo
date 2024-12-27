import { ImLocation } from 'react-icons/im';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiInstagramFill } from 'react-icons/ri';

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
              <p className="font-Montserrat text-base">expedigoholidays@gmail.com</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-amber-400">
              <MdPhone className="text-2xl" />
            </div>
            <div>
              <h3 className="font-inter font-bold text-xl">Phone Number</h3>
              <p className="font-Montserrat text-base">+91 9007016011</p>
            </div>
          </div>
          <hr className="w-full border-t-1 border-gray-700"/>
          <h1 className="text-5xl font-inter font-bold text-center md:text-left  mt-1">Follow Us</h1>
          {/* Social Media Section */}
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-amber-400">
              <FaFacebookF className="text-2xl" />
            </div>
            <div>
             
              <p className="font-Montserrat text-base">
                <Link
                  to="https://www.facebook.com/profile.php?id=61554390507137"
                  className="text-black hover:underline"
                >
                   <h3 className="font-inter font-bold text-xl">Facebook</h3>
                </Link>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-amber-400">
              <RiInstagramFill className="text-2xl" />
            </div>
            <div>
              <p className="font-Montserrat text-base">
                <Link
                  to="https://www.instagram.com/expedigoholidays/"
                  className="text-black hover:underline"
                >
              <h3 className="font-inter font-bold text-xl">Instagram</h3>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
