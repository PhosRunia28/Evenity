import { Partners } from "@/data/Partners";
import { motion } from "framer-motion";
import ClientBox from "../common/ClientBox";
import { Button } from "../ui/button";
motion;
export default function PartnerSection() {
  return (
    <section className="container pb-32 font-rubik">
      <motion.h3
        className="w-full pb-10 text-center text-5xl font-medium uppercase md:pb-14 md:text-6xl"
        style={{ lineHeight: 1.5 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-50px", once: true }}
      >
        Client Partner
      </motion.h3>
      <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Partners.map((partner, index) => (
          <ClientBox key={index} partner={partner} index={index} />
        ))}
      </div>
      <div className="mx-auto w-full max-w-fit pt-20">
        <a href="#">
          <Button className="rounded-xl border border-primary px-16 py-10 font-rubik text-lg font-medium hover:bg-white hover:text-primary">
            All Client Partner
          </Button>
        </a>
      </div>
    </section>
  );
}
