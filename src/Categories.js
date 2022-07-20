import React from 'react';

const Categories = () => {
  return (
    <>
      <article className="menu-item">
        <img
          src="./images/item-1.jpeg"
          alt="buttermilk pancakes"
          className="photo"
        />
        <div className="item-info">
          <header>
            <h4>buttermilk pancakes</h4>
            <h4 className="price">$15</h4>
          </header>
          <p className="item-text">
            I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
            freegan copper mug whatever cold-pressed
          </p>
        </div>
      </article>
      <article className="menu-item">
        <img
          src="./images/item-2.jpeg"
          alt="buttermilk pancakes"
          className="photo"
        />
        <div className="item-info">
          <header>
            <h4>Diner Double</h4>
            <h4 className="price">$19</h4>
          </header>
          <p className="item-text">
            vaporware iPhone mumblecore selvage raw denim slow-carb leggings
            gochujang helvetica man braid jianbing. Marfa thundercats
          </p>
        </div>
      </article>
    </>
  );
};

export default Categories;
