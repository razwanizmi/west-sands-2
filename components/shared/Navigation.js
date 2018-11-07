import Link from "next/link";
import PropTypes from "prop-types";

const SideNav = ({ minimal, onHide, show }) => (
  <div className="side-nav">
    <div
      className={`side-nav__overlay ${show ? "side-nav__overlay--active" : ""}`}
      onClick={onHide}
    />
    <div className={`side-nav__menu ${show ? "side-nav__menu--active" : ""}`}>
      {show && (
        <div className="side-menu">
          <div className="side-menu__header">
            <a href="javascript:void(0)" onClick={onHide}>
              <img src="/static/images/cross.svg" alt="Close menu icon" />
            </a>
          </div>
          <div className="side-menu__body">
            <div className="side-menu__items">
              <div className="side-menu__item">
                {minimal ? (
                  <Link href="/">
                    <a className="side-menu__link" onClick={onHide}>
                      Home
                    </a>
                  </Link>
                ) : (
                  <a href="#home" className="side-menu__link" onClick={onHide}>
                    Home
                  </a>
                )}
              </div>
              {!minimal && (
                <>
                  <div className="side-menu__item">
                    <a
                      href="#hotel"
                      className="side-menu__link"
                      onClick={onHide}
                    >
                      Hotel
                    </a>
                  </div>
                  <div className="side-menu__item">
                    <a
                      href="#activities"
                      className="side-menu__link"
                      onClick={onHide}
                    >
                      Activities
                    </a>
                  </div>
                </>
              )}
            </div>
            <a
              href="https://app.axisrooms.com/beV2/home1.html?bookingEngineId=2444"
              target="_blank"
              rel="noopener noreferrer"
              className="side-menu__btn"
              onClick={onHide}
            >
              Book
            </a>
          </div>
        </div>
      )}
    </div>
  </div>
);
SideNav.propTypes = {
  minimal: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

class Navbar extends React.Component {
  state = {
    hasTint: false,
    showNotification: true,
    showSideNav: false
  };

  handleScroll = () => {
    this.setState(() => ({
      hasTint: scrollY > innerHeight ? true : false
    }));
  };

  hideSideNav = () => {
    this.setState(() => ({
      showSideNav: false
    }));
  };

  showSideNav = () => {
    this.setState(() => ({
      showSideNav: true
    }));
  };

  hideNotification = () => {
    this.setState(() => ({
      showNotification: false
    }));
  };

  componentDidMount() {
    addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { hasTint, showNotification, showSideNav } = this.state;
    const { minimal } = this.props;

    return (
      <>
        <nav className={`nav ${hasTint ? "nav--tint" : ""}`}>
          <div className="nav__links">
            {minimal ? (
              <Link href="/">
                <a className="nav__link">
                  <img
                    src="/static/images/logo-header.svg"
                    alt="West Sands logo"
                    className="nav__logo"
                  />
                </a>
              </Link>
            ) : (
              <a href="#home" className="nav__link">
                <img
                  src="/static/images/logo-header.svg"
                  alt="West Sands logo"
                  className="nav__logo"
                />
              </a>
            )}
            {!minimal && (
              <>
                <a href="#hotel" className="nav__link nav__link--hoverable">
                  Hotel
                </a>
                <a
                  href="#activities"
                  className="nav__link nav__link--hoverable"
                >
                  Activities
                </a>
              </>
            )}
          </div>
          <div className="nav__links">
            <a
              href="https://app.axisrooms.com/beV2/home1.html?bookingEngineId=2444"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__btn btn-primary"
            >
              Book
            </a>
          </div>
          <div className="nav__links nav__links--mobile">
            {minimal ? (
              <Link href="/">
                <a className="nav__link nav__link--burger">
                  <img
                    src="/static/images/logo-header.svg"
                    alt="West Sands logo"
                    className="nav__logo"
                  />
                </a>
              </Link>
            ) : (
              <a href="#home" className="nav__link nav__link--burger">
                <img
                  src="/static/images/logo-header.svg"
                  alt="West Sands logo"
                  className="nav__logo"
                />
              </a>
            )}
          </div>
          <div className="nav__links nav__links--mobile">
            <a
              href="javascript:void(0)"
              onClick={this.showSideNav}
              className="nav__link nav__link--burger"
            >
              <img src="/static/images/burger.svg" alt="Open menu icon" />
            </a>
          </div>
        </nav>
        <SideNav
          minimal={minimal}
          onHide={this.hideSideNav}
          show={showSideNav}
        />
      </>
    );
  }
}
Navbar.propTypes = {
  minimal: PropTypes.bool
};

export default Navbar;
