import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import Root from "./components/layouts/Root.jsx";
import Error from "./pages/Error.jsx";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import User from "./components/layouts/User.jsx";
import Login from "./pages/Login.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Collections from "./pages/Collections.jsx";
import Gifters from "./pages/Gifters.jsx";
import { userLoader } from "./loaders/userLoader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: ":userId",
        id: "user",
        loader: userLoader,
        element: <User />,
        children: [
          { index: true, element: <Wishlist /> },
          { path: "collections", element: <Collections /> },
          { path: "gifters", element: <Gifters /> },
        ],
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
