import { cn } from "@/lib/utils";
import { Map } from "lucide-react";
type Props = {
  subtitle: string;
  title: string;
  location: string;
  side?: "right" | "left";
};
export default function CardVenue({
  subtitle,
  title,
  location,
  side = "right",
}: Props) {
  return (
    <div
      className={cn(
        "z-20 mx-auto flex w-full max-w-sm flex-col gap-4 rounded-[1.4rem] border border-black/10 bg-white p-7 shadow-lg lg:absolute lg:max-w-[17rem]",
        {
          "lg:-right-20 lg:bottom-24": side === "right",
          "lg:-left-20 lg:top-24": side === "left",
        },
      )}
    >
      <h5 className="font-medium text-gray-500">{subtitle}</h5>
      <h4 className="w-full max-w-[18rem] text-lg font-medium uppercase text-gray-800 lg:max-w-[12rem]">
        {title}
      </h4>
      <div className="flex items-center justify-between gap-3">
        <p className="text-gray-500 lg:text-[0.8rem]">{location}</p>
        <a
          href="#"
          className="group rounded-full border border-primary bg-primary p-3 text-white transition hover:bg-white"
        >
          <Map className="h-4 w-4 group-hover:text-primary" />
        </a>
      </div>
    </div>
  );
}
