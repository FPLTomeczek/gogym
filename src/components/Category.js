import React from "react";

const Category = ({ title, number }) => {
  return (
    <div className="category">
      <div className="category-start">
        <i className="fa-solid fa-chevron-right" />
        <span>&nbsp;{title}</span>
      </div>
      <span>{`(${number})`}</span>
    </div>
  );
};

export default Category;
