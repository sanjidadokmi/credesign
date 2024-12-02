import React from "react";

const Contact = () => {
  return (
    <>
     <section id="contact">
      <div className="container">
        <div className="row justify-center mb-42">
          <div className="col-50 text-center">
            <div className="service_icon">
              <span className="circle"></span>
              <p>My Contact</p>
            </div>

            <h2>I WANT TO HEAR FROM YOU</h2>
          </div>
        </div>

        <div className="row contact">
          <div className="contact-form">
            <form action="" method="post">
              <input type="text" name="name" placeholder="Your name" />
              <input type="email" name="email" placeholder="Your email" />
              <input type="number" name="phone" placeholder="Your phone" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                name="message"
                id=""
                rows="10"
                placeholder="Your message"
              ></textarea>
              <input
                type="submit"
                value="Send Me Message"
                className="common_button"
              />
            </form>
          </div>
          <div className="contact-info">
            <div className="single-contact">
              <div className="wrap-img">
                <img src="./assets/images/location Icon.png" alt="" />
              </div>
              <div className="info">
                <h3>Address</h3>
                <small>202 Dog Hill Lane Beloit, KS 67420</small>
              </div>
            </div>
            <div className="single-contact">
              <div className="wrap-img">
                <img src="./assets/images/phone icon.png" alt="" />
              </div>
              <div className="info">
                <h3>Phone</h3>
                <small>+01589634755</small>
              </div>
            </div>
            <div className="single-contact">
              <div className="wrap-img">
                <img src="./assets/images/email icon.png" alt="" />
              </div>
              <div className="info">
                <h3>Email</h3>
                <small>credesign@gmail.com</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
