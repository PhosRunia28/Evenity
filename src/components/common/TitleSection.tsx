export default function TitleSection({ title }: { title: string }) {
  return (
    <h3
      className="w-full pb-10 text-center font-fredoka text-5xl font-semibold uppercase md:pb-14 md:text-6xl"
      style={{ lineHeight: 1.5 }}
    >
      {title}
    </h3>
  );
}
