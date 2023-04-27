import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="pizza-not-found">
      <h1>УПС...</h1>
      <p>Кажется,такой страницы нет</p>
      <span role="img" aria-label="pizza">
        🍕
      </span>
      <Link to="/">Вернуться за пиццей</Link>
    </div>
  );
};

export default NotFound;
