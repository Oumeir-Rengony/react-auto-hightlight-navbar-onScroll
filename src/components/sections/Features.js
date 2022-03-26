import { useEffect, useRef } from "react";
import { useOnScreen } from "../../hook/useOnScreen";

const Features = ({ setActiveItem }) => {
  const featureRef = useRef(null);

  const isOnScreen = useOnScreen(featureRef);

  useEffect(() => {
    if (isOnScreen) {
      setActiveItem(1);
    }
  }, [isOnScreen, setActiveItem]);

  return (
    <section ref={featureRef} id="featureSection">
      <div className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 me-auto">
              <h2 className="mb-4">Seamlessly Communicate</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur at reprehenderit optio, laudantium eius quod, eum maxime
                molestiae porro omnis. Dolores aspernatur delectus impedit
                incidunt dolore mollitia esse natus beatae.
              </p>
              <p>
                <a href="##" className="btn btn-primary">
                  Download Now
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="./images/communicate.svg"
                alt="communicate"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 ms-auto order-2">
              <h2 className="mb-4">Gather Feedback</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur at reprehenderit optio, laudantium eius quod, eum maxime
                molestiae porro omnis. Dolores aspernatur delectus impedit
                incidunt dolore mollitia esse natus beatae.
              </p>
              <p>
                <a href="##" className="btn btn-primary">
                  Download Now
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="./images/feedback.svg"
                alt="feedback"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
