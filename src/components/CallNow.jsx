import { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

const CallNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    customDestination: '',
    from: '',
    to: '',
    typeOfTrip: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOtherDestination, setIsOtherDestination] = useState(false);

  const [searchParams] = useSearchParams();
  const location = searchParams.get('location') || '';
  const dates = searchParams.get('dates') || '';
  const category = searchParams.get('category') || '';

  const navigate = useNavigate();

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      destination: location,
      from: dates.split(',')[0] || '',
      to: dates.split(',')[1] || '',
      typeOfTrip: category,
    }));
  }, [location, dates, category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'destination') {
      if (value === 'Others') {
        setIsOtherDestination(true);
      } else {
        setIsOtherDestination(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      destination: formData.destination === 'Others' ? formData.customDestination : formData.destination,
    };
    console.log(payload);
    try {
      const response = await axios.post(
        'http://localhost:8080/enquire',
        payload
      );

      if (response.status === 200) {
        alert('Thank you for reaching out, your details are submitted successfully! We will contact you shortly!');
        navigate('/');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative max-w-lg mb-10 mx-auto p-8 bg-white rounded-lg shadow-md text-gray-800 border border-gray-200">
      {isSubmitting && (
        <div className="absolute inset-0 bg-slate-300 bg-opacity-50 flex items-center justify-center z-10">
          <ClipLoader color="#4169E1" size={50} />
        </div>
      )}

      <h1 className="text-3xl font-bold font-montserrat text-center mb-8 text-gray-900">Enquire Now</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-montserrat text-sm font-medium mb-2 text-gray-700">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="destination" className="block font-montserrat text-sm font-medium mb-2 text-gray-700">
            Destination <span className="text-red-500">*</span>
          </label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="" disabled>
              Select destination
            </option>
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
            <option value="Others">Others</option>
          </select>

          {/* If 'Others', show input */}
          {isOtherDestination && (
            <input
              type="text"
              name="customDestination"
              value={formData.customDestination}
              onChange={handleChange}
              placeholder="Enter your destination"
              className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
          )}
        </div>

        {/* From and To Dates (optional) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="from" className="block font-montserrat text-sm font-medium mb-2 text-gray-700">
              From
            </label>
            <input
              type="date"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
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
              value={formData.to}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
        </div>

        {/* Type of Trip (optional) */}
        <div>
          <label htmlFor="type-of-trip" className="block font-montserrat text-sm font-medium mb-2 text-gray-700">
            Type of Trip
          </label>
          <select
            id="type-of-trip"
            name="typeOfTrip"
            value={formData.typeOfTrip}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="" disabled>
              Select type of trip
            </option>
            <option value="Honeymoon">Honeymoon</option>
            <option value="Family">Family</option>
            <option value="Group">Group Tour</option>
            <option value="Solo">Solo</option>
          </select>
        </div>

        {/* Email (optional) */}
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
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
        </div>

        {/* Phone (optional) */}
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
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex justify-center items-center">
                <ClipLoader color="#ffffff" size={20} />
              </span>
            ) : (
              'Enquire Now'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CallNow;
