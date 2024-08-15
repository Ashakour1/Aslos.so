import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { productData } from "@/types/product.t";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const imageRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState<productData>({
    name: "",
    description: "",
    sex: "",
    category: "",
    price: 0,
    stock: 0,
    collection: "",
    color: "",
    size: "",
    image: "",
  });

  const { id } = useParams();

  const fetchStudents = async () => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchStudents();
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const productData = {
  //   ...formData,
  //   color: formData.color.split(",").map((color) => color.trim()),
  //   size: formData.size.split(",").map((size) => size.trim()),
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };
  const navigate = useNavigate();

  // console.log(formData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("description", formData.description);
    formdata.append("sex", formData.sex);
    formdata.append("category", formData.category);
    formdata.append("price", formData.price.toString());
    formdata.append("stock", formData.stock.toString());
    formdata.append("collection", formData.collection);
    formdata.append("color", JSON.stringify(formData.color));
    formdata.append("size", JSON.stringify(formData.size));
    formdata.append("image", formData.image);

    try {
      if (id) {
        const { data } = await axios.put(
          `/api/products/update/${id}`,
          formdata
        );

        toast.success(data.message);
        navigate("/dashboard/products");
      } else {
        const { data } = await axios.post("/api/products/add", formdata);

        toast.success(data.message);
        navigate("/dashboard/products");
      }
    } catch (error) {
      // console.log(error);
      toast.error((error as any).response.data.message);
    }
  };

  return (
    <div className="w-[800px] rounded-lg mx-auto text-black p-8 ">
      <h1 className="my-4 text-3xl font-bold tracking-tight text-black">
        Product Registration
      </h1>
      <p className="mb-4 text-gray-700">
        Please fill in the form below to add a new product
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="name"
            placeholder="Enter the product name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="description"
            placeholder="Enter the product description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Sex
          </label>
          <select
            name="sex"
            className="rounded-md border border-gray-300 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="sex"
            onChange={handleChange}
            value={formData.sex}
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="category"
          >
            Category
          </label>
          <select
            name="category"
            className="rounded-md border border-gray-300 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="category"
            onChange={handleChange}
            value={formData.category}
          >
            <option value="">Select Category</option>
            <option value="recap">Recap</option>
            <option value="run">Run</option>
            <option value="train">Train</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col">
            <label
              className="mb-1 text-sm font-medium text-gray-700"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
              id="price"
              placeholder="Enter the product price"
              type="number"
              name="price"
              value={formData.price.toString()}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="mb-1 text-sm font-medium text-gray-700"
              htmlFor="stock"
            >
              Stock
            </label>
            <input
              className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
              id="stock"
              placeholder="Enter the available stock"
              type="number"
              name="stock"
              value={formData.stock.toString()}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="collection"
          >
            Collection
          </label>
          <select
            name="collection"
            className="rounded-md border border-gray-300 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="collection"
            onChange={handleChange}
            value={formData.collection}
          >
            <option value="">Select Collection</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="color"
          >
            Color
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="color"
            placeholder="Enter the available colors (separated by commas)"
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="size"
          >
            Size
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="size"
            placeholder="Enter the available sizes (separated by commas)"
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="image"
          >
            Image
          </label>
          <input
            ref={imageRef}
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button
          className="w-full rounded-md bg-black px-4 text-sm font-medium text-white py-3"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
