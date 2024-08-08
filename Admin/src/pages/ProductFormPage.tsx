import ProductForm from "@/components/ProductForm";
import { useUser } from "@/hooks/useUser";
import { useNavigate } from "react-router-dom";

const ProductFormPage = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 py-20 px-4">
      <ProductForm />
    </main>
  );
};

export default ProductFormPage;
