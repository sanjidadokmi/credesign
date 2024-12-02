import React from "react";

const Footer = () => {
  return (
    <>
    <footer>
      
      <div className="container">
        <div className="row footer-top">
          <div className="footer-col1">
            <img src="./assets/images/logo/footer_Logo.png" alt="" />
            <p>
              At vero eos et accusamus et iusto odio dign ducimus qui blanditiis
              praesentium volup deleniti atque corrupti quos dolores et
              molestias excepturi sint occaecati
            </p>
            <h3>credesign@gmail.com</h3>
          </div>
          <div className="footer-col2">
            <h4>Explore Link</h4>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Resume</a></li>
              <li><a href="">Portfolio</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>

          <div className="footer-col3">
            <h4>My Services</h4>
            <ul>
              <li><a href="">UI/UX Design</a></li>
              <li><a href="">Mobile App</a></li>
              <li><a href="">Graphics Design</a></li>
              <li><a href="">Web Developer</a></li>
            </ul>
          </div>

          <div className="footer-col4">
            <h4>Follow me</h4>
            <ul className="row">
              <li><a href=""><i className="fab fa-facebook"></i></a></li>
              <li><a href=""><i className="fab fa-twitter"></i></a></li>
              <li><a href=""><i className="fab fa-dribbble"></i></a></li>
              <li><a href=""><i className="fab fa-behance"></i></a></li>
            </ul>

            <div className="follow-info">
              <div className="follow-single">
                <img src="./assets/images/location Icon.png" alt=""/>
                <p>202 Dog Hill Lane Beloit, KS 67420</p>
              </div>
              <div className="follow-single">
                <img src="./assets/images/phone icon.png" alt=""/>
                <p>1-800-915-6270</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="solid-line"></div>

      
      <div className="container">
        <div className="row footer-bottom">
          <p>All rights reserved 2023 Credesign</p>
          <ul className="footer-menu">
            <li><a href="">Terms & Condition</a></li>
            <li><a href="">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
