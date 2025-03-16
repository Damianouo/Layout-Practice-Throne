import { NavLink, useLoaderData } from "react-router";

function UserNav() {
  const userData = useLoaderData();
  const wishlistItemsTotalNum = Object.values(userData.wishlist).reduce((acc, item) => acc + item.length, 0);
  const collectionsTotalNum = Object.keys(userData.wishlist).length;
  const gifterTotalNum = 12;
  return (
    <nav role="tablist" className="tabs border-base-content/10 tabs-border mt-5 border-b">
      <NavLink
        to=""
        end
        role="tab"
        className={({ isActive }) =>
          (isActive ? "tab-active" : "") +
          " tab flex items-center gap-2 px-2 text-xs font-semibold sm:text-base"
        }
      >
        <span>Wishlist</span>
        <span className="badge badge-soft badge-primary px-1 text-xs sm:px-3 sm:text-sm">
          {wishlistItemsTotalNum}
        </span>
      </NavLink>
      <NavLink
        to="collections"
        role="tab"
        className={({ isActive }) =>
          (isActive ? "tab-active" : "") +
          " tab flex items-center gap-2 px-2 text-xs font-semibold sm:text-base"
        }
      >
        <span>Collections</span>
        <span className="badge badge-soft badge-secondary px-1 text-xs sm:px-3 sm:text-sm">
          {collectionsTotalNum}
        </span>
      </NavLink>
      <NavLink
        to="gifters"
        role="tab"
        className={({ isActive }) =>
          (isActive ? "tab-active" : "") +
          " tab flex items-center gap-2 px-2 text-xs font-semibold sm:text-base"
        }
      >
        <span>Gifters</span>
        <span className="badge badge-soft badge-accent px-1 text-xs sm:px-3 sm:text-sm">
          {gifterTotalNum}
        </span>
      </NavLink>
    </nav>
  );
}

export default UserNav;
