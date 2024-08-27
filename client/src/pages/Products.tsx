// import React from "react";
// import { type ProductType } from "@/types/product.t";
import Product from "@/components/Products/product";
import { ProductType } from "@/types/product.t";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Products = ({}) => {
  const { sex } = useParams();

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchingProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/products/", {
        params: {
          sex,
        },
      });
      setProducts(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchingProducts();
  }, [sex]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-96">
          <h1 className="text-xl ">Loading...</h1>
        </div>
      ) : products?.length === 0 ? (
        <div className="flex items-center justify-center h-96">
          <h1 className="text-xl font-semibold">No Products Found</h1>
        </div>
      ) : (
        <main className="max-w-[1180px] mx-auto md:px-4 lg:px-0 px-4 py-10">
          <div>
            <div className="flex items-center justify-between ">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">{sex?.toUpperCase()}</h1>
                <p className="font-medium text-sm">SHOP ALL PRODUCTS</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-4   md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-2 py-5">
              {products.map((item, index) => (
                <Product key={index} product={item} />
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Products;
