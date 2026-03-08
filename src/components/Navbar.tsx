export const Navbar = () => {
  return (
    <div className="navbar-wrap">
      <nav className="navbar">
        <img
          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-1.svg"
          alt="Icon"
          className="navbar-shape"
        />

        <a
          href="/projects"
          className="nav-link"
        >
          <img
            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-2.svg"
            alt="Icon"
            className="nav-link-icon"
          />
          <span className="nav-link-text">
            Projects
          </span>
        </a>

        <a
          href="/services"
          className="nav-link nav-services-mobile"
        >
          <img
            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-3.svg"
            alt="Icon"
            className="nav-link-icon"
          />
          <span className="nav-link-text">
            Services
          </span>
        </a>

        <div className="nav-services-desktop">
          <a
            href="/services"
            className="nav-link"
          >
            <span className="nav-link-text">Services</span>
          </a>
        </div>

        <a
          href="/contact"
          className="cta-link"
        >
          <div className="cta-border"></div>
          <div className="cta-inner"></div>

          <div className="cta-content">
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-6.svg"
              alt="Icon"
              className="cta-main-icon"
            />
            <span className="cta-text">
              Start a Project
            </span>
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-7.svg"
              alt="Icon"
              className="cta-glow"
            />
          </div>
        </a>

        <a
          href="/pricing"
          className="nav-link"
        >
          <img
            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-8.svg"
            alt="Icon"
            className="nav-link-icon"
          />
          <span className="nav-link-text">
            Pricing
          </span>
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <a
            href="/more"
            className="nav-link"
          >
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-3.svg"
              alt="Icon"
              className="nav-link-icon"
            />
            <span className="nav-link-text">
              More
            </span>
          </a>
        </div>

        <div className="navbar-panel"></div>
      </nav>
    </div>
  );
};
