import React from 'react';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((i, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};
