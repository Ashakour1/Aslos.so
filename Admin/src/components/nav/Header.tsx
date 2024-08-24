import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeaderMobile from "./HeaderMobile";

export const routes = [
  {
    route: "/dashboard",
    name: "Dashboard",
  },
  {
    route: "/dashboard/products",
    name: "Products",
  },
  {
    route: "/dashboard/orders",
    name: "orders",
  },
  {
    route: "/dashboard/customers",
    name: "Customers",
  },
  // {
  //   route: "/dashboard/discounts",
  //   name: "Discounts",
  // },
  // {
  //   route: "/dashboard/settings",
  //   name: "Settings",
  // },
];

const Header = () => {
  // const [navIsOpen, setNavIsOpen] = useState(false);

  // const openNavBar = () => {
  //   setNavIsOpen(!navIsOpen);
  // };

  // const closeNavBar = () => {
  //   setNavIsOpen(false);
  // };

  return (
    <div>
      <header className="max-w-[1200px] mx-auto flex justify-between h-16 items-center text-black gap-4 border-b x-4 md:px-6">
        <div className="md:flex gap-5 hidden">
          <img src="/logo-2.png" alt="logo" className="w-16 h-auto max-h-10" />
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            {routes.map((route, index) => (
              <Link
                key={index}
                to={route.route}
                className="text-foreground transition-colors hover:text-foreground"
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>

        <HeaderMobile />
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
