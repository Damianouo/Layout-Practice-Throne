import { Link, NavLink } from "react-router";
import ButterflyIcon from "../../assets/svgs/ButterflyIcon.jsx";
import Cart from "../Cart/Cart.jsx";
import ThemeController from "../ThemeController.jsx";
import MenuIcon from "../../assets/svgs/MenuIcon.jsx";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar bg-base-100/70 border-base-content/10 flex h-18 items-center justify-between border-b px-3 py-3 backdrop-blur sm:px-6"
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
    <div className="flex items-center gap-2 sm:gap-4">
      <NavLink to="/gracelyra">grace</NavLink>
      <Link className="btn btn-ghost hidden md:inline-flex" to="/login">
        Login
      </Link>
      <Link className="btn btn-outline hidden md:inline-flex" to="/login">
        Singup
      </Link>
      <ThemeController />
      <Cart />
      <NavMenu />
    </div>
  );
}

function NavMenu() {
  return (
    <div className="drawer drawer-end md:hidden">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost h-auto rounded-full p-1">
          <MenuIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="bg-base-100 text-base-content min-h-full w-80 space-y-2 px-6 py-4">
          {/* Sidebar content here */}
          <header className="mb-6 text-2xl font-semibold">Menu</header>
          <Link className="btn btn-primary btn-block" to="/login">
            Login
          </Link>
          <Link className="btn btn-soft btn-secondary btn-block" to="/login">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
