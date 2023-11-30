import { Component } from "react";

class HandlerEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello World!",
    };
  }

  handleMsg = () => {
    this.setState({ msg: "Goodbye World!" });
  };

  render() {
    return (
      <>
        <h3>{this.state.msg}</h3>
        <button onClick={this.handleMsg}>클릭</button>
      </>
    );
  }
}

export default HandlerEx;
