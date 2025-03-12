import CartIcon from "../../assets/svgs/CartIcon.jsx";
import CartContent from "./CartContent.jsx";
import useCartCtx from "../../hooks/useCartCtx.jsx";

function Cart() {
  const { cart } = useCartCtx();
  return (
    <div className="drawer drawer-end">
      <input id="cartDrawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="indicator">
          <span className="indicator-item badge badge-primary top-1 right-1 size-6 p-0">
            {cart.items.length}
          </span>
          <label
            htmlFor="cartDrawer"
            className="drawer-button btn btn-ghost aspect-square h-auto rounded-full p-1"
          >
            <CartIcon />
          </label>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="cartDrawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <CartContent />
      </div>
    </div>
  );
}

export default Cart;
