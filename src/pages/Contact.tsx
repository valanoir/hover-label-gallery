import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import contactImage from '../images/contact.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase
      .from("contact_submissions")
      .insert([formData]);

    if (error) {
      toast.error("Failed to send message. Please try again.");
    } else {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-28 pb-16 relative overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, #f8ecfc, rgb(249, 250, 251))`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Let’s Connect & Create
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether it’s corporate gifting, innovative printing, or cutting-edge tech solutions, 
            we’re here to bring your vision to life. Reach out today!
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 C30,80 70,80 100,100" fill="none" stroke="#9b59b6" strokeWidth="2" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    placeholder="John Doe"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-[#f8ecfc] focus:border-[#9b59b6] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="johndoe@example.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-[#f8ecfc] focus:border-[#9b59b6] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    placeholder="+91 9876543210"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-[#f8ecfc] focus:border-[#9b59b6] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    placeholder="https://example.com"
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-[#f8ecfc] focus:border-[#9b59b6] transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  placeholder="Tell us about your project or inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-[#f8ecfc] focus:border-[#9b59b6] transition-all duration-200 resize-y"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full font-medium text-white bg-[#9b59b6] hover:bg-[#8e4ca8] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div
              className="rounded-xl p-8 shadow-lg transform hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: '#f8ecfc' }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#9b59b6' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-600 font-medium">Phone</p>
                    <p className="text-gray-600">+91 123-456-7890</p>
                    <p className="text-gray-600">+91 987-654-3210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#9b59b6' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-600 font-medium">Email</p>
                    <p className="text-gray-600">support@corporategifting.com</p>
                    <p className="text-gray-600">sales@corporategifting.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#9b59b6' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-600 font-medium">Address</p>
                    <p className="text-gray-600">123 Gifting Lane,</p>
                    <p className="text-gray-600">Business City, India 400001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src={contactImage}
                alt="Contact Us"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Additional Section: Why Contact Us */}
        <section className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Reach Out?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#f8ecfc] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#9b59b6]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-9a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Get personalized advice from our team of gifting and tech specialists.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#f8ecfc] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#9b59b6]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v2h2v-2zm0-8H9v6h2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored options for your corporate needs, from design to delivery.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#f8ecfc] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#9b59b6]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 11l-4-4 1.41-1.41L9 10.17l4.59-4.58L15 7l-6 6z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Our team responds promptly to ensure your inquiries are addressed fast.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-medium text-gray-800 mb-2">What are your business hours?</h3>
              <p className="text-gray-600">We’re available Monday to Friday, 9:00 AM to 6:00 PM IST. Feel free to reach out anytime, and we’ll get back to you promptly!</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Do you offer bulk orders?</h3>
              <p className="text-gray-600">Yes, we specialize in bulk corporate gifting and tech solutions. Contact us for custom quotes and discounts on large orders.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-medium text-gray-800 mb-2">How long does shipping take?</h3>
              <p className="text-gray-600">Shipping typically takes 3-7 business days within India, depending on your location and order size. We’ll provide updates every step of the way.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;