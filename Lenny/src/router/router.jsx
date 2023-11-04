import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/home";
import Error from "../pages/Error/error";
import Products from "../pages/Products/products";
import ProductDetail from "../pages/ProductDetails/productDetails";
import ShoppingCart from "../pages/Shopping/shopping"



const routes = createBrowserRouter([{
    path: "/",
    element: <App />,
    errorElement:  <Error />,
    children: [
        {
            element: <Home />,
            index: true
        },
        {
            path: "/products",
            element: <Products />
        },
        {
            path: "/products/:id",
            element: <ProductDetail />
        },
        {
            path: "/shopping-cart",
            element: <ShoppingCart />
        },
        {
            path: "/category/:id",
            element: <Products />
        }

    ],
}

])

export default routes;