import NavButton from "@/components/common/NavButton";
import NavHeader from "@/components/common/NavHeader";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
export default function Header() {
  return (
    <header className="container py-6 pb-14 font-fredoka">
      <nav className="flex items-center justify-between gap-6">
        <a href="#">
          <h2 className="text-3xl font-semibold">Evenity</h2>
        </a>
        <NavHeader />
        <NavButton />
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center justify-center gap-8 text-center">
              <NavHeader mobile />
              <NavButton mobile />
              <VisuallyHidden>
                <SheetTitle>navigation mobile</SheetTitle>
                <SheetDescription>
                  This is description Navigation mobile
                </SheetDescription>
              </VisuallyHidden>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
