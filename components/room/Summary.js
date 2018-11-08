const Summary = () => {
  return (
    <div className="section-summary">
      <h6 className="header-6 u-margin-y-small">Premium suites</h6>
      <h2 className="header-2 u-margin-bottom-small">Grand ocean view suite</h2>
      <hr className="separator u-margin-y-medium" />
      <div className="summary-info">
        <div className="summary-info__headers">
          <h5 className="summary-info__header header-5">250 Sqft / 12 Sqm</h5>
          <h5 className="summary-info__header header-5">&#9679;</h5>
          <h5 className="summary-info__header header-5">2 adults / 1 extra</h5>
          <h5 className="summary-info__header header-5">&#9679;</h5>
          <h5 className="summary-info__header header-5">
            1 Master bed / 1 extra bed
          </h5>
        </div>
        <div className="summary-info__summary-item">
          <div className="summary-info__icon">
            <i className="fas fa-bath" />
          </div>
          <div>
            <p className="summary-info__title">Balcony</p>
            <p>One of few rooms in Ukulhas that has a bathtub.</p>
          </div>
        </div>
        <div className="summary-info__summary-item">
          <div className="summary-info__icon">
            <i className="fas fa-bed" />
          </div>
          <div>
            <p className="summary-info__title">Beds that do magic</p>
            <p>Comfortable large beds with luxury linen.</p>
          </div>
        </div>
        <div className="summary-info__summary-item">
          <div className="summary-info__icon">
            <i className="fas fa-broom" />
          </div>
          <div>
            <p className="summary-info__title">Sparkly clean</p>
            <p>Recent guests have said that this room was sparkling clean.</p>
          </div>
        </div>
      </div>
      <hr className="separator u-margin-y-medium" />
      <h4 className="header-4 u-margin-bottom-small">
        Designed for maximum comfort
      </h4>
      <p className="u-margin-bottom-small">
        Space, Privacy &amp; Comfort. Three things that matters in our rooms.
        Thoughtful rooms with ambient moods for rest and relaxation.
      </p>
      <p className="summary-info__more">
        Read more about the room <i className="fas fa-chevron-down" />
      </p>
    </div>
  );
};

export default Summary;
