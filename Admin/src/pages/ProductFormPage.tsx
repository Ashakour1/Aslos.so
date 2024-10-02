import ProductForm from "@/components/ProductForm";
import { useUser } from "@/hooks/useUser";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProductFormPage = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 py-20 px-4">
      <Helmet>
        <title>Product Form</title>
      </Helmet>
      <ProductForm />
    </main>
  );
};

export default ProductFormPage;
