import React from "react";

const Review = () => {
  return (
    <>
    <section id="review">
      <div className="container">
        <div className="row justify-center mb-42">
          <div className="col-50 text-center">
            <div className="service_icon">
              <span className="circle"></span>
              <p>Testimonial</p>
            </div>

            <h2>Client Feedback</h2>
          </div>
        </div>

        <div className="row review">
          <div className="review-single">
            <div className="review-meta">
              <a href=""
                ><img src="./assets/images/client/client 2.png" alt=""
              /></a>
              <div className="author-info">
                <h3>Siam Talukder</h3>
                <small>CTO, Xyz Group</small>
              </div>
            </div>
            <p>
              “Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature fr45
              BC, mak it over 2000 years old.
            </p>
          </div>

          <div className="review-single">
            <div className="review-meta">
              <a href=""
                ><img src="./assets/images/client/client 2.png" alt=""
              /></a>
              <div className="author-info">
                <h3>Siam Talukder</h3>
                <small>CTO, Xyz Group</small>
              </div>
            </div>
            <p>
              “Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature fr45
              BC, mak it over 2000 years old.
            </p>
          </div>

          <div className="review-single">
            <div className="review-meta">
              <a href=""
                ><img src="./assets/images/client/client 3.png" alt=""
              /></a>
              <div className="author-info">
                <h3>Siam Talukder</h3>
                <small>CTO, Xyz Group</small>
              </div>
            </div>
            <p>
              “Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature fr45
              BC, mak it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Review;
