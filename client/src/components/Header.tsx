import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const OpenNavbar = () => {
    setOpenNav(!openNav);
  };

  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path); // This triggers a client-side navigation without a full page reload
  };
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-[1140px] mx-auto px-4 py-2 flex md:justify-between items-center">
        <div className="logo flex-1 md:flex-none">
          <Link to="/" className="text-2xl font-bold text-accent">
            <img className="w-16" src="/logo-2.png" alt="logo" />
          </Link>
        </div>
        <div className="">
          <NavigationMenu className="hidden md:flex flex-1 ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black font-normal">
                  SHOP
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <h1 className="pl-4 py-4 font-semibold text-gray-500 text-sm">
                      OUR
                    </h1>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/shop/sex/male"
                        className="group grid h-auto w-full items-start justify-start  rounded-md bg-background pl-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        onClick={() => handleNavClick("/shop/sex/male")}
                      >
                        <div className="text-sm font-medium leading-none ">
                          MALE
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/shop/sex/female"
                        className="group grid h-auto w-full items-start justify-start  rounded-md bg-background pl-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        onClick={() => handleNavClick("/shop/sex/female")}
                      >
                        <div className="text-sm font-medium leading-none ">
                          FEMALE
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black font-normal">
                  COLLECTION
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <h1 className="pl-4 py-4 font-semibold text-gray-500 text-sm">
                      OUR COLLECTION
                    </h1>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/shop/coll/spring"
                        className="group grid h-auto w-full items-start justify-start  rounded-md bg-background pl-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        onClick={() => handleNavClick("/shop/coll/spring")}
                      >
                        <div className="text-sm font-medium leading-none ">
                          SPRING
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/shop/coll/summer"
                        className="group grid h-auto w-full items-start justify-start  rounded-md bg-background pl-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        onClick={() => handleNavClick("/shop/coll/summer")}
                      >
                        <div className="text-sm font-medium leading-none ">
                          SUMMER
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black font-normal">
                  EXPLORE
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <h1 className="pl-4 py-4 font-semibold text-gray-500 text-sm">
                      ABOUT
                    </h1>
                    <NavigationMenuLink asChild>
                      <Link
                        to="#"
                        className="group grid h-auto w-full items-start justify-start x rounded-md bg-background pl-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        <div className="text-sm font-medium leading-none ">
                          OUR PHILOSOPHY
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="#"
                        className="group grid h-auto w-full items-start justify-start  rounded-md bg-background pl-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          DESIGN PRINCIPLES
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex-2 md:flex pr-2">
          <CiShoppingCart className="text-3xl" />
        </div>
        {/* mobile */}
        <div onClick={OpenNavbar} className="md:hidden block ">
          <button className=" mt-2">
            <RiMenuFill className="text-2xl text-gray-700" />
          </button>
        </div>
      </div>
      {openNav ? (
        <div className="">
          <NavigationMenu className="md:hidden">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black font-normal">
                  SHOP
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        to="#"
                        className="group grid h-auto w-full items-start justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Male
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Shop the latest male collections.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="#"
                        className="group grid h-auto w-full items-start justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Female
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Shop the latest female collections.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black font-normal">
                  COLLECTION
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        to="#"
                        className="group grid h-auto w-full items-start justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Spring
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore our spring collection.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="#"
                        className="group grid h-auto w-full items-start justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Summer
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover our summer collection.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black font-normal">
                  EXPLORE
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <h1 className="pl-4 pt-4 font-semibold text-gray-500 text-sm">
                      ABOUT
                    </h1>
                    <NavigationMenuLink asChild>
                      <Link
                        to="#"
                        className="group grid h-auto w-full items-start justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Our Philosophy
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn about our guiding principles and values.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="#"
                        className="group grid h-auto w-full items-start justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Design Principles
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover our design principles.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
