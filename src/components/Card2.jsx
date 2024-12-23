
import PropTypes from 'prop-types'; // Import PropTypes for type validation
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing location icon from react-icons
import { Link } from 'react-router-dom';

const Card2 = ({ title, price, location, url }) => {
  return (
    <div className="w-full md:w-[340px] lg:w-[400px] mx-auto rounded-sm border border-gray-300 shadow-md p-4 bg-white sm:flex sm:items-center sm:gap-4">
      {/* Image Section */}
      <div className="mb-4 sm:mb-0 sm:w-full md:w-[180px] lg:w-[200px] sm:h-64">
        <img
          src={url}
          alt="Card"
          className="w-full h-48 object-cover rounded-sm sm:h-full sm:w-full"
        />
      </div>
      {/* Content Section */}
      <div className="sm:w-full md:w-[calc(100%-220px)] lg:w-[calc(100%-250px)]">
        <div className="text-3xl md:text-2xl lg:text-xl font-semibold mb-2 font-inter">{title}</div>
        <div className="text-2xl font-bold text-gray-800 mb-2 font-inter">INR {price}</div>
        <div className="flex items-center text-gray-500 mb-4 font-inter text-[12px]">
          <FaMapMarkerAlt className="mr-2" />
          {location}
        </div>
        <Link to={`/call-now?location=${title}`}>
          <button className="w-full md:w-[100px] lg:w-[150px] bg-blue-500 text-white py-3 rounded-sm hover:bg-blue-600 transition mt-5">
            Enquire
          </button>
        </Link>
      </div>
    </div>
  );
};

// Define prop types for the component
Card2.propTypes = {
  title: PropTypes.string.isRequired, 
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
  location: PropTypes.string.isRequired, 
  url: PropTypes.string.isRequired, 
};

export default Card2;
