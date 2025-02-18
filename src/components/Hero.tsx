
const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 opacity-50" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-gray-900">Design.</span>{" "}
          <span className="text-blue-500">Product.</span>{" "}
          <span className="text-gray-900">Brands.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          I must explain to you how all this mistaken. The idea of denouncing pleasure and praising pain was born
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            Our Case Studies
          </button>
          <button className="px-8 py-3 border-2 border-gray-200 text-gray-600 rounded-full hover:border-gray-300 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
