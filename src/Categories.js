import React from 'react';

const Categories = ({ id, title, category, price, img, desc }) => {
  return (
    <>
      <article className="menu-item" id={category + id}>
        <img src={img} alt={title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">{price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    </>
  );
};

export default Categories;
