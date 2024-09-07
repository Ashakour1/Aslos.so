export type productData = {
  name: string;
  description: string;
  sex: string;
  category: string;
  price: Number;
  stock: Number;
  collection: string;
  color: [];
  size: [];
  image: File | string;
};

export type Products = {
  id: string;
  name: string;
  description: string;
  sex: string;
  category: string;
  price: Number;
  stock: Number;
  collection: string;
  color: string[];
  size: string[];
  image: string;
};
