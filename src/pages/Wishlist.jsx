import { useRouteLoaderData } from "react-router";
import CartIcon from "../assets/svgs/CartIcon.jsx";

function Wishlist() {
  const userData = useRouteLoaderData("user");
  const wishlistItems = Object.values(userData.wishlist).reduce((acc, wishlist) => [...acc, ...wishlist]);
  return (
    <div className="">
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] sm:gap-6">
        {wishlistItems.map((item) => (
          <li
            className="border-base-content/10 shadow-base-content/10 overflow-hidden rounded-lg border shadow"
            key={item.id}
          >
            <div className="skeleton aspect-square">
              <img className="h-full w-full object-cover object-center" src={item.img} alt="item image" />
            </div>
            <div className="space-y-1 p-3">
              <p className="line-clamp-1 font-semibold">{item.title}</p>
              <p className="text-base-content/50 line-clamp-1 text-sm">{item.brand}</p>
              <p>${item.price}</p>
              <button className="btn btn-block btn-primary mt-4 px-2 text-xs sm:px-4 sm:text-base">
                <CartIcon className="hidden sm:block" />
                <span className="">Add to Cart</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
