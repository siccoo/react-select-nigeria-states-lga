import React from "react";

class Logic extends React.Component {
  constructor(props) {
    super(props);

    this.handleFirstLevelChange = this.handleFirstLevelChange.bind(this);
    this.handleSecondLevelChange = this.handleSecondLevelChange.bind(this);

    // Prepopulate with the first item for each level
    this.state = {
      firstLevel: Object.keys(props.options)[0],
      secondLevel: Object.keys(props.options)[0][0],
    };
  }

  handleFirstLevelChange(event) {
    this.setState({ firstLevel: event.target.value });
  }

  handleSecondLevelChange(event) {
    this.setState({ secondLevel: event.target.value });
  }

  render() {
    const renderOption = (item) => <option value={item}>{item}</option>;

    const firstLevelOptions = Object.keys(this.props.options).map(renderOption);
    const secondLevelOptions = this.props.options[this.state.firstLevel].map(
      renderOption
    );

    return (
      <div>
        <p>
          <select
            onChange={this.handleFirstLevelChange}
            value={this.state.firstLevel}
          >
            {firstLevelOptions}
          </select>
        </p>
        <p>
          <select
            onChange={this.handleSecondLevelChange}
            value={this.state.secondLevel}
          >
            {secondLevelOptions}
          </select>
        </p>
      </div>
    );
  }
}

export default Logic;
