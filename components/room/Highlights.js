const Highlights = () => {
  return (
    <section className="section-highlight">
      <div className="section-highlight__header">
        <h2 className="header-2 header-2--section">You will love</h2>
      </div>
      <div className="highlight-photos">
        <div className="highlight-photos__col">
          <img
            src="/static/images/lightbox-2.jpeg"
            alt="Room sample"
            className="highlight-photos__img"
          />
          <div className="highlight-photos__text-box highlight-photos__text-box--left">
            <h4 className="header-4 highlight-photos__header">
              Direct access to beach
            </h4>
            <p>
              Wake up and dive straight into the crystal-clear waters of the
              lagoon, and explore the world beneath the surface with a snorkle.
            </p>
          </div>
        </div>
        <div className="highlight-photos__separator" />
        <div className="highlight-photos__col">
          <img
            src="/static/images/lightbox-2.jpeg"
            alt="Room sample"
            className="highlight-photos__img"
          />
          <div className="highlight-photos__text-box highlight-photos__text-box--right">
            <h4 className="header-4 highlight-photos__header">
              Outdoor living
            </h4>
            <p>
              A spacious deck area, with infinity pool, al fresco shower and
              oversea hammock brings you as close as possible to the ocean
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
