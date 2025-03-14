import { AnimatePresence, motion } from "motion/react";
import { useLoaderData, useOutlet } from "react-router";
import { useState } from "react";
import PlusIcon from "../../assets/svgs/PlusIcon.jsx";
import BulbIcon from "../../assets/svgs/BulbIcon.jsx";
import ShareIcon from "../../assets/svgs/ShareIcon.jsx";
import TwitchIcon from "../../assets/svgs/TwitchIcon.jsx";
import InstagramIcon from "../../assets/svgs/InstagramIcon.jsx";
import XIcon from "../../assets/svgs/XIcon.jsx";
import { cn } from "../../utils/cn.js";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    position: "fixed",
    width: "100%",
  },
};

const socialMediaIcons = {
  twitch: <TwitchIcon className="size-4" />,
  instagram: <InstagramIcon className="size-4" />,
  x: <XIcon className="size-4" />,
};

function User() {
  return (
    <AnimatePresence>
      <UserInfo />
      <motion.div
        className="mx-auto grid w-full max-w-[1420px]"
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

function UserInfo() {
  const userData = useLoaderData();
  return (
    <div className="mx-auto w-full max-w-[1420px] px-4 py-2 md:px-8">
      {/*bg image*/}
      <div className="skeleton relative h-32 md:h-48 lg:h-56 xl:h-64">
        <img
          className="rounded-box h-full w-full object-cover object-center"
          src={userData.bgImage}
          alt="user background image"
        />
        <div className="skeleton absolute -bottom-12 left-4 size-24 overflow-hidden rounded-full sm:left-8 md:-bottom-16 md:size-32">
          <img
            className="h-full w-full object-cover object-center"
            src={userData.avatarImage}
            alt="user avatar image"
          />
        </div>
      </div>
      {/*buttons*/}
      <div className="flex h-16 items-center justify-end sm:h-18">
        <UserBtns className="hidden sm:flex" />
      </div>

      {/*username, desc, social links*/}
      <div className="text-base-content/60 text-sm">
        <h2 className="text-base-content text-3xl font-semibold">{userData.username}</h2>
        <p className="">@{userData.id}</p>
        <p className="my-4">{userData.desc}</p>
        <ul className="flex gap-6">
          {userData.socialMedia.map((link) => (
            <li key={link.platform}>
              <a
                className="hover:text-base-content transition-colors"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialMediaIcons[link.platform]}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <UserBtns className="my-4 flex sm:hidden" />
    </div>
  );
}

function UserBtns({ className }) {
  return (
    <div className={cn("flex gap-2", className)}>
      <button className="btn btn-primary px-2 text-sm sm:px-4 sm:text-base">
        <PlusIcon className="size-4" />
        <span>Follow</span>
      </button>
      <button className="btn btn-outline btn-accent px-2 text-sm sm:px-4 sm:text-base">
        <BulbIcon className="size-4" />
        <span>Suggest Gift</span>
      </button>
      <ShareButton />
    </div>
  );
}

function ShareButton() {
  async function handleClick() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("URL copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy URL: ", err);
      alert("Failed to copy URL. Please try again.");
    }
  }

  return (
    <button className="btn btn-outline p-2" onClick={handleClick}>
      <ShareIcon className="size-4" />
    </button>
  );
}
