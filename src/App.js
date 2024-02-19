import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./Pages/RootPage";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import CategoryPage, { loader } from "./Pages/CategoryPage";
import PaymentPage from "./Pages/PaymentPage";
import ModalContext from "./Components/Context/modal-context";
import { useState } from "react";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: loader,
        },
        {
          path: `:categoryName`,
          element: <CategoryPage />,
        },
        {
          path: ":categoryName/:productId",
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    },
  ]);
  return (
    <ModalContext.Provider
      value={{
        closeModalCart: () => {},
        openModalCart: () => {},
      }}
    >
      <RouterProvider router={routes} />
    </ModalContext.Provider>
  );
}

export default App;
