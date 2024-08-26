import { products } from "@/data/products-data";
import Product from "./product";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { ProductType } from "@/types/product.t";
const Products = () => {
//   const [products, setProducts] = useState<ProductType[]>([]);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get("/api/products");

//       const sortedProducts = data
//         .sort(
//           (a: any, b: any) =>
//             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         )
//         .slice(0, 4);
//       setProducts(sortedProducts);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

  //   const getLatestProducts = (products: ProductType[]) => {
  //     return products
  //       .sort((a, b) => new Date(b.createdAt).getTime - new Date(a.created ?? ""))
  //       .slice(0, 4);
  //   };
  return (
    <main className="max-w-[1180px] mx-auto md:px-4 lg:px-0 px-4">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm">SHOP ALL PRODUCTS</p>
          <h1 className="text-2xl font-semibold">NEW IN</h1>
        </div>
        <button className="border border-black px-4 py-2">
          SHOP ALL PRODUCTS
        </button>
      </div>
      <div className="grid lg:grid-cols-4   md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-2 py-5">
        {products.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </div>
    </main>
  );
};

export default Products;
