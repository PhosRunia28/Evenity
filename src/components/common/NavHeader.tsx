import { HeaderNavigation } from "@/data/HeaderNavigationData";
import { cn } from "@/lib/utils";
type Props = {
  mobile?: boolean;
};
export default function NavHeader({ mobile = false }: Props) {
  return (
    <ul
      className={cn({
        "flex flex-col gap-8 md:hidden": mobile,
        "hidden gap-6 md:flex lg:w-full lg:max-w-xl lg:justify-end lg:gap-10":
          !mobile,
      })}
    >
      {HeaderNavigation.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            className="font-medium transition hover:text-primary"
          >
            {link.linkName}
          </a>
        </li>
      ))}
    </ul>
  );
}
