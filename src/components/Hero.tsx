import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../images/image2.png';
import giftImg from '../images/gifts.png';

const Hero = () => {
  const navigate = useNavigate();
  const [activeText, setActiveText] = useState(0);
  const texts = ['Design', 'Product', 'Brands'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* First Section */}
      <div 
        className="w-full flex flex-col md:flex-row pt-20" // Added pt-20 (padding-top: 5rem or 80px)
        style={{ backgroundColor: 'rgb(146 205 191)' }}
      >
        {/* Left Section - 40% */}
        <div className="w-full md:w-[40%] h-full m-auto py-12 px-6 md:px-12 flex items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Elevate Your Business Connections
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover premium corporate gifts, innovative printing solutions, and cutting-edge tech 
              designed to impress clients, reward teams, and strengthen partnerships.
            </p>
            <button 
              onClick={() => navigate('/products')}
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section - 60% */}
        <div className="w-full md:w-[60%] h-[400px] md:h-[500px]">
          <img 
            src={image}
            alt="Corporate Gifting Welcome"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Second Section */}
      <div 
        className="w-full flex flex-col md:flex-row" 
        style={{ backgroundColor: 'rgb(255, 241, 230)' }}
      >
        {/* Left Section (Image) - 70% */}
        <div className="w-full md:w-[60%] h-[400px] md:h-[500px] p-10">
          <img 
            src={giftImg}
            alt="Premium Gifts Showcase"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Section (Text) - 30% */}
        <div className="w-full md:w-[40%] py-12 px-6 md:px-12 flex items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Gifts That Inspire
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              From stylish electronics to personalized prints, explore our curated collections 
              that make every occasion memorable and every recipient feel valued.
            </p>
            <button 
              onClick={() => navigate('/products')} 
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;