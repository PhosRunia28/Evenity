import { motion } from "framer-motion";

type Props = {
  date: number;
  desc: string;
  index: number;
};
export default function DateBox({ date, desc, index }: Props) {
  const dateBoxVariants = {
    hidden: {
      opacity: 0,
      y: "-100px",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    },
  };
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      viewport={{ margin: "-300px", once: true }}
      variants={dateBoxVariants}
      transition={{ duration: 1 }}
      className="flex w-full max-w-full flex-col gap-3 rounded-2xl border border-black/10 py-7 text-center shadow-xl"
    >
      <h4 className="text-7xl font-extrabold leading-none">{date}</h4>
      <p className="text-2xl font-extrabold uppercase leading-8 text-gray-500">
        {desc}
      </p>
    </motion.div>
  );
}
