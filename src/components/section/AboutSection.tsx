import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="container pb-32 font-rubik">
      <div className="flex flex-col-reverse gap-8 md:gap-12 lg:flex-row lg:items-center lg:gap-8">
        <div className="mx-auto flex w-full max-w-xl flex-col lg:mx-0 lg:w-fit xl:w-full">
          <h3 className="text-4xl font-semibold md:text-5xl lg:text-[3.4rem]">
            About Evenity
          </h3>
          <p
            className="w-full max-w-sm pb-10 pt-6 font-inter md:max-w-md md:pb-12 md:pt-8 md:text-lg"
            style={{ lineHeight: 1.8 }}
          >
            Evenity is event management expertise that helps and facilitates
            Event Planners in achieving the goal of carrying out an event.
          </p>
          <Button className="w-full max-w-fit px-10 py-6 font-medium">
            More About Us
          </Button>
        </div>
        <div className="relative flex w-full flex-col gap-5 sm:mx-auto sm:max-w-fit lg:mx-0 lg:ml-auto lg:flex-row-reverse lg:items-center xl:flex-col xl:items-start">
          <img
            src="./about1.png"
            alt="about image 1"
            className="mx-auto w-full max-w-xs rounded-lg bg-cover bg-center sm:mx-0 xl:max-w-[16rem]"
          />
          <img
            src="./about2.png"
            alt="about image 2"
            className="mx-auto w-full max-w-xs rounded-lg bg-cover bg-center sm:mx-0 sm:-mt-48 sm:ml-60 lg:hidden xl:block xl:max-w-[16rem]"
          />
          <div className="bottom-12 left-4 mx-auto w-full max-w-fit space-y-2 rounded-[1.5rem] border border-gray-500/40 p-5 text-center shadow-lg sm:absolute lg:static xl:absolute xl:bottom-4">
            <h4 className="text-5xl font-medium">46+</h4>
            <p className="text-sm font-medium text-gray-500">
              Events In The Last Year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
