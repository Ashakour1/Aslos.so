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
  UpdateQuantity: (id: string, quantity: number) => void;

  totalPriceWithTax: number;
  tax: number;
  AddCart: (product: ProductCart) => void;
  RemoveCart: (id: string) => void;
};

export const useCart = create<CartStore>((set, get)  => ({
  products: [],
  totalPriceWithTax: 0,
  totalPrice: 0,
  totalItems: 0,
  tax: 0,
  AddCart: (product) => {
    const { products } = get();

    const existingItemIndex = products.find(
      (item) =>
        item.id === product.id &&
        item.selectedColor === product.selectedColor &&
        item.selectedSize === product.selectedSize
    );

    if (existingItemIndex) {
      const updatedProducts = products.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      const updatedTotalPrice = updatedProducts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      const updatedTotalItems = updatedProducts.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      const updatedTax = updatedTotalPrice * 0.005; // 0.5% tax
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

      const updatedTax = updatedTotalPrice * 0.005; // 0.5% tax
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
    const { products } = get();

    const updatedProducts = products.filter((item) => item.id !== id);

    const updatedTotalPrice = updatedProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const updatedTotalItems = updatedProducts.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const updatedTax = updatedTotalPrice * 0.005; // 0.5% tax

    const finalTotalPrice = updatedTotalPrice + updatedTax;

    set({
      products: updatedProducts,
      totalPriceWithTax: finalTotalPrice,
      totalPrice: updatedTotalPrice,
      totalItems: updatedTotalItems,
      tax: updatedTax,
    });
  },
  UpdateQuantity: (id, quantity) => {
    const { products } = get();

    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: Math.max(quantity, 1) } // Ensure quantity is at least 1
        : product
    );

    const updatedTotalPrice = updatedProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const updatedTotalItems = updatedProducts.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const updatedTax = updatedTotalPrice * 0.005; // 0.5% tax
    const finalTotalPrice = updatedTotalPrice + updatedTax;

    set({
      products: updatedProducts,
      totalPrice: updatedTotalPrice,
      totalItems: updatedTotalItems,
      totalPriceWithTax: finalTotalPrice,
      tax: updatedTax,
    });
  },
}));
