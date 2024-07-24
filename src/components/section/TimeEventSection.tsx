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
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="container pb-32 font-inter">
      <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-16 lg:grid-cols-4">
        <DateBox date={timeLeft.days || 0} desc={"days"} />
        <DateBox date={timeLeft.hours || 0} desc={"hours"} />
        <DateBox date={timeLeft.minutes || 0} desc={"minutes"} />
        <DateBox date={timeLeft.seconds || 0} desc={"seconds"} />
      </div>
    </section>
  );
}
