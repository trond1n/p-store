import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="pizza-not-found">
      <h1>Таак...</h1>
      <p>Кажется,в вашей корзине пусто</p>
      <span role="img" aria-label="Shopping Cart">
        🛒
      </span>
      <Link to="/">Вернуться за пиццей</Link>
    </div>
  );
};

export default Cart;
