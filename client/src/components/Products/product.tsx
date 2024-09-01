import { type ProductType } from "@/types/product.t";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col bg-white shadow-sm overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-lg font-semibold">{product.name}</h1>
        <p className="text-gray-600 text-sm">{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
