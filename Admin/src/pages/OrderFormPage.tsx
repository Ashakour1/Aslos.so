import OrderForm from "@/components/OrderForm";
import { Helmet } from "react-helmet";

const OrderPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-20 px-4">
      <OrderForm />
      <Helmet>
        <title>Order Form</title>
      </Helmet>
    </div>
  );
};

export default OrderPage;
