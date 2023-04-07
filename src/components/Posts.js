import React, { useState } from "react";
import { posts } from "../data";
import "../css/BlogPage/BlogPosts.css";

const Posts = ({ page }) => {
  const postsForPage = 4;

  const pagePosts = posts.slice(postsForPage * (page - 1), postsForPage * page);

  return (
    <div>
      {pagePosts.map((post, index) => {
        const { img, author, title, category, text, date } = post;
        return (
          <div className="post" key={index}>
            <img src={img} alt="post" />
            <div className="post-info">
              <span>
                <i className="fa-solid fa-layer-group"></i>
                &nbsp;By <b>{author}</b> | {date} | {category}
              </span>
              <h2>{title}</h2>
              <p>{text}</p>
              <button className="btn" id="post-btn">
                <p>purchase now</p>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
