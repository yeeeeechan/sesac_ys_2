import { Component } from "react";

class StateClass extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <>
        <div>{this.state.number}</div>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return { number: prevState.number + 2 };
            });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return { number: prevState.number - 1 };
            });
          }}
        >
          -1
        </button>
      </>
    );
  }
}

export default StateClass;
