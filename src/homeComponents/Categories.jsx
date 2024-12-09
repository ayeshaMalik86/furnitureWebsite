import React from "react";
import "../styles/homeComponents/Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories-menu">
        <div className="category-item">
          <img src="/assets/icons/round-table.png" alt="Table" className="icon"/>
          <p>Tables</p>
        </div>
        <div className="category-item">
        <img src="/assets/icons/office-chair.png" alt="Table" className="icon"/>
          <p>Chairs</p>
        </div>
        <div className="category-item">
        <img src="/assets/icons/laptop.png" alt="Table" className="icon"/>
          <p>Laptop Stands</p>
        </div>
        <div className="category-item">
        <img src="/assets/icons/computer.png" alt="Table" className="icon"/>
          <p>Monitor Stands</p>
        </div>
        <div className="category-item">
        <img src="/assets/icons/cabinet.png" alt="Table" className="icon"/>
          <p>Cabinets</p>
        </div>
        <div className="category-item">
        <img src="/assets/icons/mouse-pad.png" alt="Table" className="icon"/>
          <p>Mouse Pads</p>
        </div>
        <div className="category-item">
        <img src="/assets/icons/study-lamp.png" alt="Table" className="icon"/>
          <p>Study Lamps</p>
        </div>
        <div className="category-item">
        <img src="/assets/icons/flower-pot.png" alt="Table" className="icon"/>
          <p>Desk Plants</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
