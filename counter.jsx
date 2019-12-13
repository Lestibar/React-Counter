import React, { Component } from "react";
class Counter extends Component {
  // iḿ no longer changing state, props instead
  //state = {
  //  value: this.props.counter.value
  //};

  //  constructor() {
  //  super();
  //    this.handleIncrement = this.handleIncrement.bind(this);
  //  }

  // iḿ no longer changing state, props instead
  //handleIncrement = () => {
  //  this.setState({ value: this.state.value + 1 });
  //};

  //The in line function react => generate an error that says product is not defined
  //
  //doHandleIncrement = () => {
  //  this.handleIncrement({ id: 1 });
  //};

  style1 = {
    fontSize: "15px",
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span style={this.style1} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
