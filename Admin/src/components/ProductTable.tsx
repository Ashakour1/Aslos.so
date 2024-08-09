import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Products } from "@/types/product.t";
import axios from "axios";
import { MoveHorizontalIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const ProductTable = () => {
  const [products, setProducts] = useState<Products[]>([]);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchProducts();

  const handleDelete = async (id: string) => {
    try {
      if (!confirm("Are you sure you want to delete this product")) return;
      await axios.delete(`/api/products/delete/${id}`);
      fetchProducts();
      toast.success("Product deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id: string) => {
    navigate(`/dashboard/product/update/${id}`);
  };

  return (
    <>
      {products?.length > 0 ? (
        <div className="border shadow-sm rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead className="hidden sm:table-cell">Image</TableHead>
                <TableHead className="min-w-[150px]">Description</TableHead>
                <TableHead className="min-w-[150px]">Sex</TableHead>

                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="hidden sm:table-cell">Stock</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Collection
                </TableHead>
                <TableHead className="hidden sm:table-cell">Color</TableHead>
                <TableHead className="hidden sm:table-cell">Size</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product: Products) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  </TableCell>
                  <TableCell className="min-w-[150px]">
                    {product.description}
                  </TableCell>
                  <TableCell className="min-w-[150px]">{product.sex}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {product.category}
                  </TableCell>
                  <TableCell className="text-right">
                    {product.price.toString()}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {product.stock.toString()}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {product.collection}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {product.color.join(", ")}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {product.size.join(", ")}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleUpdate(product.id)}
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No products found</p>
      )}
    </>
  );
};
