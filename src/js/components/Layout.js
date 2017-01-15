import React from "react";

import Links from "./links";

//this class represents the main page where the links to several
//teas can be seen
export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div>
        <div className="titleBox">
          <div className="title">
              <h1>Die Supertolle Tee-Uhr.</h1>
          </div>
        </div>
        <div className="links">
          <Links />
        </div>
      </div>
    );
  }
}
