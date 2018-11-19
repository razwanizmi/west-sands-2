import DatePicker from "react-datepicker";
import Select from "react-select";

const options = [
  { value: 1, label: "1 guest" },
  { value: 2, label: "2 guests" },
  { value: 3, label: "3 guests" },
  { value: 4, label: "4 guests" },
  { value: 5, label: "5 guests" },
  { value: 6, label: "6 guests" },
  { value: 7, label: "7 guests" },
  { value: 8, label: "8 guests" },
  { value: 9, label: "9 guests" },
  { value: 10, label: "10 guests" },
  { value: 11, label: "11 guests" },
  { value: 12, label: "12 guests" },
  { value: 13, label: "13 guests" },
  { value: 14, label: "14 guests" },
  { value: 15, label: "15 guests" },
  { value: 16, label: "16 guests" }
];

class QuoteForm extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    guests: { value: 1, label: "1 guest" }
  };

  handleEndDateChange = endDate => {
    this.setState(() => ({ endDate }));
  };

  handleGuestsSelect = guests => {
    this.setState(() => ({ guests }));
  };

  handleStartDateChange = startDate => {
    this.setState(() => ({ startDate }));
  };

  render() {
    const { startDate, endDate, guests } = this.state;

    return (
      <form className="side-form">
        <h5 className="side-form__header">Get a quote</h5>
        <div className="side-form__group">
          <label className="side-form__label">Dates</label>
          <div className="side-form__dates">
            {typeof window !== "undefined" && (
              <DatePicker
                selected={startDate}
                onChange={this.handleStartDateChange}
              />
            )}
            <i className="fas fa-arrow-right" />
            {typeof window !== "undefined" && (
              <DatePicker
                selected={endDate}
                onChange={this.handleEndDateChange}
              />
            )}
          </div>
        </div>
        <div className="side-form__group">
          <label className="side-form__label">Guests</label>
          <Select
            value={guests}
            onChange={this.handleGuestsSelect}
            options={options}
            placeholder="Guests"
            clearable={false}
            searchable={false}
          />
        </div>
        <div className="side-form__group">
          <label className="side-form__label">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="side-form__input"
          />
        </div>
        <div className="side-form__group side-form__group--submit">
          <input
            type="submit"
            value="Request a quote"
            className="btn-primary"
          />
        </div>
      </form>
    );
  }
}

export default QuoteForm;
