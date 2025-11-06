import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/Error/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "home", element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "cart", element: <Cart /> },
        ],
        errorElement: <ErrorPage />,
    },
];

export default routes;
