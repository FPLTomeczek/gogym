import React, { useState } from "react";
import SecondaryHero from "../components/SecondaryHero";
import Posts from "../components/Posts";
import BlogAside from "../components/BlogAside";
import "../css/BlogPage/Blog.css";
import { posts } from "../data";

const BlogPage = () => {
  const [page, setPage] = useState(1);

  const numOfPages = Math.ceil(posts.length / 4);

  return (
    <div>
      <SecondaryHero text="Blog" />
      <div className="blog-container">
        <div className="posts-container">
          <Posts page={page} />
          <div className="page-buttons">
            {Array.from({ length: numOfPages }, (x, i) => {
              return (
                <div
                  key={i}
                  className={`page-button ${page === i + 1 ? "active" : ""}`}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </div>
        <aside>
          <BlogAside />
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
