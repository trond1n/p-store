import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock';
import { Sort } from './components/Sort';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios.get('https://6449408ab88a78a8f0024387.mockapi.io/items').then((res) => {
      setPizzas(res.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {/* <PizzaBlock title="пицца" price="300р" /> */}
              {pizzas.map((pizza, index) => (
                <PizzaBlock key={index} {...pizza} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
