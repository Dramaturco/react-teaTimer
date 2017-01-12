import React from "react";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hallo Anna"
    };
  }

  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
