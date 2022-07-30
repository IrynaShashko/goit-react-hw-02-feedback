import React, { Component } from 'react';
import { ButtonTag } from './Button.styled';

class Button extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {
    console.log('cliiiik', this.props.text);
    this.setState({
      good: 5,
    });
  };

  render() {
    return (
      <ButtonTag
        type="button"
        onClick={this.handleIncrement}
        value={this.props.text}
      >
        {this.props.text}
      </ButtonTag>
    );
  }
}

export default Button;
