import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full backdrop-blur-md z-50 px-6 py-4" style={{backgroundColor:'white'}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-black">
              Corporate Gifting
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link text-gray-500 hover:text-black ${
                location.pathname === '/' ? 'text-black' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`nav-link text-gray-500 hover:text-black ${
                location.pathname === '/products' ? 'text-black' : ''
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`nav-link text-gray-500 hover:text-black ${
                location.pathname === '/about' ? 'text-black' : ''
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-transparent text-black rounded-full border transition-all duration-300 hover:bg-black hover:text-white"
              style={{border:'1px solid black'}}
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-300 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block text-gray-300 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-300 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="w-full px-6 py-2 bg-transparent text-black rounded-full border border-black transition-all duration-300 hover:bg-black hover:text-white inline-block text-center"
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