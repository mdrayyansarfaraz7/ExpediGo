import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

function ReviewCard({ content, stars, user, occ }) {
  const validatedStars = Math.min(5, Math.max(0, stars)); // Ensure stars is between 0 and 5
  const nonStars = 5 - validatedStars;

  return (
    <div className="h-[388px] w-[372px] px-14">
      <div className="flex justify-between items-center h-[70px]">
        <img src="/user.png" className="rounded-full h-[60px] w-[60px]" />
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
        <p className="text-base font-inter p-2 h-[196px]">{content}</p>
        <div className="mt-5 p-2">
          <h3 className="text-2xl font-semibold font-inter">{user}</h3>
          <p className="text-lg font-medium text-slate-700 font-inter">{occ}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
