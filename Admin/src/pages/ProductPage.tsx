import { ProductTable } from "@/components/ProductTable";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProductPage = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }
  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <div className="max-w-[1200px] mx-auto my-10">
        <div className="flex justify-between my-5 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">Products</h1>
            <p className="text-gray-700">
              Manage your products and view your inventory
            </p>
          </div>
          <div>
            <Link to="/dashboard/products/add">
              <Button>Create New Product</Button>
            </Link>
          </div>
        </div>
        <ProductTable />
      </div>
    </div>
  );
};

export default ProductPage;
