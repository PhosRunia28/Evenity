import CardVenue from "@/components/common/CardVenue";
import TitleExplore from "@/components/common/TitleExplore";
export default function ExploreSection() {
  return (
    <section className="container pb-32 font-rubik">
      <TitleExplore mobile />
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
        {/* Venue 2 */}
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center lg:h-full lg:w-full lg:max-w-fit lg:flex-col lg:items-start lg:pb-8">
          <TitleExplore />
          <img
            src="./explore1.png"
            alt="explore image 1"
            className="mx-auto w-full max-w-md bg-cover bg-center md:mx-0 lg:max-w-sm"
          />
          <CardVenue
            subtitle="VENUE : 2"
            title="KEMPINSKI HOTEL INDONESIA"
            location="Jakarta, Indonesia"
          />
        </div>
        {/* Venue 1 */}
        <div className="relative flex flex-col gap-8 md:flex-row-reverse md:items-center lg:mt-auto lg:h-full lg:w-full lg:max-w-fit lg:flex-col lg:items-start">
          <img
            src="./explore2.png"
            alt="explore image 2"
            className="mx-auto w-full max-w-md bg-cover bg-center md:mx-0 lg:max-w-sm"
          />
          <CardVenue
            subtitle="VENUE : 1"
            title="REGAELE CONVENTION HALL"
            location="North Sumatera, Indonesia"
            side="left"
          />
          <p
            className="mx-auto hidden w-full max-w-sm text-left font-inter text-lg lg:inline"
            style={{ lineHeight: 1.8 }}
          >
            Explore new ideas at astoundingly beautiful venues. Attend Tech
            Startup Conferences and meet new brilliant minds from all over the
            world.
          </p>
        </div>
        <p
          className="mx-auto w-full max-w-md text-center font-inter text-lg lg:hidden"
          style={{ lineHeight: 1.8 }}
        >
          Explore new ideas at astoundingly beautiful venues. Attend Tech
          Startup Conferences and meet new brilliant minds from all over the
          world.
        </p>
      </div>
    </section>
  );
}
