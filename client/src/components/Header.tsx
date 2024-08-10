import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-[1140px] mx-auto px-4 py-2 flex justify-between items-center">
        <div className="logo">
          <img className="w-16" src="logo-2.png" alt="logo" />
        </div>
        <div className="">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Collection</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
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
        <div className="">
          <FaCartShopping className="text-3xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
