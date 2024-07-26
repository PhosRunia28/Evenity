type FooterData = {
  title: string;
  links: {
    path: string;
    linkName: string;
  }[];
};
type Props = {
  footer: FooterData;
};
export default function FooterLink({ footer }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-lg font-semibold uppercase">{footer.title}</h4>
      <ul className="flex flex-col gap-5 font-inter">
        {footer.links.map((link, index) => (
          <li key={index}>
            <a
              href={link.path}
              className="text-sm font-medium leading-4 text-gray-300 transition hover:text-white"
            >
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
