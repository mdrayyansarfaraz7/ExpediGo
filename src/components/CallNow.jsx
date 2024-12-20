import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const CallNow = () => {
  return (
    <div className="max-w-lg mb-10 mx-auto p-8 bg-white rounded-lg shadow-md text-gray-800 border border-gray-200">
      <h1 className="text-3xl font-bold font-montserrat text-center mb-8 text-gray-900">Enquire Now</h1>
      <form className="space-y-6">
        {/* Destination */}
        <div>
          <label htmlFor="destination" className="block font-montserrat text-sm font-medium mb-2 text-gray-700">
            Destination
          </label>
          <select
            id="destination"
            name="destination"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <optgroup label="INTERNATIONAL">
              <option value="bhutan">Bhutan</option>
              <option value="nepal">Nepal</option>
              <option value="thailand">Thailand</option>
              <option value="vietnam">Vietnam</option>
              <option value="baku">Baku, Azerbaijan</option>
              <option value="dubai">Dubai</option>
            </optgroup>
            <optgroup label="INDIA">
              <option value="sikkim">Sikkim</option>
              <option value="assam">Assam</option>
              <option value="arunachal">Arunachal Pradesh</option>
              <option value="northeast">North-East India</option>
              <option value="darjeeling">Darjeeling</option>
              <option value="silkroute">Silk Route</option>
              <option value="goa">Goa</option>
              <option value="kolkata">Kolkata</option>
              <option value="himachal">Himachal Pradesh</option>
              <option value="uttarakhand">Uttarakhand</option>
            </optgroup>
            <optgroup label="Customized Packages">
              <option value="sundarban">Sundarban Mangroves</option>
              <option value="shantiniketan">Shantiniketan</option>
              <option value="darjeeling-custom">Darjeeling</option>
              <option value="sikkim-custom">Sikkim</option>
              <option value="northsouthgoa">North/South Goa</option>
              <option value="guwahati">Guwahati, Assam</option>
              <option value="northeast-custom">North-East India</option>
              <option value="kolkata-custom">Kolkata</option>
            </optgroup>
          </select>
        </div>

        {/* Duration */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="from" className="block font-montserrat text-sm font-medium mb-2 text-gray-700">
              From
            </label>
            <input
              type="date"
              id="from"
              name="from"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
          <div>
            <label htmlFor="to" className="block font-montserrat text-sm font-medium mb-2 text-gray-700">
              To
            </label>
            <input
              type="date"
              id="to"
              name="to"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
        </div>

        {/* Type of Trip */}
        <div>
          <label htmlFor="type-of-trip" className="block font-montserrat text-sm font-medium mb-2 text-gray-700">
            Type of Trip
          </label>
          <select
            id="type-of-trip"
            name="type-of-trip"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="honeymoon">Honeymoon</option>
            <option value="family">Family</option>
            <option value="group-tour">Group Tour</option>
            <option value="solo">Solo</option>
          </select>
        </div>

        {/* Email ID */}
        <div>
          <label htmlFor="email" className="block font-montserrat text-sm font-medium mb-2 text-gray-700">
            Email ID
          </label>
          <div className="relative">
            <AiOutlineMail className="absolute top-3 left-3 text-gray-500" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block font-montserrat text-sm font-medium mb-2 text-gray-700">
            Phone Number
          </label>
          <div className="relative">
            <AiOutlinePhone className="absolute top-3 left-3 text-gray-500" />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-montserrat font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CallNow;
