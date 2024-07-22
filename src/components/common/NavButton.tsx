import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
type Props = {
  mobile?: boolean;
};
export default function NavButton({ mobile = false }: Props) {
  return (
    <div
      className={cn("gap-5", {
        "flex md:hidden": mobile,
        "hidden md:flex": !mobile,
      })}
    >
      <Button className="text-base font-medium" variant="link">
        Login
      </Button>
      <Button className="rounded-lg px-8 py-6 font-rubik font-normal">
        Register
      </Button>
    </div>
  );
}
