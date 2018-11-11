class Offer extends React.Component {
  state = {
    email: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value
    }));
  };

  render() {
    return (
      <section className="section-offer">
        <div className="offer-box">
          <div className="offer-box__content">
            <img
              src="/static/images/gift-box.png"
              alt="Gift box"
              className="offer-box__icon"
            />
            <h3 className="header-2 offer-box__header">
              Exclusive offer for you
            </h3>
            <h4 className="header-4 offer-box__subheader">
              Complimentary Perks, best rate guarenteed and personalized
              services when you book on our website.
            </h4>
            <form>
              <input
                type="text"
                name="email"
                id="email"
                className="offer-box__input"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <button className="btn-secondary">Send offer</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Offer;
