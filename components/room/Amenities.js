const Amenities = () => {
  return (
    <section className="section-amenities">
      <div>
        <h2 className="header-2 header-2--section">Amenities</h2>
      </div>
      <div className="amenities__container">
        <div className="amenities__col">
          <p className="amenities__header">Amenities in this room</p>
          <ul className="amenities__ul">
            <li className="amenities__li">Kitchen</li>
            <li className="amenities__li">Hair dryer</li>
            <li className="amenities__li">Shampoo</li>
          </ul>
          <p className="amenities__more">Show all amenities</p>
        </div>
        <div className="amenities__col">
          <div className="amenities__box">
            <img
              src="/static/images/resize.png"
              alt="Room layout icon"
              className="amenities__icon"
            />
            <p className="amenities__layout">View room layout</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
