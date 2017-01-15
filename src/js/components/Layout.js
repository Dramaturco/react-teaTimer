import React from "react";

import Timer from "./timer"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Dein Tee ist fertig in"
    };
  }

  render(){
    return (
      <div className="layout">
        <h1>{this.state.title}</h1>
        <Timer />
      </div>
    );
  }
}
