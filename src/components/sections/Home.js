import React, { useRef, useEffect } from "react";
import { useOnScreen } from "../../hook/useOnScreen";

const Home = ({ setActiveItem }) => {
  const heroRef = useRef(null);

  const isOnScreen = useOnScreen(heroRef);

  useEffect(() => {
    if (isOnScreen) {
      setActiveItem(0);
    }
  }, [isOnScreen, setActiveItem]);

  return (
    <section className="hero-section" id="homeSection" ref={heroRef}>
      <div className="wave">
        {
          <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Apple-TV"
                transform="translate(0.000000, -402.000000)"
                fill="#FFFFFF"
              >
                <path
                  d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                  id="Path"
                ></path>
              </g>
            </g>
          </svg>
        }
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 hero-text-image">
            <div className="row">
              <div className="col-lg-8 text-center text-lg-start">
                <h1>Promote Your App with SoftLand</h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <p>
                  <a href="##" className="btn btn-outline-white">
                    Get started
                  </a>
                </p>
              </div>
              <div className="col-lg-4 iphone-wrap">
                <img
                  src="./images/phone_1.png"
                  alt="phone1"
                  className="phone-1"
                />
                <img
                  src="./images/phone_2.png"
                  alt="phone2"
                  className="phone-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
