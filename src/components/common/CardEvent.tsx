import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDate, formatTime } from "@/lib/utils";
type CardData = {
  image: string;
  date: Date;
  time: {
    start: Date;
    end: Date;
  };
  title: string;
  description: string;
};
type Props = {
  card: CardData;
};
export default function CardEvent({ card }: Props) {
  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader className="p-0">
        <a href="#">
          <img
            src={card.image}
            alt={card.title}
            className="w-full rounded-2xl bg-cover bg-center"
          />
        </a>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-center justify-between gap-3 pb-2 pt-3 text-gray-500">
          <p className="text-xs font-medium leading-4">
            {formatDate(card.date)}
          </p>
          <p className="text-xs font-medium leading-4">
            {formatTime(card.time)}
          </p>
        </div>
        <a
          href="#"
          className="inline-block w-full max-w-fit pb-1 text-xl font-bold leading-7"
        >
          {card.title}
        </a>
        <p className="text-xs leading-4 text-gray-500">{card.description}</p>
      </CardContent>
    </Card>
  );
}
