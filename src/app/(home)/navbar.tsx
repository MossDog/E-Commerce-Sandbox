"use client";

import { usePathname } from "next/navigation";
import { Oswald } from "next/font/google";
import Link from "next/link";

import { cn, cnRaw } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      className={cn(
        "bg-transparent border-transparent border-3 rounded-full px-3.5 text-lg text-base-content transition-all",
        "hover:bg-secondary hover:text-secondary-content hover:border-base-content",

        isActive &&
          "bg-primary text-primary-content border-base-content cursor-default hover:bg-primary hover:text-primary-content"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-base-100 text-base-content h-20 flex border-b justify-between font-medium font-outline-accent">
      <Link href="/" className="pl-6 flex items-center">
        <span
          className={cnRaw(
            "text-6xl font-extrabold font-outline-2 font-fill-accent font-outline-primary text-shadow-md",
            oswald.className
          )}
        >
          Bookeo
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex lg:items-center">
        <Button
          variant={"highlight"}
          className=" px-12 h-full border-l border-r-0 border-t-0 border-b-0 border-base-content rounded-none"
        >
          Log-In
        </Button>
        <Button
          variant={"highlight"}
          className="bg-black text-white px-12 h-full border-l border-r-0 border-t-0 border-b-0 border-base-content rounded-none"
        >
          Sign-Up
        </Button>
      </div>
      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
