import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import RootLayout from "./Navigations/RootLayout";
import ErrorCom from "./components/ErrorCom";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorCom />,

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/aboutus", element: <Aboutus /> },
      { path: "/contactus", element: <Contactus /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productid", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
