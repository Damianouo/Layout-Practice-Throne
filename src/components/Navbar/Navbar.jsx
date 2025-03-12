import { Link, NavLink } from "react-router";
import ButterflyIcon from "../../assets/svgs/ButterflyIcon.jsx";
import Cart from "../Cart/Cart.jsx";
import ThemeController from "../ThemeController.jsx";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar bg-base-100/70 border-base-content/10 flex h-18 items-center justify-between border-b px-6 py-3 backdrop-blur"
    >
      <Link className="flex items-center gap-2" to="/">
        <ButterflyIcon />
        <h1 className="text-2xl font-bold">THRONE</h1>
      </Link>
      <NavBtns />
    </nav>
  );
}

export default Navbar;

function NavBtns() {
  return (
    <div className="flex items-center gap-4">
      <NavLink to="/gracelyra">grace</NavLink>
      <ThemeController />
      <Link className="btn btn-ghost" to="/login">
        Login
      </Link>
      <Link className="btn btn-outline" to="/login">
        Singup
      </Link>
      <Cart />
    </div>
  );
}
