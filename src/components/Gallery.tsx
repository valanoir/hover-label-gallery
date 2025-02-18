
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image_url: string;
}

const Gallery = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    const categories = ['keychain', 'pen', 'bottle', 'bags'];
    const promises = categories.map(async (category) => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category)
        .limit(1)
        .single();
      
      if (error) {
        console.error(`Error fetching ${category}:`, error);
        return null;
      }
      return data;
    });

    const results = await Promise.all(promises);
    setFeaturedProducts(results.filter((product): product is Product => product !== null));
  };

  const handleProductClick = (category: string) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="hover-card cursor-pointer"
            onClick={() => handleProductClick(product.category)}
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
            <div className="hover-label bg-white/90 w-[90%] mx-auto text-gray-900">
              <span className="text-sm text-blue-600">{product.category}</span>
              <h3 className="text-xl font-semibold mt-1">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
