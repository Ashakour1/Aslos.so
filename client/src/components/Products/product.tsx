import { type ProductType } from "@/types/product.t";
import { Link } from "react-router-dom";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  return (
    <Link to={`/shop/${product.id}`}>

    
<div className="group block overflow-hidden">
        <img
          src={product.image}
          alt="Product Image"
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative bg-white pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {product.name}
          </h3>

          <p className="mt-2 tracking-wider text-gray-900">£{product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
