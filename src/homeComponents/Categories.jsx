import React, { useEffect, useRef } from "react";
import "../styles/homeComponents/Categories.css";

const Categories = () => {
  const categoriesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const items = entry.target.querySelectorAll(".category-item");

          if (entry.isIntersecting) {
            items.forEach((item, index) => {
              item.style.animationDelay = `${index * 0.1}s`; 
              item.classList.add("fly-in");
            });
          } else {
            items.forEach((item) => {
              item.classList.remove("fly-in");
            });
          }
        });
      },
      { threshold: 0.2 } 
    );

    if (categoriesRef.current) {
      observer.observe(categoriesRef.current);
    }

    return () => {
      if (categoriesRef.current) {
        observer.unobserve(categoriesRef.current);
      }
    };
  }, []);

  return (
    <div className="categories" ref={categoriesRef}>
      <h2>Categories</h2>
      <div className="categories-menu">
        <div className="category-item">
          <img src="/assets/icons/round-table.png" alt="Table" className="icon" />
          <p>Tables</p>
        </div>
        <div className="category-item">
          <img src="/assets/icons/office-chair.png" alt="Chair" className="icon" />
          <p>Chairs</p>
        </div>
        <div className="category-item">
          <img src="/assets/icons/laptop.png" alt="Laptop Stand" className="icon" />
          <p>Laptop Stands</p>
        </div>
        <div className="category-item">
          <img src="/assets/icons/computer.png" alt="Monitor Stand" className="icon" />
          <p>Monitor Stands</p>
        </div>
        <div className="category-item">
          <img src="/assets/icons/cabinet.png" alt="Cabinet" className="icon" />
          <p>Cabinets</p>
        </div>
        <div className="category-item">
          <img src="/assets/icons/mouse-pad.png" alt="Mouse Pad" className="icon" />
          <p>Mouse Pads</p>
        </div>
        <div className="category-item">
          <img src="/assets/icons/study-lamp.png" alt="Study Lamp" className="icon" />
          <p>Study Lamps</p>
        </div>
        <div className="category-item">
          <img src="/assets/icons/flower-pot.png" alt="Desk Plant" className="icon" />
          <p>Desk Plants</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
