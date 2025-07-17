import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="bg-base-100 p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => onOpenChange(false)}
              className="w-full text-left p-4 flex items-center font-medium hover:bg-base-300 hover:text-base-content"
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="/log-in"
              onClick={() => onOpenChange(false)}
              className="w-full text-left p-4 flex items-center font-medium hover:bg-base-300 hover:text-base-content"
            >
              Log In
            </Link>
            <Link
              href="/sign-up"
              onClick={() => onOpenChange(false)}
              className="w-full text-left p-4 flex items-center font-medium hover:bg-base-300 hover:text-base-content"
            >
              Sign Up
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
