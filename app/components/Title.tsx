'use client';

import React from "react";

class Title extends React.Component {

  title: string;
  headerClass: string;

  constructor(props) {
    super(props);
    this.title = props.title;
    this.headerClass = props.headerClass;
  }

  render() {
    return(
      <div className={`title-container ${this.headerClass}-hero d-flex align-items-lg-center`}>
              <div className="container">
                  <div className="row w-100">
                      <div className="col-lg-8 text-center text-lg-start my-3 py-5 my-lg-5 py-lg-5">
                          <h1>{this.title}</h1>
                      </div>
                  </div>
              </div>
          </div>
    )
  }

}

export default Title;