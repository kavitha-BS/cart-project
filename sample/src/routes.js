import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Login from "./pages/user/login";
  import DashBoard from "./pages/user/dashboard";
  import App from "./App";
  import Cart from "./pages/user/cart";

  const routes = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        children:
        [
            {
            path: "",
            element: <Login/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashBoard/>
    },
    {
        path: "/cart",
        element: <Cart/>
    }

  ]);

  export default routes;