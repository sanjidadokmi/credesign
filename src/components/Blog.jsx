import React from "react";

const Blog = () => {
  return (
<>
<section id="blog">
      <div className="container">
        <div className="row justify-center mb-42">
          <div className="col-50 text-center">
            <div className="service_icon">
              <span className="circle"></span>
              <p>My Blog</p>
            </div>

            <h2>LATEST BLOG</h2>
          </div>
        </div>

        <div className="row blog">
          <div className="blog-single">
            <a href=""><img src="./assets/images/blog/blog 1.png" alt="" /></a>
            <div className="blog-content">
              <span className="date">20 January, 2023</span>
              <h3>Become a UX/UI Designer With Career Foundry.</h3>
              <a href="" className="link"
                >Read More <i className="fa-solid fa-arrow-right"></i
              ></a>
            </div>
          </div>
          <div className="blog-single">
            <a href=""><img src="./assets/images/blog/blog  2.png" alt="" /></a>
            <div className="blog-content">
              <span className="date">15 January, 2023</span>
              <h3>The Best App Development For Your Business Plan.</h3>
              <a href="" className="link"
                >Read More <i className="fa-solid fa-arrow-right"></i
              ></a>
            </div>
          </div>
          <div className="blog-single">
            <a href=""><img src="./assets/images/blog/blog  3.png" alt="" /></a>
            <div className="blog-content">
              <span className="date">08 January, 2023</span>
              <h3>The Best Portfolio For Agency Design Thinking</h3>
              <a href="" className="link"
                >Read More <i className="fa-solid fa-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
</>  
);
};

export default Blog;
