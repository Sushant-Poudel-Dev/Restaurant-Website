import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main/main.scss";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path='/menu'
              element={<MenuPage />}
            />
            <Route
              path='/cart'
              element={<CartPage />}
            />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
