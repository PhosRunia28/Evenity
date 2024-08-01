import { motion } from "framer-motion";

export default function TitleSection({ title }: { title: string }) {
  return (
    <motion.h3
      className="w-full pb-10 text-center font-fredoka text-5xl font-semibold uppercase md:pb-14 md:text-6xl"
      style={{ lineHeight: 1.5 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-50px", once: true }}
    >
      {title}
    </motion.h3>
  );
}
