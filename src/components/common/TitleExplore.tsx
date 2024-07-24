import { cn } from "@/lib/utils";
export default function TitleExplore({ mobile }: { mobile?: boolean }) {
  return (
    <h3
      className={cn(
        "mx-auto w-full max-w-md text-center text-4xl font-semibold leading-normal md:mx-0 md:text-left md:text-[3.8rem] md:leading-relaxed lg:text-7xl lg:leading-relaxed",
        {
          "pb-8 lg:hidden": mobile,
          "hidden lg:block": !mobile,
        },
      )}
    >
      Explore Beautiful Venues
    </h3>
  );
}
