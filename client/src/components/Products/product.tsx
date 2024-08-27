import { type ProductType } from "@/types/product.t";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <img
        src={product.image}
        alt="Product"
        className="w-full h-72  object-cover"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-base font-semibold ">{product.name}</h1>
        <p className="text-gray-600">{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
