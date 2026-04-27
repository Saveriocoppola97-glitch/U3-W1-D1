import { Component } from "react";

class MyClassComponent extends Component {
  render() {
    return (
      <>
        <img src={this.props.cat} alt={this.props.catAlt} />
      </>
    );
  }
}

export default MyClassComponent;
