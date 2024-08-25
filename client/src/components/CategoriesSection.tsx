import { Categories } from "../data/categories-data";
import Category from "./Category";

const CategorySection = () => {
  return (
    <main className="max-w-[1140px] mx-auto md:px-0 px-4">
      <div className="py-4">
        <h1 className="text-2xl font-bold py-4">Shop By Category</h1>
        <hr className="border-1" />
        <div className="grid grid-cols-1 md:grid-cols-3 py-4">
          {Categories.map((item, index) => (
            <Category key={index} category={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategorySection;
