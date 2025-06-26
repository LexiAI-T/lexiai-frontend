import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// Hardcoded course data
const testimonials = [
 [
    {
      id: 1,
      rating: 5.0,
      text: "This platform has been a game-changer for our business. The seamless integration and exceptional customer support have exceeded our expectations. The team's dedication to excellence is truly remarkable.",
      author: {
        name: "Henry Arthur",
        title: "CEO at Company",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "HA",
      },
    },
    {
      id: 2,
      rating: 5.0,
      text: "Outstanding service and incredible results! The user experience is intuitive and the features are exactly what we needed. I would highly recommend this to any business looking to scale efficiently.",
      author: {
        name: "Sophia Wilson",
        title: "CTO at Company",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SW",
      },
    },
  ],
  [
    {
      id: 3,
      rating: 5.0,
      text: "The level of professionalism and attention to detail is unmatched. Our productivity has increased significantly since implementing this solution. The support team is always responsive and helpful.",
      author: {
        name: "Michael Chen",
        title: "Product Manager",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
    },
    {
      id: 4,
      rating: 5.0,
      text: "Exceptional quality and reliability. This platform has streamlined our operations and improved our overall efficiency. The ROI has been impressive and the team couldn't be happier.",
      author: {
        name: "Emma Rodriguez",
        title: "Operations Director",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ER",
      },
    },
  ],
];

const Testimonials = () => {
  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
  <section className="py-32 px-20 bg-white">
  <div className="container mx-auto px-4">
    {/* Section Title */}
    <div className="text-start mb-12 max-w-3xl">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        <span className="text-purple-600">Popular</span> Courses <br /> 
        <span className="text-black">Available Right Now</span>
      </h2>
      <p className="text-lg text-gray-700 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

       <Slider {...settings}>
      {testimonials.map((item) => (
        <div key={item.id} className="px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center">
            {/* Image */}
          

            {/* Name / Title */}
            <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {item.name}
            </h4>

            {/* Feedback */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
              {item.feedback}
            </p>

            {/* Rating Stars */}
            <ul className="flex space-x-1">
              {[...Array(item.rating)].map((_, i) => (
                <li key={i}>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Slider>
      </div>
    </section>
  );
};
export default Testimonials;

