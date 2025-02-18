
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image_url: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [currentCategory]);

  const fetchProducts = async () => {
    let query = supabase.from("products").select("*");
    if (currentCategory !== "all") {
      query = query.eq("category", currentCategory);
    }
    const { data, error } = await query;
    if (error) console.error("Error fetching products:", error);
    else setProducts(data || []);
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("category")
      .distinct();
    if (error) console.error("Error fetching categories:", error);
    else setCategories(data?.map(item => item.category) || []);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          <button
            onClick={() => setSearchParams({})}
            className={`px-4 py-2 rounded-full ${
              currentCategory === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            } transition-colors whitespace-nowrap`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSearchParams({ category })}
              className={`px-4 py-2 rounded-full ${
                currentCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              } transition-colors whitespace-nowrap`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="hover-card">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="hover-label bg-white/90 text-gray-900">
                <span className="text-sm text-blue-600">{product.category}</span>
                <h3 className="text-xl font-semibold mt-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
