import { useRouteLoaderData } from "react-router";
import { cn } from "../utils/cn.js";

function Collections() {
  const userData = useRouteLoaderData("user");
  const collections = Object.keys(userData.wishlist);
  const collectionsStyles = {
    "Dress Me Up": { bg: "bg-rose-300", icon: "💕" },
    "Stream Stuff": { bg: "bg-indigo-300", icon: "📷" },
    "Stream Content": { bg: "bg-teal-300", icon: "🍿" },
    Shoes: { bg: "bg-sky-300", icon: "💍" },
    "Self Care": { bg: "bg-violet-300", icon: "💅" },
  };
  return (
    <div className="">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(328px,1fr))] gap-6">
        {collections.map((collection) => (
          <li key={collection}>
            <div
              className={cn(
                "bg bg-fu flex aspect-[4/3] items-center justify-center rounded-lg text-6xl",
                collectionsStyles[collection].bg,
              )}
            >
              {collectionsStyles[collection].icon}
            </div>
            <p className="mt-4">{collection}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Collections;
