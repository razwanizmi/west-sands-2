import React, { Component } from "react";
import Lightbox from "../lightbox";

const images = [
  "/static/images/lightbox-1.jpeg",
  "/static/images/lightbox-2.jpeg",
  "/static/images/lightbox-3.jpeg"
];

class Gallery extends Component {
  state = {
    isOpen: false,
    photoIndex: 0
  };

  openLightbox = photoIndex => {
    this.setState(() => ({
      isOpen: true,
      photoIndex
    }));
  };

  render() {
    const { isOpen, photoIndex } = this.state;

    return (
      <section>
        <div className="gallery">
          {images.map((image, index) => (
            <div key={`gallery-image-${index}`} className="gallery__frame">
              <div
                className="gallery__image"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => this.openLightbox(index)}
              />
            </div>
          ))}
          <div className="gallery__btn">
            <button
              className="btn-secondary"
              onClick={() => this.openLightbox(0)}
            >
              View photos
            </button>
          </div>
          <div className="gallery__btn gallery__btn--mobile">
            <i className="far fa-images" onClick={() => this.openLightbox(0)} />
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState(() => ({ isOpen: false }))}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </section>
    );
  }
}

export default Gallery;
