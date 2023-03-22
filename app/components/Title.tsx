'use client';

import React from "react";

class Title extends React.Component {

  title: string;

  constructor(props) {
    super(props);
    this.title = props.title;
  }

  render() {
    return(
      <div className="title-container">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6 my-3 my-lg-5 py-lg-5">
                          <h1>{this.title}</h1>
                      </div>
                  </div>
              </div>
          </div>
    )
  }

}

export default Title;