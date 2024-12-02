
const Navbar = () => {
  return (
    <>
    <header>
      <div className="container">
        <div className="row justify-between">
          <div className="logo">
            <a href="index.html">
              <img src="./assets/images/logo/Logo.png" alt="Header logo" />
            </a>
          </div>
          <nav className="menu">
            <ul className="d-flex">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Resume</a></li>
              <li><a href="">Portfolio</a></li>
              <li><a href="">Testimonial</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </nav>
          <a href="" className="common_button">Contact Us</a>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;
