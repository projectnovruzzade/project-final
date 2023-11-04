import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import routes from "./router/router.jsx"
import FilterContextProvider from './context/filterContext.jsx';
import ShoppingContextProvider from './context/shoppingContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShoppingContextProvider>
    <FilterContextProvider>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </FilterContextProvider>
  </ShoppingContextProvider>
)
