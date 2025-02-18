
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="prose max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            We are a leading provider of corporate gifting solutions, specializing in high-quality
            promotional products that help businesses strengthen their relationships with clients
            and employees. With years of experience in the industry, we understand the importance
            of making lasting impressions through thoughtful and practical corporate gifts.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
