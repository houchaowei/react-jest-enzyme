import React, { PureComponent } from "react";
import Empty from "./../Empty";
import "./index.css";

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      count: 0
    };
  }

  componentDidMount() {
    if (this.state.name === "") {
      this.setState({
        name: this.props.value
      });
    }
  }

  change = () => {
    this.setState({
      count: 1
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Empty text="暂无数据" />
        <button {...this.props} onClick={() => this.change()} className="btn">
          {this.props.value}
        </button>
        <br />
        this.state.name: {this.state.name}
      </div>
    );
  }
}

export default Button;
