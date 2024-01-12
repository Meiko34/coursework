import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Order from "./Order";
// import Catalog from "./Catalog";
// import { Router, Route } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";
import { Catalog } from "./Catalog/Catalog";
import { Home } from "./Home";
import { AboutUs } from "./AboutUs";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)} P</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div className="wrapper">
        <span className="logo">Tea Garden</span>
        <FaShoppingBasket
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        <ul className="nav">
          <li>
            <Link className="hyg" to={"/home"}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/aboutus">О нас</Link>
          </li>
          <li>Кабинет</li>
        </ul>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        {cartOpen && (
          <div className="shop-cart">
            <div className="click">
              <button className="order_goods"> Заказать</button>

              <MdDeleteForever className="delete-icon" />
            </div>

            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
    </header>
  );
}
