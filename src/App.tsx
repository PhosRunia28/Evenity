import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
function App() {
  return (
    <>
      <section className="container border">
        <div className="border border-black">Halo</div>
        <Button variant={"link"}>Halo</Button>
        <Button>Halo</Button>
        <Button variant={"secondary"}>Halo</Button>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
}

export default App;
