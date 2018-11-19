const Reviews = () => {
  return (
    <section className="section-reviews">
      <div className="u-narrow-container">
        <h2 className="header-2 header-2--section">Reviews</h2>
        <div>
          <div className="review">
            <div className="review__header">
              <div className="review__left">
                <i className="fas fa-quote-right" />
              </div>
              <div className="review__center">
                <p className="review__reviewer">Federica Satosha</p>
                <h5 className="header-5">Italy</h5>
              </div>
              <div className="review__right">
                <img
                  src="/static/images/tripadvisor.png"
                  alt="Tripadvisor logo"
                  className="review__ta"
                />
              </div>
            </div>
            <div className="review__body">
              &quot;Probably the best room in Ukulhas - highly recommended hotel
              for the ultimate local island expereince.&quot;
            </div>
          </div>
          <div className="review">
            <div className="review__header">
              <div className="review__left">
                <i className="fas fa-quote-right" />
              </div>
              <div className="review__center">
                <p className="review__reviewer">Federica Satosha</p>
                <h5 className="header-5">Italy</h5>
              </div>
              <div className="review__right">
                <img
                  src="/static/images/tripadvisor.png"
                  alt="Tripadvisor logo"
                  className="review__ta"
                />
              </div>
            </div>
            <div className="review__body">
              &quot;Probably the best room in Ukulhas - highly recommended hotel
              for the ultimate local island expereince...&quot;
              <span className="review__more">
                More <i className="fas fa-chevron-down" />
              </span>
            </div>
          </div>
          <div className="review">
            <div className="review__header">
              <div className="review__left">
                <i className="fas fa-quote-right" />
              </div>
              <div className="review__center">
                <p className="review__reviewer">Federica Satosha</p>
                <h5 className="header-5">Italy</h5>
              </div>
              <div className="review__right">
                <span className="review__b-logo">B.</span>
              </div>
            </div>
            <div className="review__body">
              &quot;Probably the best room in Ukulhas - highly recommended hotel
              for the ultimate local island expereince.&quot;
            </div>
          </div>
          <div className="review-more">
            <div className="review-more__left">
              <p className="review-more__title">100+ Great Reviews</p>
              <p className="review-more__link">
                Read more reviews on TripAdisor
              </p>
            </div>
            <div className="review-more__right">
              <img
                src="/static/images/ta-review.png"
                alt="Tripadvisor review"
                className="review-more__ta-review"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
