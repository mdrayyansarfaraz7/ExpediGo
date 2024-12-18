import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick"; // Import react-slick for the carousel

function ReviewSection() {
  const reviews = [
    {
      content: "The product exceeded my expectations! The quality is top-notch, and I would highly recommend it to everyone.",
      stars: 5,
      user: "Ishan Dutta",
      occ: "Software Engineer",
    },
    {
      content: "Good experience overall. There were minor delays, but the team was very professional and responsive.",
      stars: 4,
      user: "Naman Jaiswal",
      occ: "Project Manager",
    },
    {
      content: "Average service. It was okay, but there is definitely room for improvement in the process.",
      stars: 3,
      user: "Sam Wilson",
      occ: "Freelancer",
    },
    {
      content: "Happy with the experience. Customer support was helpful, but it took too long to resolve my issue.",
      stars: 3,
      user: "Zain Khalid",
      occ: "Graphic Designer",
    },
    {
      content: "Decent service.",
      stars: 3,
      user: "Aqsa Naaz",
      occ: "Entrepreneur",
    },
    {
      content: "Absolutely amazing! Everything went smoothly, and I was extremely satisfied with the result.",
      stars: 5,
      user: "Amit Mahajan",
      occ: "Marketing Specialist",
    },
  ];

  // Slider settings for responsiveness
  const settings = {
    infinite: true, // Infinite loop scrolling
    speed: 500, // Transition speed (milliseconds)
    slidesToShow: 3, // Default: 3 slides visible
    slidesToScroll: 1, // Scroll one card at a time
    autoplay: true, // Auto-scrolling
    autoplaySpeed: 2000, // Auto-scroll every 2 seconds
    responsive: [
      {
        breakpoint: 1536, // 2xl screens
        settings: {
          slidesToShow: 4, // Show 4 cards
        },
      },
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 3, // Show 3 cards
        },
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 2, // Show 2 cards
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
    ],
  };
  

  return (

    <>
        <div className=" ml-4 lg:ml-28 xl:ml-28 2xl:ml-28">
            <h1 className=' font-inter text-5xl font-semibold text-center md:text-center lg:text-left'>
            Wall of love 💖
            </h1>
            <p className='mt-10 font-inter text-slate-600 text-lg w-[95%] md:w-[700px] lg:w-[850px] xl:w-[1000px] 2xl:w-[1150px] text-center md:text-center lg:text-left'>
            Thousands of people love to trip with us!
            </p>
        </div>
    <div className="flex justify-center items-center">
    <div className="w-[90%] px-4">
      {/* Carousel/Slider */}
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-4">
            <ReviewCard
              content={review.content}
              stars={review.stars}
              user={review.user}
              occ={review.occ}
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
}

export default ReviewSection;
