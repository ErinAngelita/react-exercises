import React, { Component } from 'react';
import Greeting from "./Greeting.js";

export default class GreetingContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value})
  }

  render() {
    return(
    <div>
      <Greeting nameValue = {this.state.name} changeHandle = {this.handleChange} />
    </div>
    )
  }
}
