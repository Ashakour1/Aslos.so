// import { ProductType } from "@/types/product.t";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//   const [Product, setProduct] = useState<ProductType | undefined>(undefined);
//   const { id } = useParams();

//   const fetchProduct = async () => {
//     const response = await fetch(`/api/products/${id}`);
//     const data = await response.json();
//     console.log(data);
//     setProduct(data);
//   };

//   useEffect(() => {
//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);
//   // console.log(Product);
//   return (
//     <main className="max-w-[1180px] mx-auto md:px-4 lg:px-0 px-4 py-10">
//       <div className="flex justify-between gap-12 ">
//         <div className="flex gap-5 w-[50%] pt-10">
//           <img src={Product?.image} alt="" className="w-96 h-96" />
//           <div className="flex flex-col gap-5 pt-1">
//             <img
//               src="https://asrv.com/cdn/shop/products/ASRVE-Comm-425-Edit_600x.jpg?v=1673555835"
//               alt=""
//               className="w-20"
//             />
//             <img
//               src="https://asrv.com/cdn/shop/products/ASRVE-Comm-425-Edit_600x.jpg?v=1673555835"
//               alt=""
//               className="w-20"
//             />
//             <img
//               src="https://asrv.com/cdn/shop/products/ASRVE-Comm-425-Edit_600x.jpg?v=1673555835"
//               alt=""
//               className="w-20"
//             />
//             <img
//               src="https://asrv.com/cdn/shop/products/ASRVE-Comm-425-Edit_600x.jpg?v=1673555835"
//               alt=""
//               className="w-20"
//             />
//           </div>
//         </div>
//         <div className="border p-8 w-[50%]">
//           <div className="flex flex-col gap-2 max-w-md">
//             <h1>
//               Name : <strong>{Product?.name}</strong>
//             </h1>
//             <span>
//               Price : <strong>${Product?.price}</strong>{" "}
//             </span>
//             <p>
//               Description : <strong>{Product?.description}</strong>
//             </p>
//           </div>
//           <div className="flex flex-col pt-14 py-4">
//             <p>Color</p>
//             <div className="flex gap-3">
//               {Product?.color.map((color) => (
//                 <div className="w-10 h-10 bg-blue-400">{color}</div>
//               ))}
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <p>Size</p>
//             <div className="flex gap-3">
//               {Product?.size.map((size) => (
//                 <div className="w-10 h-10 bg-blue-400">{size}</div>
//               ))}
//             </div>
//           </div>
//           <div className="py-4">
//             <button className="px-4 w-full py-2 bg-black text-white">
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ProductDetail;
