/* tslint:disable:no-console */

import "rmc-picker-scroll/assets/index.less";
import "rmc-picker-scroll/assets/popup.less";
import React from "react";
import Popup from "../src/Popup";
import { createRoot } from "react-dom/client";

class Demo extends React.Component<any, any> {
  state = {
    disabled: false,
    value: null,
  };

  disable = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  onOk = (value) => {
    console.log("onOk", value);
    this.setState({
      value,
    });
  };

  onDismiss = () => {
    console.log("onDismiss");
  };

  render() {
    const popupContent = (
      <div
        style={{
          height: 160,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        popup content
      </div>
    );

    return (
      <div style={{ margin: "10px 30px" }}>
        <h2>popup date picker</h2>
        <button onClick={this.disable}>
          {this.state.disabled ? "enable" : "disable"}
        </button>
        <div>
          <Popup
            className="fortest"
            transitionName="rmc-picker-popup-slide-fade"
            maskTransitionName="rmc-picker-popup-fade"
            content={popupContent}
            title="Picker"
            disabled={this.state.disabled}
            onDismiss={this.onDismiss}
            onOk={this.onOk}
            value={this.state.value}
          >
            <button disabled={this.state.disabled}>{"open"}</button>
          </Popup>
        </div>
      </div>
    );
  }
}

const container = document.getElementById("__react-content");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Demo />);

// ReactDOM.render(<Demo />, document.getElementById('__react-content'));
