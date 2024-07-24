type Props = {
  date: number;
  desc: string;
};
export default function DateBox({ date, desc }: Props) {
  return (
    <div className="flex w-full max-w-full flex-col gap-3 rounded-2xl border border-black/10 py-7 text-center shadow-xl">
      <h4 className="text-7xl font-extrabold leading-none">{date}</h4>
      <p className="text-2xl font-extrabold uppercase leading-8 text-gray-500">
        {desc}
      </p>
    </div>
  );
}
