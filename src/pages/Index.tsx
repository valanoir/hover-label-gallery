
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import GiftPlatform from "@/components/Features";
import CustomerReviews from "@/components/Review";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Gallery />
      <GiftPlatform/>
      <CustomerReviews/>
      <Footer />
    </div>
  );
};

export default Index;
