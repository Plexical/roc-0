// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
        <div id="about-main-div">
          <h1>Contact</h1>
        </div>
    );
  }
}
