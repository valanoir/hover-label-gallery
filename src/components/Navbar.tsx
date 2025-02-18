
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Staco
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link text-gray-600 hover:text-gray-900 ${
                location.pathname === '/' ? 'text-gray-900' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`nav-link text-gray-600 hover:text-gray-900 ${
                location.pathname === '/products' ? 'text-gray-900' : ''
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`nav-link text-gray-600 hover:text-gray-900 ${
                location.pathname === '/about' ? 'text-gray-900' : ''
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Let's Talk
            </Link>
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
            <Link 
              to="/" 
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="w-full px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
