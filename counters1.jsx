import React, { Component } from "react";
import Counter from "./counter";

class Counters1 extends Component {
  render() {
    const { onReset, counters1, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters1.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters1;
