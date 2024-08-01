import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDate, formatTime } from "@/lib/utils";
import { motion } from "framer-motion";
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
  index: number;
};
export default function CardEvent({ card, index }: Props) {
  const MotionCard = motion(Card);
  const cardEventVariants = {
    hidden: {
      opacity: 0,
      y: "-100px",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    },
  };
  return (
    <MotionCard
      className="w-full border-none shadow-none"
      whileInView="visible"
      initial="hidden"
      viewport={{ margin: "-300px", once: true }}
      variants={cardEventVariants}
      transition={{ duration: 1 }}
    >
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
    </MotionCard>
  );
}
