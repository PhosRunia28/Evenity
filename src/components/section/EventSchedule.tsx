import { eventSchedule } from "@/data/EventScheduleData";
import CardEvent from "../common/CardEvent";
import TitleSection from "../common/TitleSection";
import { Button } from "../ui/button";

export default function EventSchedule() {
  const sortEventByDate = eventSchedule.sort(
    (a, b) => a.date.getTime() - b.date.getTime(),
  );
  return (
    <section className="container pb-32 font-inter" id="event">
      <div>
        <TitleSection title="EVENT SCHEDULE" />
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sortEventByDate.map((card, index) => (
            <CardEvent card={card} key={index} />
          ))}
        </div>
        <div className="mx-auto w-full max-w-fit pt-20">
          <a href="#">
            <Button className="rounded-xl border border-primary px-12 py-8 font-rubik text-base font-medium hover:bg-white hover:text-primary">
              View More
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
