import { useCart } from "@/features/useCart";
import { useState } from "react";

const CartItem = ({ product }: { product: any }) => {
  const { RemoveCart, IncrementQuantity, DecrementQuantity } = useCart(
    (state) => ({
      products: state.products,
      RemoveCart: state.RemoveCart,
      // totalPrice: state.totalPrice,
      // totalItems: state.totalItems,
      // UpdateQuantity: state.UpdateQuantity,
      IncrementQuantity: state.IncrementQuantity,
      DecrementQuantity: state.DecrementQuantity,
    })
  );

  const [quantity, setQuantity] = useState(product.quantity);

  const handleDelete = (id: any) => {
    RemoveCart(id);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    IncrementQuantity(product.id);
  };

  const handleDecrement = (id: any) => {
    if (quantity === 1) {
      RemoveCart(id);
    } else {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      DecrementQuantity(product.id);
    }
  };

  //   console.log(products);
  return (
    <div>
      <li className="flex items-center gap-4">
        <img
          src={product.image}
          alt=""
          className="size-16 rounded object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">{product.name}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Size:</dt>
              <dd className="inline">{product.selectedSize}</dd>
            </div>

            <div>
              <dt className="inline">Color:</dt>
              <dd className="inline">{product.selectedColor}</dd>
            </div>
            <div>
              <dt className="inline">price:</dt>
              <dd className="inline">{product.price}</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <form>
            <label htmlFor={`qty-${product.id}`} className="sr-only">
              Quantity
            </label>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="h-8 w-8 rounded border-gray-200 bg-gray-50 text-gray-600"
                onClick={() => handleDecrement(product.id)}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                id={`qty-${product.id}`}
                className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                readOnly
              />
              <button
                type="button"
                className="h-8 w-8 rounded border-gray-200 bg-gray-50 text-gray-600"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </form>

          <button
            className="text-gray-600 transition hover:text-red-600"
            onClick={() => handleDelete(product.id)}
          >
            <span className="sr-only">Remove item</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
