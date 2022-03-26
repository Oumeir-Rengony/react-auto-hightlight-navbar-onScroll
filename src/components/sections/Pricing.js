import { useRef, useEffect } from "react";
import { useOnScreen } from "../../hook/useOnScreen";

const Pricing = ({ setActiveItem }) => {
  const pricingRef = useRef(null);

  const isOnScreen = useOnScreen(pricingRef);
  useEffect(() => {
    if (isOnScreen) {
      setActiveItem(2);
    }
  }, [isOnScreen, setActiveItem]);

  return (
    <section className="section" id="pricingSection" ref={pricingRef}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-7 mb-5">
            <h2 className="section-heading">Choose A Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              illum obcaecati inventore velit laborum earum.
            </p>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="pricing h-100 text-center">
              <span>&nbsp;</span>
              <h3>Basic</h3>
              <ul className="list-unstyled">
                <li>Create up to 5 forms</li>
                <li>Generate 100 monthly reports</li>
              </ul>
              <div className="price-cta">
                <strong className="price">Free</strong>
                <p>
                  <a href="##" className="btn btn-white">
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="pricing h-100 text-center popular">
              <span className="popularity">Most Popular</span>
              <h3>Professional</h3>
              <ul className="list-unstyled">
                <li>Create up to 20 forms</li>
                <li>Generate 2500 monthly reports</li>
                <li>Manage a team of up to 5 people</li>
              </ul>
              <div className="price-cta">
                <strong className="price">$9.95/month</strong>
                <p>
                  <a href="##" className="btn btn-white">
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="pricing h-100 text-center">
              <span className="popularity">Best Value</span>
              <h3>Ultimate</h3>
              <ul className="list-unstyled">
                <li>Create up to 20 forms</li>
                <li>Generate 2500 monthly reports</li>
                <li>Manage a team of up to 5 people</li>
              </ul>
              <div className="price-cta">
                <strong className="price">$199.95/month</strong>
                <p>
                  <a href="##" className="btn btn-white">
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
