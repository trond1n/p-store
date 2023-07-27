import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./scss/app.scss";
import Loadable from "react-loadable";

import MainLayout from "./layouts/MainLayout";

const Cart = Loadable({
  loader: () => import(/*webpackChunkName:"Cart"*/ "./pages/Cart"),
  loading: () => <div>Загрузка корзины</div>,
});
const NotFound = Loadable({
  loader: () => import(/*webpackChunkName:"NotFound"*/ "./pages/NotFound"),
  loading: () => <div>Загрузка корзины</div>,
});
const FullPizza = Loadable({
  loader: () => import(/*webpackChunkName:"FullPizza"*/ "./pages/FullPizza"),
  loading: () => <div>Загрузка корзины</div>,
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
