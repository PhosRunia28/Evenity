import { eventSchedule } from "@/data/EventScheduleData";
import CardEvent from "./CardEvent";
import TitleSection from "./TitleSection";

export default function EventSchedule() {
  const sortEventByDate = eventSchedule.sort(
    (a, b) => a.date.getTime() - b.date.getTime(),
  );
  return (
    <section className="container pb-32 font-inter">
      <div>
        <TitleSection title="EVENT SCHEDULE" />
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sortEventByDate.map((card, index) => (
            <CardEvent card={card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
