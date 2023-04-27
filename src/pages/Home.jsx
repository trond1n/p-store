import React, { useEffect, useState } from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import axios from 'axios';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get('https://6449408ab88a78a8f0024387.mockapi.io/items').then((res) => {
      setPizzas(res.data);
      setIsLoaded(true);
    });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((pizza, index) => <PizzaBlock key={index} {...pizza} />)
          : [...new Array(6)].map(() => <Skeleton />)}
      </div>
    </>
  );
};
