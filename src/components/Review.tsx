// Reviews.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import profile from '../images/profile.png';
import boy from '../images/boy.avif'
import girl from '../images/girl.avif'
import oldman from '../images/oldman.avif'

// Sample user data (replace with actual data if needed)
const reviews = [
  {
    name: 'Sarah Johnson',
    review: 'This platform made gifting so easy and enjoyable! The variety of gifts and fast delivery impressed me.',
    image: girl, // Placeholder for user image (overridden by profile.png below)
  },
  {
    name: 'Michael Chen',
    review: 'Amazing service! The automated gifting feature saved us hours, and the quality is top-notch.',
    image: boy, // Placeholder for user image (overridden by profile.png below)
  },
  {
    name: 'David Lee',
    review: 'The inventory management and company store features are fantastic. Great for large teams!',
    image: oldman, // Placeholder for user image (overridden by profile.png below)
  },
  {
    name: 'Olivia Brown',
    review: 'Such a user-friendly platform! The customer support was also incredibly helpful.',
    image: girl, // Placeholder for user image (overridden by profile.png below)
  },
];

interface ReviewCardProps {
  name: string;
  review: string;
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, image }) => (
  <div className="bg-white p-6 rounded-lg h-72 flex flex-col justify-center overflow-hidden">
    <div>
      <img src={image} alt={`${name}'s profile`} className="w-16 h-16 rounded-full mb-4 object-cover" />
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <p className="text-gray-600 text-sm line-clamp-5">{review}</p> {/* Limit text to 5 lines with ellipsis */}
    </div>
  </div>
);

const Reviews: React.FC = () => {
  const settings = {
    dots: false, // Remove dots for a cleaner look
    infinite: true, // Loop indefinitely for seamless looping
    speed: 5000, // Slow speed for a marquee-like effect (5 seconds per slide)
    slidesToShow: 3, // Show 3 cards at a time by default
    slidesToScroll: 1, // Scroll one card at a time
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 0, // Continuous scrolling (no pause between slides)
    cssEase: 'linear', // Linear movement for smooth, constant scrolling
    pauseOnHover: true, // Stop sliding on hover
    variableWidth: false, // Ensure consistent card widths
    adaptiveHeight: false, // Ensure consistent card heights
    responsive: [
      {
        breakpoint: 1024, // Large screens (lg and above)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium screens (md)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small screens (sm)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-100" style={{ backgroundColor: 'rgb(255, 241, 230)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="w-full">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-2 w-full ">
                <ReviewCard
                  name={review.name}
                  review={review.review}
                  image={review.image} // Still passing review.image, but overridden by profile in ReviewCard
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;