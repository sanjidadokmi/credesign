import React from "react";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
      <div className="container">
        <div className="row justify-center mb-75">
          <div className="col-50 text-center">
            <div className="service_icon">
              <span className="circle"></span>
              <p>My Portfolio</p>
            </div>

            <h2>VISIT MY PORTFOLIO</h2>
          </div>
        </div>

        <div className="row portfolio">
          <div className="resumee-single">
            <img src="./assets/images/portfolio/Placeholder.png" alt="" />
          </div>
          <div className="resumee-single">
            <img src="./assets/images/portfolio/portfolio 2.png" alt="" />
          </div>
          <div className="resumee-single">
            <img src="./assets/images/portfolio/portfolio 3.png" alt="" />
          </div>
          <div className="resumee-single">
            <img src="./assets/images/portfolio/portfolio 4.jpg" alt="" />
          </div>
          <div className="resumee-single">
            <img src="./assets/images/portfolio/portfolio 5.png" alt="" />
          </div>
          <div className="resumee-single">
            <img src="./assets/images/portfolio/portfolio 6.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Portfolio;
