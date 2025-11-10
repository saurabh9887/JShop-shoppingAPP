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
import { categories } from "@/Middleware/Utils";
import SignupDialog from "@/pages/Signup";
import { useDialogStore } from "@/Store/AuthStore";

const user = false;

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
            <ul className="grid w-[200px] gap-2 md:w-[300px] md:grid-cols-1 lg:w-[400px]">
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
        {user && (
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/orders">Orders</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const RightNavbar = () => {
  const navigate = useNavigate();
  const { openLogin, openSignup } = useDialogStore();
  const { cartItems } = useCartStore();
  const [showNewDialog, setShowNewDialog] = React.useState(false);
  const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
  const [openSignupDialog, setOpenSignupDialog] = React.useState(false);

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
          className="bg-[#61894d] text-white font-semibold transition-all cursor-pointer hover:bg-green-700 hover:text-white"
          variant="outline"
          size="lg"
          onClick={openLogin}
        >
          Login
        </Button>
      )}
      <Profile open={showNewDialog} onOpenChange={setShowNewDialog} />
      {/* <LoginDialog open={openLoginDialog} onOpenChange={setOpenLoginDialog} /> */}
      {/* <SignupDialog
        open={openSignupDialog}
        onOpenChange={setOpenSignupDialog}
      /> */}
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
          <Link to="/category/sarees" className="hover:text-green-600 text-lg">
            Categories
          </Link>
          <a href="#contact-us" className="hover:text-green-600 text-lg">
            Contact Us
          </a>
          {user && (
            <Link to="/orders" className="hover:text-green-600 text-lg">
              Orders
            </Link>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MainNavbar;
