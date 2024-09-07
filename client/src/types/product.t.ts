export type ProductType = {
  id: string | null;
  name: string;
  description: string;
  sex: string;
  category: string;
  price: number;
  stock: number;
  color: string[];
  size: string[];
  image: string;
  createdAt?: string;
  updatedAt?: string;
};

export type CartItem = Omit<ProductType, "color" | "size"> & {
  selectedColor: string;
  selectedSize: string;
  quantity: number;
};
