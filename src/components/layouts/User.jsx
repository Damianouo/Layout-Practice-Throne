import { AnimatePresence, motion } from "motion/react";
import { useLocation, useOutlet } from "react-router";
import { useState } from "react";
import UserInfo from "../User/UserInfo.jsx";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    position: "absolute",
    width: "100%",
    inset: 0,
  },
};

function User() {
  const location = useLocation();
  return (
    <>
      <UserInfo />
      <div className="relative mx-auto w-full max-w-[1420px]">
        <AnimatePresence>
          <motion.div
            className="grid p-4 sm:p-8"
            key={location.pathname}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <StableOutlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default User;

function StableOutlet() {
  const o = useOutlet();
  const [outlet] = useState(o);
  return outlet;
}
