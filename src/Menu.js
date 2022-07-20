import React from 'react';
import Categories from './Categories';

const Menu = () => {
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button type="button" className="filter-btn">
              all
            </button>
            <button type="button" className="filter-btn">
              breakfast
            </button>
            <button type="button" className="filter-btn">
              lunch
            </button>
            <button type="button" className="filter-btn">
              shakes
            </button>
          </div>
          <div className="section-center">
            <Categories />
          </div>
        </section>
      </main>
    </>
  );
};

export default Menu;
