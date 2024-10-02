import { CustomerTable } from "@/components/CustomerTable";
import { Helmet } from "react-helmet";

const CustomerPage = () => {
  return (
    <main className="max-w-[1200px] mx-auto my-10">
      <Helmet>
        <title>Customers</title>
      </Helmet>
      <div className="flex justify-between my-5 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Customers</h1>
          <p className="text-gray-700">View All Customers and their Orders</p>
        </div>
      </div>
      <CustomerTable />
    </main>
  );
};

export default CustomerPage;
