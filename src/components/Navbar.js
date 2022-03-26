const Navbar = ({ activeItem, setActiveItem }) => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1>
            <a href="##">SoftLand</a>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a
                className={activeItem === 0 ? "active" : ""}
                href="#homeSection"
                onClick={() => setActiveItem(0)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={activeItem === 1 ? "active" : ""}
                href="#featureSection"
                onClick={() => setActiveItem(1)}
              >
                Features
              </a>
            </li>
            <li>
              <a
                className={activeItem === 2 ? "active" : ""}
                href="#pricingSection"
                onClick={() => setActiveItem(2)}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className={activeItem === 3 ? "active" : ""}
                href="#contactSection"
                onClick={() => setActiveItem(3)}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
