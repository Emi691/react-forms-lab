import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      remainingChars: 280,
    };
  }

  handleChange = (event) => {
    debugger
    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
        <p>characters remaining: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
