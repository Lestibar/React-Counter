import React, { Component } from "react";
import Counters1 from "./components/counters1";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters1: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    const counters1 = [...this.state.counters1];
    const index = counters1.indexOf(counter);
    counters1[index] = { ...counter };
    counters1[index].value++;
    this.setState({ counters1 });
  };
  handleReset = () => {
    const counters1 = this.state.counters1.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters1 });
  };

  handleDelete = counterId => {
    const counters1 = this.state.counters1.filter(c => c.id !== counterId);
    this.setState({ counters1 });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters1={this.state.counters1.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters1
            counters1={this.state.counters1}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
