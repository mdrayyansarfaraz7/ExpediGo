
import { MdOutlineTurnRight } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaRegCalendar } from "react-icons/fa6";
import { TbMountainFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const navigate = useNavigate();

  // State for the fields
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState("");
  const [category, setCategory] = useState("");

  // Handle Enquire button
  const handleEnquire = () => {
    navigate(`/call-now?location=${location}&dates=${dates}&category=${category}`);
  };

  return (
    <div className="w-full h-[100vh] bg-[url('/Hero.png')] bg-cover bg-center flex flex-col justify-center items-center">
      <div className="w-[90%] md:w-[800px] text-center my-20 mx-auto">
        <h1 className="text-white text-4xl md:text-6xl lg:text-6xl font-inter">
          Pack your bags &#x26; leave the <span className="font-instrument italic">planning</span> to us ✌️
        </h1>
        <h3 className="text-sm md:text-base lg:text-xl font-extralight font-inter text-white my-10">
          Travel hassle-free
        </h3>
      </div>
      <div className="bg-white rounded-md md:rounded-full w-[90%] md:w-[80%] lg:w-[70%] flex flex-col md:flex-row items-center justify-between gap-3 py-4 px-5 shadow-md">
        {/* Location Field */}
        <div className="flex items-center justify-center gap-2 w-full md:w-auto">
          <div className="p-2 rounded-full bg-amber-400">
            <ImLocation className="text-base md:text-2xl lg:text-2xl" />
          </div>
          <div className="flex flex-col w-full">
            <h5 className="text-black text-sm md:text-base lg:text-xl font-medium font-inter">Where</h5>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-500 text-sm"
            >
              <option value="" disabled>Select destination</option>
              <optgroup label="INTERNATIONAL">
              <option value="Bhutan">Bhutan</option>
              <option value="Nepal">Nepal</option>
              <option value="Thailand">Thailand</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Baku">Baku, Azerbaijan</option>
              <option value="Dubai">Dubai</option>
            </optgroup>
            <optgroup label="INDIA">
              <option value="Sikkim">Sikkim</option>
              <option value="Assam">Assam</option>
              <option value="Arunachal">Arunachal Pradesh</option>
              <option value="NorthEast">North-East India</option>
              <option value="Darjeeling">Darjeeling</option>
              <option value="SilkRoute">Silk Route</option>
              <option value="Goa">Goa</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Himachal">Himachal Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
            </optgroup>
            <optgroup label="Customized Packages">
              <option value="Sundarban">Sundarban Mangroves</option>
              <option value="Shantiniketan">Shantiniketan</option>
              <option value="Darjeeling-custom">Darjeeling</option>
              <option value="Sikkim-custom">Sikkim</option>
              <option value="Northsouthgoa">North/South Goa</option>
              <option value="Guwahati">Guwahati, Assam</option>
              <option value="Northeast-custom">North-East India</option>
              <option value="Kolkata-custom">Kolkata</option>
            </optgroup>
            </select>
          </div>
        </div>

        {/* Date Field */}
        <div className="flex items-center justify-center gap-2 w-full md:w-auto">
          <div className="p-2 rounded-full bg-amber-400">
            <FaRegCalendar className="text-base md:text-2xl lg:text-2xl" />
          </div>
          <div className="flex flex-col w-full">
            <h5 className="text-black text-sm md:text-base lg:text-xl font-medium font-inter">When</h5>
            <input
              type="date"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-500 text-sm"
            />
          </div>
        </div>

        {/* Category Field */}
        <div className="flex items-center justify-center gap-2 w-full md:w-auto">
          <div className="p-2 rounded-full bg-amber-400">
            <TbMountainFilled className="text-base md:text-2xl lg:text-2xl" />
          </div>
          <div className="flex flex-col w-full">
            <h5 className="text-black text-sm md:text-base lg:text-xl font-medium font-inter">Category</h5>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-500 text-sm"
            >
              <option value="" disabled>Select category</option>
              <option value="Honeymoon">Honeymoon</option>
              <option value="Family">Family</option>
              <option value="Group Tour">Group Tour</option>
              <option value="Solo">Solo</option>
            </select>
          </div>
        </div>

        {/* Enquire Button */}
        <button
          onClick={handleEnquire}
          className="border-none bg-blue-600 rounded-full px-5 py-3 text-sm md:text-base lg:text-base duration-700 font-light text-white flex gap-2 items-center hover:shadow-lg hover:shadow-sky-200"
        >
          <MdOutlineTurnRight className="text-lg md:text-xl lg:text-2xl font-thin" />
          Enquire
        </button>
      </div>
    </div>
  );
}

export default Hero;
