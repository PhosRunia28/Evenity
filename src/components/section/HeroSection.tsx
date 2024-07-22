import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="container pb-40 font-inter">
      <div className="relative flex w-full flex-col gap-8 rounded-[1.2rem] px-5 pb-12 pt-8 text-white sm:px-8 md:px-12 md:pb-20 md:pt-16 lg:rounded-[2.35rem] lg:pt-24">
        <h5 className="flex items-center gap-4 text-sm font-medium md:text-lg">
          Welcome to our ticketing website! <Ticket />
        </h5>
        <h3 className="w-full max-w-2xl text-4xl font-black leading-snug sm:text-5xl sm:leading-snug md:text-6xl lg:text-7xl lg:leading-none">
          Where Your{" "}
          <span className="bg-gradient-to-r from-linearText1 from-0% via-linearText2 via-60% to-linearText3 to-100% bg-clip-text text-transparent">
            Event
          </span>{" "}
          Dreams Come to Life!
        </h3>
        <p className="w-full max-w-lg text-sm leading-7 lg:max-w-md">
          Not only can you purchase tickets to the hottest events in town, but
          you can also create your own custom tickets with our easy-to-use
          platform. Say goodbye to generic tickets and hello to personalized and
          professional-looking ones that will make your event stand out from the
          rest.
        </p>
        {/* hero image */}
        <img
          src="./heroSection.png"
          alt="hero section image"
          className="absolute inset-0 -z-20 h-full w-full bg-cover bg-center"
        />
        {/* bacgrounde gradient */}
        <div className="absolute inset-0 -z-10 h-full w-full rounded-[1.2rem] bg-gradient-to-bl from-linearHero2/50 via-linearHero3/50 via-[26%] to-linearHero4/20 to-100% lg:rounded-[2.35rem]"></div>
        {/* hero button */}
        <div className="absolute -bottom-8 left-1/2 w-full max-w-fit -translate-x-1/2 text-white">
          <a href="#">
            <Button className="rounded-xl border border-primary px-12 py-8 font-rubik text-base font-medium hover:bg-white hover:text-primary">
              Explore Event
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
