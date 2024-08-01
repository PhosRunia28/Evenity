import { motion } from "framer-motion";

type Props = {
  partner: string;
  index: number;
};
export default function ClientBox({ partner, index }: Props) {
  const clientBoxVariants = {
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
      className="flex w-full max-w-[17rem] items-center justify-center rounded-2xl border border-black/20 py-14 shadow-xl"
      whileInView="visible"
      initial="hidden"
      viewport={{ margin: "-300px", once: true }}
      variants={clientBoxVariants}
      transition={{ duration: 1 }}
    >
      <img
        src={partner}
        alt={`partner_${index}`}
        className="w-full max-w-[10rem] bg-cover bg-center"
      />
    </motion.div>
  );
}
