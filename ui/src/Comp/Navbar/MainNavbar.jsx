"use client";

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Menu,
  ShoppingCart,
  User,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Profile from "../Profile/Profile";
import LoginDialog from "@/pages/LoginPage";
import { useCartStore } from "@/Store/CartStore";

const categories = [
  {
    title: "Sarees",
    href: "/category/sarees",
    description:
      "Discover our exclusive collection of sarees — from timeless classics to modern designs, crafted for every occasion.",
  },
  {
    title: "Designer Sarees",
    href: "/categories/designer-sarees",
    description:
      "Premium sarees with intricate detailing, elegant embroidery, and luxurious fabrics — perfect for special events.",
  },
  {
    title: "Cotton Sarees",
    href: "/categories/cotton-sarees",
    description:
      "Lightweight, breathable, and perfect for everyday elegance — explore our soft cotton saree range.",
  },
  {
    title: "Silk Sarees",
    href: "/categories/silk-sarees",
    description:
      "Experience traditional luxury with our stunning silk sarees, ideal for weddings and festive occasions.",
  },
  {
    title: "Sports Jerseys",
    href: "/categories/sports-jerseys",
    description:
      "Shop authentic sports jerseys inspired by your favorite teams and players — designed for comfort and passion.",
  },
  {
    title: "Football Jerseys",
    href: "/categories/football-jerseys",
    description:
      "Premium football jerseys with high-quality fabric, breathable design, and team-accurate details.",
  },
  {
    title: "Cricket Jerseys",
    href: "/categories/cricket-jerseys",
    description:
      "Official-style cricket jerseys for fans and players — built for performance and pride.",
  },
  {
    title: "Custom Jerseys",
    href: "/categories/custom-jerseys",
    description:
      "Create your own custom jersey with personalized names, numbers, and team designs.",
  },
  {
    title: "Combo Offers",
    href: "/categories/combo-offers",
    description:
      "Exclusive deals on saree and jersey combos — perfect for gifting or building your collection.",
  },
  {
    title: "New Arrivals",
    href: "/categories/new-arrivals",
    description:
      "Stay ahead of trends with our latest saree and jersey collections freshly added every week.",
  },
];

const user = true;

function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false} className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent className="z-[60]">
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent className="z-[60]">
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#contact-us" className="scroll-smooth">
              Contact Us
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>List</NavigationMenuTrigger>
          <NavigationMenuContent className="z-[60]">
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent className="z-[60]">
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent className="z-[60]">
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const RightNavbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCartStore();
  const [showNewDialog, setShowNewDialog] = React.useState(false);
  const [openLoginDialog, setOpenLoginDialog] = React.useState(false);

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* Profile Dropdown */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <User className="w-6 h-6 border border-black rounded-full cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 z-[200]" align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem onSelect={() => setShowNewDialog(true)}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Button
          className="bg-green-600 text-white font-semibold transition-all cursor-pointer hover:bg-green-700 hover:text-white"
          variant="outline"
          size="lg"
          onClick={() => setOpenLoginDialog(true)}
        >
          Login
        </Button>
      )}
      <Profile open={showNewDialog} onOpenChange={setShowNewDialog} />
      <LoginDialog open={openLoginDialog} onOpenChange={setOpenLoginDialog} />
    </div>
  );
};

function ListItem({ title, children, href }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

// ✅ FIXED Navbar
const MainNavbar = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white dark:bg-gray-900 z-[100]">
      {/* Logo */}
      <div
        className="font-bold text-lg cursor-pointer"
        onClick={() => navigate("/")}
      >
        JSHOP
      </div>

      {/* Desktop Menu */}
      <NavigationMenuDemo />

      {/* Right Section (Login + Hamburger) */}
      <div className="flex items-center gap-3">
        <div className="block md:hidden">
          <MobileMenu />
        </div>
        <RightNavbar />
      </div>
    </header>
  );
};

// ✅ Fixed MobileMenu with correct z-index + working trigger
function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="z-[101]">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[260px] bg-white dark:bg-gray-900 text-gray-900 dark:text-white z-[200]"
      >
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">JSHOP</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-5 mt-8">
          <Link to="/" className="hover:text-green-600 text-lg">
            Home
          </Link>
          <Link to="/shop" className="hover:text-green-600 text-lg">
            Shop
          </Link>
          <Link to="/about" className="hover:text-green-600 text-lg">
            About
          </Link>
          <Link to="/contact" className="hover:text-green-600 text-lg">
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MainNavbar;
