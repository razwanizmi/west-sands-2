const StickyNav = () => {
  return (
    <div className="sticky-nav">
      <div className="sticky-nav__container">
        <div className="sticky-nav__left">
          <ul className="sticky-nav__links">
            <li className="sticky-nav__link-box">
              <a href="#" className="sticky-nav__link">
                Specs
              </a>
            </li>
            <li className="sticky-nav__link-box">
              <a href="#" className="sticky-nav__link">
                Features
              </a>
            </li>
            <li className="sticky-nav__link-box">
              <a href="#" className="sticky-nav__link">
                Reviews
              </a>
            </li>
            <li className="sticky-nav__link-box">
              <a href="#" className="sticky-nav__link">
                Amenities
              </a>
            </li>
          </ul>
        </div>
        <div className="sticky-nav__right">
          <ul className="sticky-nav__icons">
            <li className="sticky-nav__icon-box">
              <i className="fas fa-share-alt sticky-nav__icon" />
            </li>
            <li className="sticky-nav__icon-box">
              <i className="fas fa-heart sticky-nav__icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
