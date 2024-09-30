import { useCart } from "@/features/useCart";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import { useCheckout } from "@/features/useCheckout";

const CartItems = () => {
  const { products, totalPrice } = useCart((state) => ({
    products: state.products,
    totalPrice: state.totalPrice,
  }));

  const { changeStageToInformation } = useCheckout(); // Get stage and change functions from the checkout store

  const navigate = useNavigate();

  const handleCheckout = () => {
    changeStageToInformation(); // Change the stage to information
    navigate("/check");
  };
  return (
    <section>
      {products.length === 0 ? (
        <div className="text-center  flex flex-col mt-44 justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Your cart is empty
          </h2>
          <p className="mt-2">
            Looks like you haven't added any items to the cart yet.
          </p>
          <Link to="/shop" className="text-sm font-medium">
            <button className="border border-black px-4 py-2 my-4">
              Back to Shop
            </button>
          </Link>
        </div>
      ) : (
        <div className="mx-auto max-w-[1180px] px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <div className="space-y-4">
              {products.map((product, index) => (
                <CartItem product={product} key={index} />
              ))}
            </div>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  {/* 
                <div className="flex justify-between">
                  <dt>Discount</dt>
                  <dd>-£20</dd>
                </div> */}

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${totalPrice}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  {/* <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>

                  <p className="whitespace-nowrap text-xs">
                    2 Discounts Applied
                  </p>
                </span> */}
                </div>

                <div className="flex justify-end">
                  <a
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartItems;
