import { motion } from "framer-motion";
export default function SectionTitle({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-4xl font-bold text-[#FFF] text-center my-4 py-4"
      id={id}
    >
      {children}
    </motion.h1>
  );
}
