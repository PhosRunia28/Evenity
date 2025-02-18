import { EventTime } from "@/data/AboutEvent";
import { useEffect, useState } from "react";
import DateBox from "../common/DateBox";
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export default function TimeEventSection() {
  const timeEvent = EventTime.getTime();
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = timeEvent - now;

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="container pb-32 font-inter">
      <div className="grid grid-cols-1 items-center gap-10 overflow-hidden sm:grid-cols-2 sm:gap-16 lg:grid-cols-4">
        {Object.entries(timeLeft).map(([key, value], index) => (
          <DateBox key={key} date={value} desc={key} index={index} />
        ))}
      </div>
    </section>
  );
}
