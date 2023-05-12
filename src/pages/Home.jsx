import React, { useEffect, useState } from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import axios from 'axios';
import { PizzaBlock } from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';
import Pagination from '../components/Pagination';

export const Home = ({ searchValue }) => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности ↑',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoaded(false);
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    axios
      .get(
        `https://6449408ab88a78a8f0024387.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoaded(true);
      });
    window.scrollTo(0, 0);
    console.log(sortBy);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories onClickCategory={(i) => setCategoryId(i)} value={categoryId} />
        <Sort onClickSort={(i) => setSortType(i)} value={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((pizza, index) => <PizzaBlock key={index} {...pizza} />)
          : [...new Array(6)].map((arr, index) => <Skeleton key={index} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};
