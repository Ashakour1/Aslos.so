import { useCart } from "@/features/useCart";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { products, totalPrice, tax, totalPriceWithTax, RemoveCart } = useCart(
    (state) => ({
      products: state.products,
      totalPrice: state.totalPrice,
      tax: state.tax,
      RemoveCart: state.RemoveCart,
      totalPriceWithTax: state.totalPriceWithTax,
    })
  );

  const handleDelete = (id: any) => {
    RemoveCart(id);
  };
  return (
    <main className="max-w-[1080px] mx-auto md:px-4 lg:px-0 px-4 py-16">
      {products?.length === 0 ? (
        <div className="text-center  flex flex-col mt-44 justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            No products to checkout.
          </h2>
          <Link to="/shop" className="text-sm font-medium">
            <button className="border border-black px-4 py-2 my-4">
              Back to Shop
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">CHECKOUT</h1>
          </div>
          <div className="flex justify-between pt-5">
            <div className="w-[400px]">
              <p className="text-lg py-2 font-medium">INFORMATION</p>
              <h3 className="text-base font-medium">CONTACT INFO</h3>
              <form action="">
                <div className="py-2">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border-gray-400 w-full  border py-2 px-4"
                  />
                </div>
                <div className="py-2">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border-gray-400 w-full  border py-2 px-4"
                  />
                </div>
                <h1 className="py-2">SHIPPING ADDRESS</h1>
                <div className="py-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-gray-400 w-full border py-2 px-4"
                  />
                </div>

                <div className="py-2">
                  <input
                    type="text"
                    placeholder="Address"
                    className="border-gray-400 w-full  border py-2 px-4"
                  />
                </div>
                <button className="px-4 w-full py-2 mt-2 bg-gray-500 ">
                  Order By Whatsapp
                </button>
              </form>
            </div>

            <div className="w-[350px] border p-4">
              <div className="flex justify-between">
                <h1 className="font-semibold">Your Order List</h1>
                <p>2</p>
              </div>
              {products.map((product) => (
                <div className="py-2 flex gap-2 w-full">
                  <img src={product.image} className="w-20 h-20" alt="" />
                  <div className="w-full flex flex-col">
                    <div className="w-full flex  justify-between">
                      <div className="w-full flex flex-col">
                        <h1 className="font-bold text-base">{product.name}</h1>
                        <p className="text-xs pt-1 font-semibold text-gray-500">
                          {product.selectedColor}/ {product.selectedSize}
                        </p>
                      </div>
                      <TiDeleteOutline
                        className="text-2xl"
                        onClick={() => handleDelete(product.id)}
                      />
                    </div>
                    <div className="pt-3 flex justify-between">
                      <p className="text-xs">({product.quantity})</p>
                      <p>
                        <strong className="text-xs">$ {product.price}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <hr />
              <div className="py-2">
                <div className="flex justify-between py-1">
                  <dt className="text-xs">Sub total</dt>
                  <dd className="text-xs">${totalPrice}</dd>
                </div>
                {/* <div className="flex justify-between py-1">
                  <p className="text-xs">Delivery</p>
                  <strong className="text-xs">$1</strong>
                </div> */}
                <div className="flex justify-between py-1">
                  <p className="text-xs">VAT 5%</p>
                  <strong className="text-xs">${tax.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="flex justify-between text-xs">
                <p>Total</p>
                <strong className="text-xs">${totalPriceWithTax}</strong>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Checkout;
