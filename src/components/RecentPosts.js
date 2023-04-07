import React from "react";
import { posts } from "../data";
import "../css/BlogPage/RecentPosts.css";

const RecentPosts = () => {
  const recentPosts = posts.slice(0, 6);

  return (
    <div className="recent-posts-container">
      <h3>Recent Posts</h3>
      <div className="underline"></div>
      <div className="recent-posts">
        {recentPosts.map((post, index) => {
          const { img, date, title } = post;
          return (
            <div className="recent-post" key={index}>
              <img src={img} alt="recent-post" />
              <div className="recent-post-info">
                <span>{date}</span>
                <h4>{title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentPosts;
