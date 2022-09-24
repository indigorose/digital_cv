import React, { Component } from 'react';
import './Heroproject.css';

class Heroproject extends Component {
  render() {
    return (
      <section className="hero--project-section">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </section>
    );
  }
}
export default Heroproject;
