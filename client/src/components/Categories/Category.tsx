import { Link } from "react-router-dom";
import { type Category } from "../../types/category.t";

type CategoryProps = {
  category: Category;
};
const Category = ({ category }: CategoryProps) => {
  return (
    <div>
      <Link to={`/shop/cat/${category.name}`} className="relative">
        <img
          src={category.image}
          className="absolute inset-0 h-full object-cover w-full"
          alt=""
        />
        <div className="relative inset-0 lg:py-60 md:py-40 py-60  bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl font-semibold">
            {category.name.toUpperCase()}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Category;
