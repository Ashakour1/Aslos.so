import { create } from "zustand";

interface ProductCart {
  id: string | null;
  name: string;
  image: string;
  price: number;
  sex: string;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

type CartStore = {
  products: ProductCart[];
  totalPrice: number;
  totalItems: number;
  totalPriceWithTax: number;
  tax: number;
  AddCart: (product: ProductCart) => void;
  RemoveCart: (id: string) => void;
  IncrementQuantity: (id: string) => void;
  DecrementQuantity: (id: string) => void;
};

export const useCart = create<CartStore>((set, get) => ({
  products: [],
  totalPriceWithTax: 0,
  totalPrice: 0,
  totalItems: 0,
  tax: 0,
  AddCart: (product) => {
    const { products } = get();

    // Create a new array with the existing products and the new product
    const existingItemIndex = products.find(
      (item) =>
        item.id === product.id &&
        item.selectedColor === product.selectedColor &&
        item.selectedSize === product.selectedSize
    );

    // Remove the existing product from the array
    if (existingItemIndex) {
      const updatedProducts = products.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      // Calculate the total price of the products in the cart
      const updatedTotalPrice = updatedProducts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      // Calculate the total number of items in the cart
      const updatedTotalItems = updatedProducts.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      // Calculate the total tax
      const updatedTax = updatedTotalPrice * 0.05; // 0.5% tax
      const finalTotalPrice = updatedTotalPrice + updatedTax;

      set({
        products: updatedProducts,
        totalPrice: updatedTotalPrice,
        totalPriceWithTax: finalTotalPrice,
        totalItems: updatedTotalItems,
        tax: updatedTax,
      });
    } else {
      const updatedProducts = [...products, product];

      const updatedTotalPrice = updatedProducts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      const updatedTotalItems = updatedProducts.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      const updatedTax = updatedTotalPrice * 0.05; // 0.5% tax
      const finalTotalPrice = updatedTotalPrice + updatedTax;

      set({
        products: updatedProducts,
        totalPriceWithTax: finalTotalPrice,
        totalPrice: updatedTotalPrice,
        totalItems: updatedTotalItems,
        tax: updatedTax,
      });
    }
  },
  RemoveCart: (id) => {
    const { products, tax } = get();

    const updatedProducts = products.filter((item) => item.id !== id);

    const updatedTotalPrice = updatedProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const updatedTotalItems = updatedProducts.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const updatedTax = (updatedTotalPrice * tax) / 100; // 0.5% tax

    const finalTotalPrice = updatedTotalPrice + updatedTax;

    set({
      products: updatedProducts,
      totalPriceWithTax: finalTotalPrice,
      totalPrice: updatedTotalPrice,
      totalItems: updatedTotalItems,
      tax: updatedTax,
    });
  },
  IncrementQuantity: (id) => {
    const { products, tax } = get();

    const updatedProducts = products.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    const updatedTotalPrice = updatedProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const updatedTotalItems = updatedProducts.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const updatedTax = updatedTotalPrice * 0.05; // 0.5% tax

    const finalTotalPrice = updatedTotalPrice + updatedTax;

    set({
      products: updatedProducts,
      totalPriceWithTax: finalTotalPrice,
      totalPrice: updatedTotalPrice,
      totalItems: updatedTotalItems,
      tax: updatedTax,
    });
  },
  DecrementQuantity: (id) => {
    const { products, tax } = get();

    const updatedProducts = products.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );

    const updatedTotalPrice = updatedProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const updatedTotalItems = updatedProducts.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const updatedTax = updatedTotalPrice * 0.05; // 0.5% tax

    const finalTotalPrice = updatedTotalPrice + updatedTax;

    set({
      products: updatedProducts,
      totalPriceWithTax: finalTotalPrice,
      totalPrice: updatedTotalPrice,
      totalItems: updatedTotalItems,
      tax: updatedTax,
    });
  },
}));
