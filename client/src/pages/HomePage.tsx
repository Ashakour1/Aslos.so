import CategorySection from "@/components/Categories/CategoriesSection";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products/products-section";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <CategorySection />
      <Products />
    </div>
  );
};

export default HomePage;
