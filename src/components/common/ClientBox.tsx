type Props = {
  partner: string;
  index: number;
};
export default function ClientBox({ partner, index }: Props) {
  return (
    <div className="flex w-full max-w-[17rem] items-center justify-center rounded-2xl border border-black/20 py-14 shadow-xl">
      <img
        src={partner}
        alt={`partner_${index}`}
        className="w-full max-w-[10rem] bg-cover bg-center"
      />
    </div>
  );
}
