import React, { Component } from 'react';
import { ButtonTag } from './Feedback.styled';
import {
  Container,
  StatisticsContainer,
  Header,
  ButtonContainer,
  H2,
  P,
} from '../Feedback/Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = e => {
    this.setState({
      good: this.state.good + 1,
    });
  };
  handleIncrementNeutral = e => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };
  handleIncrementBad = e => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };
  render() {
    return (
      <Container>
        <Header>Expresso</Header>
        <H2>Please leave feedback</H2>
        <ButtonContainer>
          <ButtonTag
            type="button"
            onClick={this.handleIncrementGood}
            name="Good"
          >
            Good
          </ButtonTag>
          <ButtonTag
            type="button"
            onClick={this.handleIncrementNeutral}
            name="Neutral"
          >
            Neutral
          </ButtonTag>
          <ButtonTag type="button" onClick={this.handleIncrementBad} name="Bad">
            Bad
          </ButtonTag>
        </ButtonContainer>
        <StatisticsContainer>
          <H2>Statistics</H2>
          {this.state.good !== 0 && <P>Good: {this.state.good}</P>}
          {this.state.neutral !== 0 && <P>Neutral: {this.state.neutral}</P>}
          {this.state.bad !== 0 && <P>Bad: {this.state.bad}</P>}
          {this.state.good + this.state.neutral + this.state.bad !== 0 && (
            <P>
              Total: {this.state.good + this.state.neutral + this.state.bad}
            </P>
          )}
          {Math.floor(
            (this.state.good * 100) /
              (this.state.good + this.state.neutral + this.state.bad)
          ) > 0 && (
            <P>
              Positive feedback:{' '}
              {Math.floor(
                (this.state.good * 100) /
                  (this.state.good + this.state.neutral + this.state.bad)
              )}
              %
            </P>
          )}
          {this.state.good + this.state.neutral + this.state.bad < 1 && (
            <P>No feedback given</P>
          )}
        </StatisticsContainer>
      </Container>
    );
  }
}

export default Feedback;
