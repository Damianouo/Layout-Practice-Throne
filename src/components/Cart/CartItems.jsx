import useCartCtx from "../../hooks/useCartCtx.jsx";
import { calcPriceInCurrency } from "../../utils/calcPriceInCurrency.js";
import MinusIcon from "../../assets/svgs/MinusIcon.jsx";
import PlusIcon from "../../assets/svgs/PlusIcon.jsx";

function CartItems() {
  const { cart, handler } = useCartCtx();

  return (
    <ul className="divide-base-content/10 divide-y text-sm">
      {cart.items.map((item) => (
        <li className="flex flex-row items-center gap-4 py-4 md:gap-8" key={item.id}>
          {/*item image*/}
          <div className="skeleton size-20 md:size-25">
            <img className="h-full w-full object-cover object-center" src={item.img} alt="item image" />
          </div>
          {/*item info*/}
          <div className="flex-1">
            <h3 className="line-clamp-1 text-lg">{item.title}</h3>
            <div className="text-base-content/70 flex items-center gap-2">
              <span className="line-clamp-1 flex-1">{item.brand}</span>
              <span>${calcPriceInCurrency(item.price, cart.currency)}</span>
            </div>
            <div className="my-2 flex items-center justify-between">
              {/*item count buttons*/}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handler.decreaseItemCount(item.id)}
                  className="btn btn-accent btn-soft h-auto p-1"
                >
                  <MinusIcon className="size-4" />
                </button>
                <span>{item.count}</span>
                <button
                  onClick={() => handler.increaseItemCount(item.id)}
                  className="btn btn-secondary btn-soft h-auto p-1"
                >
                  <PlusIcon className="size-4" />
                </button>
              </div>

              <span className="text-lg">${calcPriceInCurrency(item.price, cart.currency) * item.count}</span>
            </div>
            {/*remove button*/}
            <div className="flex justify-between">
              <button
                onClick={() => handler.removeFromCart(item.id)}
                className="link link-primary link-hover"
              >
                Remove
              </button>
              <span className="text-base-content/70">Gift</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CartItems;
