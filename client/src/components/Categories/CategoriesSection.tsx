import { Categories } from "../../data/categories-data";
import Category from "./Category";

const CategorySection = () => {
  return (
    <main className="max-w-[1180px] mx-auto md:px-4 lg:px-0 px-4">
      <div className="py-4">
        <h1 className="text-2xl font-semibold py-4">SHOP BY CATEGORY</h1>
        <hr className="border-1" />
        <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-4">
          {Categories.map((item, index) => (
            <Category key={index} category={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategorySection;
