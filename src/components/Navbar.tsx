
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Staco
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/pages" className="nav-link text-gray-600 hover:text-gray-900">
              Pages
            </a>
            <a href="/services" className="nav-link text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="/blogs" className="nav-link text-gray-600 hover:text-gray-900">
              Blogs
            </a>
            <a href="/contact" className="nav-link text-gray-600 hover:text-gray-900">
              Contact Us
            </a>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="/" className="block text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/pages" className="block text-gray-600 hover:text-gray-900">
              Pages
            </a>
            <a href="/services" className="block text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="/blogs" className="block text-gray-600 hover:text-gray-900">
              Blogs
            </a>
            <a href="/contact" className="block text-gray-600 hover:text-gray-900">
              Contact Us
            </a>
            <button className="w-full px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Let's Talk
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
