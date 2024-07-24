import { EventTime } from "@/data/AboutEvent";
import { formatDate } from "@/lib/utils";
import { Play } from "lucide-react";
import { useState } from "react";
import TitleSection from "../common/TitleSection";

export default function RecapVideoEvent() {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <section className="container pb-32 font-fredoka">
      <TitleSection title="RECAP EVENT 2024" />
      <div className="relative flex h-full min-h-[600px] w-full flex-col gap-6 rounded-2xl bg-black px-4 py-10 text-white sm:min-h-[500px] sm:px-10 md:rounded-[4rem] lg:px-14 lg:py-16">
        {/* video */}
        {openVideo && (
          <iframe
            className="absolute inset-0 z-20 h-full w-full rounded-2xl md:rounded-[4rem]"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=flAHoIQo4EaJKf1Z"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {/* image cover */}
        <img
          src="./heroEvent.png"
          alt="image cover recap event"
          className="absolute inset-0 hidden h-full w-full bg-cover bg-center sm:block"
        />
        <div className="relative z-10 mx-auto flex max-w-fit flex-col gap-3 text-center font-inter sm:mx-0 sm:text-left">
          <h4 className="text-5xl font-black leading-none lg:text-6xl">
            Green Day
          </h4>
          <p className="text-xl font-medium leading-9 lg:text-3xl">
            California, USA
          </p>
        </div>
        <div className="relative z-10 mt-auto flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <button
              className="group w-full max-w-fit rounded-full border border-white bg-black/70 p-4 transition hover:bg-white"
              onClick={() => setOpenVideo(!openVideo)}
            >
              <Play className="h-8 w-8 text-white group-hover:text-black" />
            </button>
            <h5 className="text-3xl font-medium uppercase">Start Video</h5>
          </div>
          <p className="font-inter text-lg font-medium leading-8 lg:text-2xl">
            {formatDate(EventTime)}
          </p>
        </div>
      </div>
    </section>
  );
}
