import ShoppingBagIcon from "../../assets/svgs/ShoppingBagIcon.jsx";

function EmptyCartSign() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="bg-primary flex size-16 items-center justify-center rounded-lg">
        <ShoppingBagIcon className="text-primary-content size-10" />
      </div>
      <h3 className="text-xl font-semibold">Empty Cart</h3>
      <span>Your gift cart is empty.</span>
    </div>
  );
}

export default EmptyCartSign;
