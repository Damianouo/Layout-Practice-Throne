import { AnimatePresence, motion } from "motion/react";
import { useOutlet } from "react-router";
import { useState } from "react";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    position: "fixed",
    width: "100%",
  },
};

function User() {
  return (
    <AnimatePresence>
      <motion.div
        className="grid"
        key={location.pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <StableOutlet />
      </motion.div>
    </AnimatePresence>
  );
}

export default User;

function StableOutlet() {
  const o = useOutlet();
  const [outlet] = useState(o);
  return outlet;
}
