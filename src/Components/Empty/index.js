/**
 * 空页面
 */
import React, { PureComponent } from "react";
import PT from "prop-types";
import "./index.css";

class Empty extends PureComponent {
  static propTypes = {
    text: PT.string
  };

  render() {
    const { text } = this.props;

    return (
      <div className="empty-view-wrapper">
        <div className="text-content">{text}</div>
      </div>
    );
  }
}

export default Empty;
