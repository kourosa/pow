import React, { Component, createElement } from "react";
import Tip from "../Components/Tip.jsx";
const parentStyle = {
  position: "relative"
};

export default class Tooltip extends Component {
  state = {
    show: false
  };

  render() {
    return createElement(
      "div",
      {
        style: { ...parentStyle, ...this.props.style },
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      this.props.children,
      this.state.show && (
        <Tip
          item={this.props.item}
          onAddBox={this.props.onAddBox}
          onAddContainer={this.props.onAddContainer}
        />
      )
    );
  }

  _handleMouseEnter() {
    this.setState({ show: true });
  }
  handleMouseEnter = this._handleMouseEnter.bind(this);

  _handleMouseLeave() {
    this.setState({ show: false });
  }
  handleMouseLeave = this._handleMouseLeave.bind(this);
}
