
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

const CallNow = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location') || '';
  const dates = searchParams.get('dates') || '';
  const category = searchParams.get('category') || '';

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
            defaultValue={location} // Pre-populate with location
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
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
              defaultValue={dates.split(',')[0] || ''} // Use first date from `dates`
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
              defaultValue={dates.split(',')[1] || ''} // Use second date from `dates`
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
            defaultValue={category} // Pre-populate with category
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="" disabled>Select destination</option>
            <option value="Honeymoon">Honeymoon</option>
            <option value="Family">Family</option>
            <option value="Group">Group Tour</option>
            <option value="Solo">Solo</option>
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
