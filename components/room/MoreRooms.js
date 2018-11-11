import Slider from "react-slick";

const roomsDesc = [
  {
    id: 1,
    title: "Suites & Premium Suites",
    description: "Our favorite suites, with balconies, garden and sea view",
    photoUrl: "/static/images/lightbox-2.jpeg"
  },
  {
    id: 2,
    title: "Apartments & Family Suites",
    description: "Our favorite suites, with balconies, garden and sea view",
    photoUrl: "/static/images/lightbox-2.jpeg"
  },
  {
    id: 3,
    title: "Standard Deluxe Rooms",
    description: "Our favorite suites, with balconies, garden and sea view",
    photoUrl: "/static/images/lightbox-2.jpeg"
  },
  {
    id: 4,
    title: "Grand Jacuzzi Suite",
    description: "Our favorite suites, with balconies, garden and sea view",
    photoUrl: "/static/images/lightbox-2.jpeg"
  }
];

const carouselSettings = {
  arrows: true,
  dots: true,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 3
};

const MoreRooms = () => {
  return (
    <section className="section-more">
      <h2 className="header-2 header-2--section">More rooms</h2>
      <div className="more-rooms more-rooms--desktop">
        <Slider {...carouselSettings}>
          {roomsDesc.map(roomDesc => (
            <a href="#" key={roomDesc.id}>
              <img
                src={roomDesc.photoUrl}
                alt={roomDesc.title}
                className="more-rooms__img"
              />
              <p className="more-rooms__title">{roomDesc.title}</p>
              <p>{roomDesc.description}</p>
            </a>
          ))}
        </Slider>
      </div>
      <div className="more-rooms more-rooms--tab">
        {roomsDesc.map(roomDesc => (
          <div key={roomDesc.id} className="more-rooms__col">
            <img
              src={roomDesc.photoUrl}
              alt={roomDesc.title}
              className="more-rooms__img"
            />
            <p className="more-rooms__title">{roomDesc.title}</p>
            <p>{roomDesc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreRooms;
