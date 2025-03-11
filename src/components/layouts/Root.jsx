import Navbar from "../Navbar/Navbar.jsx";
import { Outlet, useLocation } from "react-router";
import Footer from "../Footer.jsx";

function Root() {
  const location = useLocation();

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="grid">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
