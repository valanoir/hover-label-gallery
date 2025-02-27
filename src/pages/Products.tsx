import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import Modal from "react-modal";
import productImg from '../images/products.jpg';
import { Menu, X } from 'lucide-react';

Modal.setAppElement('#root');

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  image_url: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [subcategories, setSubcategories] = useState<{ [key: string]: string[] }>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";
  const currentSubcategory = searchParams.get("subcategory") || "";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [currentCategory, currentSubcategory]);

  const fetchProducts = async () => {
    let query = supabase.from("products").select("*");
    if (currentCategory !== "all") {
      query = query.eq("category", currentCategory);
      if (currentSubcategory) {
        query = query.eq("subcategory", currentSubcategory);
      }
    }
    const { data, error } = await query;
    if (error) console.error("Error fetching products:", error);
    else setProducts(data || []);
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase.from("products").select("category, subcategory");
    if (error) {
      console.error("Error fetching categories:", error);
    } else {
      const uniqueCategories = Array.from(new Set(data?.map(item => item.category) || []));
      setCategories(uniqueCategories);
      const subcategoryMap: { [key: string]: string[] } = {};
      data.forEach(item => {
        if (!subcategoryMap[item.category]) {
          subcategoryMap[item.category] = [];
        }
        if (item.subcategory && !subcategoryMap[item.category].includes(item.subcategory)) {
          subcategoryMap[item.category].push(item.subcategory);
        }
      });
      setSubcategories(subcategoryMap);
    }
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {/* Hero Section with Background Image */}
        <div className="relative w-full h-[400px] pt-24">
          <img
            src={productImg}
            alt="Products Background"
            className="absolute inset-0 w-full h-full object-cover md:object-center object-right"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Breadcrumb & Categories */}
          <div className="absolute bottom-0 w-full px-4 mx-auto pb-6">
            <div className="flex items-center justify-between border-b pb-3 text-gray-200 text-sm">
              <div>
                <span className="cursor-pointer hover:underline" onClick={() => setSearchParams({})}>
                  Products
                </span>
                {currentCategory !== "all" && (
                  <span>
                    {' → '}
                    <span
                      className="cursor-pointer hover:underline"
                      onClick={() => setSearchParams({ category: currentCategory })}
                    >
                      {currentCategory}
                    </span>
                  </span>
                )}
                {currentSubcategory && (
                  <span>
                    {' → '}
                    <span
                      className="cursor-pointer hover:underline"
                      onClick={() => setSearchParams({ category: currentCategory, subcategory: currentSubcategory })}
                    >
                      {currentSubcategory}
                    </span>
                  </span>
                )}
              </div>

              {/* Desktop Categories */}
              <div className="hidden md:flex gap-4">
                {categories.map((category) => (
                  <div key={category} className="relative group cursor-pointer">
                    <span
                      style={{ fontWeight: '500' }}
                      className={`px-3 py-1 rounded hover:bg-gray-700 ${currentCategory === category ? 'font-extrabold' : ''}`}
                      onClick={() => setSearchParams({ category })}
                    >
                      {category}
                    </span>
                    {subcategories[category] && subcategories[category].length > 0 && (
                      <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
                        {subcategories[category].map((subcategory) => (
                          <div
                            key={subcategory}
                            className="p-2 hover:bg-gray-100 cursor-pointer text-gray-900"
                            onClick={() => setSearchParams({ category, subcategory })}
                          >
                            {subcategory}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gray-200">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Collapsible Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-white shadow-lg rounded-md mt-2 p-4 z-20 absolute left-0 right-0 mx-4">
                {categories.map((category) => (
                  <div key={category} className="py-2">
                    <div
                      className={`font-medium text-gray-900 hover:text-gray-700 ${currentCategory === category ? 'font-bold' : ''}`}
                      onClick={() => {
                        setSearchParams({ category });
                        setIsMenuOpen(false);
                      }}
                    >
                      {category}
                    </div>
                    {subcategories[category] && subcategories[category].length > 0 && (
                      <div className="pl-4 mt-1 space-y-1">
                        {subcategories[category].map((subcategory) => (
                          <div
                            key={subcategory}
                            className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
                            onClick={() => {
                              setSearchParams({ category, subcategory });
                              setIsMenuOpen(false);
                            }}
                          >
                            {subcategory}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-4 max-w-7xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="hover-card relative">
                <div className="relative">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-[300px] object-cover transition-transform duration-800 ease-in-out hover:scale-110"
                    style={{ borderRadius: "7px" }}
                    onClick={() => handleImageClick(product.image_url)}
                  />
                  {currentCategory === "all" && product.subcategory && (
                    <div className="absolute top-2 right-2 text-white text-xs px-2 py-1 rounded-full" style={{ backgroundColor: 'black', opacity: '0.7', fontWeight: '600' }}>
                      {product.subcategory}
                    </div>
                  )}
                  <div className="detail-label absolute bottom-2 right-2 p-1" style={{ width: 'fit-content', justifyContent: 'end', backgroundColor: 'black', opacity: '0.7' }}>
                    <h3 style={{ color: 'white', textAlign: 'right', fontWeight: '400', fontSize: '12px' }}>#{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal for Image Overlay */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'transparent',
            padding: '0',
            maxWidth: '90vw',
            maxHeight: '90vh',
          },
        }}
      >
        {selectedImage && (
          <div className="relative">
            <img
              src={selectedImage}
              alt="Product Image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-300 opacity-40 text-black rounded-full p-2 transition-colors"
            >
              ×
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Products;