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

  //  The following filter method will return the value only one item if it's repeated repeatedly.
  //  The first argument will return al the values in the array one by one
  //  The second argument will return the index
  //  The third argument will return the original array itself
  //  Inside the function we used indexOf to compare the currentVal with in the array by indexOf vale
  //  This is old method for filter
  /*let categoryMenuArr = [];

   items.map((catItem) => {
     categoryMenuArr.push(catItem.category);
   });
  let categoryMenus = categoryMenuArr.filter(
    (singleValue, arrayIndex, arrayItself) => {
      //console.log(arrayItself);
      //console.log(arrayItself.indexOf(singleValue), singleValue);

      return arrayItself.indexOf(singleValue) === arrayIndex;
    }
  );*/
  //  Below code is for getting the unique Menu items
  //  We can also use set() dataStructure for getting unique values, and it is the best approach. we can also append "ALL" as a category menu by the help of Array spread operator, and it will return us the unique values with all added in the list

  /* 
  let categoryMenus = ['all', ...new Set(items.map((item) => item.category))]
  */
  const categoryMenus = ['all', ...new Set(items.map((item) => item.category))];

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
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
