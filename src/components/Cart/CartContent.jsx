import { useRouteLoaderData } from "react-router";
import useCartCtx from "../../hooks/useCartCtx.jsx";
import { calcTotalPrice } from "../../utils/calcPriceInCurrency.js";
import BoxIcon from "../../assets/svgs/BoxIcon.jsx";
import ArrowRight from "../../assets/svgs/ArrowRight.jsx";
import ChangeCurrency from "./ChangeCurrency.jsx";
import CartItems from "./CartItems.jsx";
import EmptyCartSign from "./EmptyCartSign.jsx";

function CartContent() {
  const data = useRouteLoaderData("user");
  const { cart } = useCartCtx();
  return (
    <div className="bg-base-100 text-base-content min-h-full w-80 px-6 py-8 text-sm md:w-120 md:px-8 md:text-base">
      {!data ? (
        <p>Go to user's page to view the wishlist.</p>
      ) : (
        <>
          <div>
            {/*header*/}
            <div>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold md:text-3xl">Gift Cart</h2>
                <span className="badge badge-primary size-6 p-0">{cart.items.length}</span>
                <span>{cart.currency}</span>
                <ChangeCurrency />
              </div>
              <p className="text-base-content/80 my-4 text-left">Send gifts to {data.username}</p>
            </div>
            {cart.items.length > 0 ? <CartItems /> : <EmptyCartSign />}
          </div>

          <div className="divider"></div>
          <div>
            <div className="flex items-center justify-between text-xl font-semibold">
              <h3 className="">Subtotal : </h3>
              <span>${calcTotalPrice(cart.items, cart.currency)}</span>
            </div>
            <div className="my-4 flex items-center gap-2">
              <BoxIcon />
              <p>Shipping + taxes calculated at checkout</p>
            </div>
            <button className="btn btn-block btn-primary h-auto py-3" disabled={cart.items.length < 1}>
              <span className="text-xl">Checkout</span>
              <ArrowRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartContent;
