import PropTypes from "prop-types";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

function ReviewCard({ content, stars, user, occ }) {
  const validatedStars = Math.min(5, Math.max(0, stars)); // Ensure stars is between 0 and 5
  const nonStars = 5 - validatedStars;

  return (
    <div className="h-auto w-full max-w-[372px] p-5 sm:p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <img
          src="/user.png"
          alt="User"
          className="rounded-full h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] mb-3 sm:mb-0"
        />
        <div className="flex gap-1 w-[125px] text-xl">
          {[...Array(validatedStars)].map((_, index) => (
            <span key={`full-${index}`}>
              <RiStarSFill className="text-amber-400" />
            </span>
          ))}
          {[...Array(nonStars)].map((_, index) => (
            <span key={`empty-${index}`}>
              <RiStarSLine className="text-amber-400" />
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm sm:text-base font-inter p-2 h-auto text-center sm:text-left">
          {content}
        </p>
        <div className="mt-5 text-center sm:text-left">
          <h3 className="text-lg sm:text-2xl font-semibold font-inter">{user}</h3>
          <p className="text-sm sm:text-lg font-medium text-slate-700 font-inter">
            {occ}
          </p>
        </div>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  occ: PropTypes.string.isRequired,
};

export default ReviewCard;
