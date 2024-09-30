import { OrderTable } from "@/components/OrdersTable";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  return (
    <main className="max-w-[1200px] mx-auto my-10">
      <div className="flex justify-between my-5 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Orders</h1>
          <p className="text-gray-700">
            Manage your orders and view your inventory
          </p>
        </div>
        <div>
          <Link to="/dashboard/orders/add">
            <Button>Create New Order</Button>
          </Link>
        </div>
      </div>
      <OrderTable />
    </main>
  );
};

export default OrdersPage;
