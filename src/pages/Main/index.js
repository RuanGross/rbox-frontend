import React, { Component } from "react";
import api from "../../services/api.js";

import "./styles.css";
import logo from "../../assets/logo.svg";

export default class Main extends Component {
  state = {
    newBox: ""
  };
  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post("boxes", {
      title: this.state.newBox
    });
    console.log(response.data);
    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = e => {
    this.setState({ newBox: e.target.value });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="" />
          <input
            value={this.state.newBox}
            onChange={this.handleInputChange}
            placeholder="Nome da sua RBOX"
          />
          <button type="submit">CRIAR</button>
        </form>
      </div>
    );
  }
}
