import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';

const Menu = () => {
  const [list, setList] = useState(items);

  //let filteredItems = items.filter((newList) => newList.category === list);
  //console.log(filteredItems);

  function filterMenus(clickedMenu) {
    if (clickedMenu === 'all') {
      setList(items);
    } else {
      setList(items.filter((newList) => newList.category === clickedMenu));
    }
  }

  let categoryMenuArr = [];

  items.map((catItem) => {
    categoryMenuArr.push(catItem.category);
  });
  //  The following filter method will return the value only one item if it's repeated repeatedly.
  //  The first argument will return al the values in the array one by one
  //  The second argument will return the index
  //  The third argument will return the original array itself
  //  Inside the function we used indexOf to compare the currentVal with in the array by indexOf vale
  let categoryMenus = categoryMenuArr.filter(
    (singleValue, arrayIndex, arrayItself) => {
      //console.log(arrayItself);
      //console.log(arrayItself.indexOf(singleValue), singleValue);

      return arrayItself.indexOf(singleValue) === arrayIndex;
    }
  );

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="filter-btn"
              onClick={() => filterMenus('all')}
            >
              all
            </button>
            {categoryMenus.map((menu) => {
              return (
                <button
                  type="button"
                  className="filter-btn"
                  onClick={() => filterMenus(menu)}
                >
                  {menu}
                </button>
              );
            })}
          </div>
          <div className="section-center">
            {list.map((item) => {
              return <Categories key={`id-${item.id}`} {...item} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Menu;
