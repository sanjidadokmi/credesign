
const About = () => {
  return (

    <>
    <section id="about" className="p-100">
      <div className="container">
        <div className="row item-center">
          <div className="col-50">
            <div className="banner_img">
              <img src="./assets/images/about/Image (1).png" alt="" />
            </div>
          </div>
          <div className="col-50">
            <div className="banner_content">
              <span>&copy; About Me</span>
              <h2>I Can Design Anything You Want</h2>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit.
              </p>
              <div className="achievement d-flex">
                <div className="info-box d-flex">
                  <div className="img">
                    <img src="./assets/images/Group 14.png" alt="" />
                  </div>
                  <div className="img-content">
                    <h4>350+</h4>
                    <h3>Complete Project</h3>
                  </div>
                </div>
                <div className="info-box d-flex">
                  <div className="img">
                    <img src="./assets/images/Group 15.png" alt="" />
                  </div>
                  <div className="img-content">
                    <h4>16+</h4>
                    <h3>Year of Experience</h3>
                  </div>
                </div>
              </div>

              <ul>
                <li>
                  <i className="fas fa-check-square"></i>
                  <span>Work simple and cline design</span>
                </li>
                <li>
                  <i className="fas fa-check-square"></i>
                  <span>New idea and user friendly design</span>
                </li>
              </ul>
              <a href="" className="common_button">Download My CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
