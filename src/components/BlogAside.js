import React from "react";
import "../css/BlogPage/BlogAside.css";
import Category from "./Category";
import RecentPosts from "./RecentPosts";
import PopularTags from "./PopularTags";
import BlogAdvertise from "./BlogAdvertise";

const BlogAside = () => {
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search..." id="search-blog-input" />
        <button id="search-blog-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="categories-container">
        <h3>Categories</h3>
        <div className="underline"></div>
        <div className="categories">
          <Category title="Body Building" number={4} />
          <Category title="Boxing" number={4} />
          <Category title="Crossfit" number={4} />
          <Category title="Fitness" number={4} />
          <Category title="Meditation" number={4} />
          <Category title="Yoga" number={4} />
        </div>
      </div>

      <RecentPosts />
      <PopularTags />
      <BlogAdvertise />
    </div>
  );
};

export default BlogAside;
