"use client";

import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
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

const NavbarItems = [
  { href: "/", Children: "Home" },
  { href: "/about", Children: "About" },
  { href: "/features", Children: "Features" },
  { href: "/pricing", Children: "Pricing" },
  { href: "/contact", Children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-base-100 text-base-content h-20 flex border-b justify-between font-medium">
      <Link href="/" className="pl-6 flex items-center">
        <span
          className={cn(
            "text-5xl font-semibold font-outline-2 font-outline-secondary",
            poppins.className
          )}
        >
          funroad
        </span>
      </Link>

      <div className="items-center gap-4 hidden lg:flex">
        {NavbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.Children}
          </NavbarItem>
        ))}
      </div>

      <div></div>
    </nav>
  );
};
