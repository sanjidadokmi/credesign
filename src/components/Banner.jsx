const Banner = () => {
  return (
    <>
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col-50">
            <div className="banner_content">
              <span>&copy; I AM DESIGNER</span>
              <h1>Creative Design and Web Solutions</h1>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et.
              </p>
              <a href="" className="common_button">Download My CV</a>
            </div>
          </div>
          <div className="col-50">
            <div className="banner_img">
              <img src="./assets/images/about/Image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Banner;
