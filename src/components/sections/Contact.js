import { useRef, useEffect } from "react";
import { useOnScreen } from "../../hook/useOnScreen";

const Contact = ({ setActiveItem }) => {
  const contactRef = useRef(null);

  const isOnScreen = useOnScreen(contactRef);
  useEffect(() => {
    if (isOnScreen) {
      setActiveItem(3);
    }
  }, [isOnScreen, setActiveItem]);

  return (
    <section className="section" id="contactSection" ref={contactRef}>
      <div className="container">
        <div className="row mb-5 align-items-end">
          <div className="col-md-6" data-aos="fade-up">
            <h2>Contact Form</h2>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 ms-auto order-2" data-aos="fade-up">
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong className="d-block mb-1">Address</strong>
                <span>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li className="mb-3">
                <strong className="d-block mb-1">Phone</strong>
                <span>+1 232 3235 324</span>
              </li>
              <li className="mb-3">
                <strong className="d-block mb-1">Email</strong>
                <span>youremail@domain.com</span>
              </li>
            </ul>
          </div>

          <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <label htmlFor="name">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <div className="col-md-12 form-group mt-3">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="col-md-12 form-group mt-3">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>

                <div className="col-md-6 form-group">
                  <input
                    type="submit"
                    className="btn btn-primary d-block w-100"
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
